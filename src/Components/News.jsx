import React from "react";
import { Row, Card, Typography, Select, Avatar, Col } from "antd";
import { useGetCryptoNewsQuery } from "../services/newsApi";
import moment from "moment";

const { Title, Text } = Typography;
const News = () => {
  const { data: cryptoData = {}, isFetching } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurreinces",
    count: 10,
  });
  console.log(
    "🚀 ~ file: News.jsx ~ line 6 ~ News ~ cryptoData",
    cryptoData,
    isFetching
  );
  return (
    <>
      <Row gutter={[24, 24]}>
        {cryptoData?.value?.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank ">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>
                  <img src={news?.image?.thumbnail?.contentUrl} alt="" />
                </div>
                <p>
                  {/* {news?.description?.slice(0, 100)} */}
                  {news?.description && news?.description.length > 100
                    ? news?.description.slice(0, 120)
                    : news?.description}
                </p>

                <div className="provider-container">
                  <Text>
                    {moment(news.datePublished).format("ss") + "  minutes ago"}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
