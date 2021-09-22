import React from "react";
import millify from "millify";
import { Statistic, Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  console.log("🚀 ~ file: HomePage.jsx ~ line 9 ~ HomePage ~ data", data);
  if (isFetching) return "Loading...";

  const {
    data: {
      stats: {
        total = 0,
        totalExchanges = 0,
        totalMarketCap = 0,
        total24hVolume = 0,
        totalMarkets = 0,
      } = {},
    } = {},
  } = data ?? {};
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>

      <Row level={2}>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={total} />
        </Col>

        <Col span={12}>
          <Statistic title="Total Exchanges" value={totalExchanges} />
        </Col>

        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(totalMarketCap, { precision: 2 })}
          />
        </Col>

        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(total24hVolume, {
              precision: 1,
            })}
          />
        </Col>

        <Col span={12}>
          <Statistic title="Total Markets" value={totalMarkets} />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptos In The World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified count={10} />

      <div className="home-headings-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3}>
          <Link to="/news">Show more</Link>
        </Title>
      </div>

      <News />
    </>
  );
};

export default HomePage;
