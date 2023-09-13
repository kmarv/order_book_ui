import React from "react";
import "../assets/css/home.scss";
import logo from "../assets/img/logo.png";
import { WalletOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";

function Home() {
  return (
    <div className="main__container">
      <div className="main__div row">
        <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <div className="nav">
              <div className="nav__bar">
                <div className="logo">
                  <img src={logo} height={80} alt="logo" /> Pie Trade
                </div>
                <div className="nav__menu">
                  <div>Trade</div>
                  <div>Swap</div>
                  <div>Earn</div>
                  <div>Account</div>
                  <div>More</div>
                </div>
              </div>
              <div className="nav__btn">
                <div className="wallet">
                  <Button type="primary" icon={<WalletOutlined />}>
                    wallet
                  </Button>
                </div>
                <div className="account">
                  <Button type="primary" icon={<LogoutOutlined />}>
                    Log Out
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">fdfdfd</div>
        </div>
        {/* top nav bar */}
       
      </div>
    </div>
  );
}

export default Home;
