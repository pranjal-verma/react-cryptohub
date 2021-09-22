import React, { useState, useEffect } from "react";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
import millify from "millify";
import _, { debounce } from "lodash";
const Cryptocurrencies = ({ simplified }) => {
  let count = simplified ? 10 : 50;

  const { data: cryptos, isFetching } = useGetCryptosQuery(count);
  const [searchTerm, setsearchTerm] = useState("");

  const { data: { cryptocurrencies = [] } = {} } = cryptos || {};
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    console.log(searchTerm);
    let { data: { coins = [] } = {} } = cryptos || {};

    // let filteredCoins = cryptocurrencies;
    let filteredCoins = coins?.filter((element) => {
      console.log(
        "🚀 ~ file: Cryptocurrencies.jsx ~ line 23 ~ filteredCoins ~ element",
        element
      );
      return element?.name?.toLowerCase()?.includes(searchTerm);
    });
    setCoins(filteredCoins);
    console.log(coins.length);
  }, [searchTerm, cryptos]);

  if (isFetching) return "Loading...";

  return (
    <>
      {simplified ? null : (
        <div className="search-crypto">
          <Input
            placeholder="search coins"
            onChange={_.debounce((e) => setsearchTerm(e.target.value), 400)}
          />
        </div>
      )}
      <Row className="crypto-card-container" gutter={[32, 32]}>
        {Array.isArray(coins)
          ? coins.slice(0, count).map((currency) => {
              return (
                <Col
                  style={{ margin: "0.8 em" }}
                  className="crypto-card"
                  lg={6}
                  sm={12}
                  sx={24}
                  key={currency.id}
                >
                  <Link to={`/crypto/${currency.id}`}>
                    <Card
                      title={`${currency.rank}, ${currency.name}`}
                      extra={
                        <img className="crypto-image" src={currency.iconUrl} />
                      }
                      hoverable
                    >
                      <p> Price: {"$ " + millify(currency.price)} </p>
                      <p> MarketCap: {millify(currency.marketCap)} </p>
                      <p> Daily Changes: {millify(currency.change)} </p>

                      {/* {currency?.description?.slice(0, 50) || ""} */}
                    </Card>
                  </Link>
                </Col>
              );
            })
          : []}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
