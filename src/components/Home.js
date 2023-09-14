import React, { useState } from "react";
import "../assets/css/home.scss";
import logo from "../assets/img/logo.png";
import logo2 from "../assets/img/logo 2.png";
import { WalletOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Divider, Select, Input } from "antd";

const { Option } = Select;

function Home() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const[activeTab, setActiveTab] = useState(1);
  const[focus, setFocus] = useState(0);
  const handleTabClick1 =(tabNumber) => {
    setFocus(tabNumber)
  }
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

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
          <div className="row">
            <div className="col-md-12 token">
              <div className="token__info">
                <div>
                  <img src={logo2} height={35} alt="" /> $PIE/USDT
                </div>
                <div>
                  <Select
                    style={{ width: 120 }}
                    onChange={handleChange}
                    placeholder="All Markets"
                    disabled
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
              </div>
              <Divider type="vertical" style={{ height: "45px" }} />
              <div className="price">$3,795.15</div>
              <div className="index">
                <span className="text-mute">Index Price</span> $3,795.15
              </div>
              <div className="index">
                <span className="text-mute">Oracle Price</span> $3,795.15
              </div>
              <div className="index">
                <span className="text-mute">24h Change</span>{" "}
                <span className="price__change">$61.0(1.64%)</span>
              </div>
              <div className="index">
                <span className="text-mute">Open Interest</span> $3,795.15
              </div>
              <div className="index">
                <span className="text-mute">1h Funding</span> 0.000308%
              </div>
              <div className="index">
                <span className="text-mute">24h Volume</span> $3,795.15
              </div>
              <div className="index">
                <span className="text-mute">24h Trades</span> $3,795.15
              </div>
              <div className="index">
                <span className="text-mute">Next Funding</span> $3,795.15
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop:"12px"}}>
            <div className="col-md-3">
              <div className="trade_order">
                <div className="tabs">
                  <div  className={`tab-button ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>BUY</div>
                  <div  className={`tab-button tt ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>Sell</div>
                </div>
                <div className="tabs__order">
                  <div className={`order ${focus === 1 ? 'clicked': ''}`} onClick={()=> { handleTabClick1(1)}}>Limit</div>
                  <div className={`order ${focus === 2 ? 'clicked': ''}`} onClick={()=> { handleTabClick1(2)}}>Market</div>
                  <div className={`order ${focus === 3 ? 'clicked': ''}`} onClick={()=> { handleTabClick1(3)}}>Stop Limit</div>
                </div>
                <div className="price__input">
                  <span>Price</span>  <Input width={100} placeholder="Borderless" bordered={false} suffix="USDT" /> 
                </div>
              </div>
            </div>
            <div className="col-md-9">
              fdgfgfd
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
