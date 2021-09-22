import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "./App.css";
import {
  Navbar,
  Exchanges,
  HomePage,
  Cryptocurrencies,
  CryptoDetail,
  News,
} from "./Components/";
import "antd/dist/antd.css";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>

              <Route exact path="/exchanges">
                <Exchanges />
              </Route>

              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>

              <Route exact path="/crypto:id">
                <CryptoDetail />
              </Route>

              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptoVerse <br />
            All rights reserved
          </Typography.Title>
        </div>
      </div>
    </div>
  );
};

export default App;
