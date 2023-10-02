import React, { useState } from "react";
import { DownCircleOutlined } from "@ant-design/icons";
import { Divider, Select, Input, Slider, Menu, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import CandleStick from "./Charts/CandleStick";

import "../assets/css/home.scss";
import { data } from "./data/OrderHistory";

const { Option } = Select;

const marks = {
  0: "0%",
  25: "25%",
  50: "50%",
  75: "75%",
  100: {
    style: {
      color: "#f50",
    },
    label: <strong>100%</strong>,
  },
};

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const menuOptions = [
  { key: "Ethereum", label: "Ethereum", icon: "eth.png" },
  { key: "BSC", label: "Binance Smart", icon: "bsc.png" },
  { key: "SOL", label: "Solano", icon: "sol.png" },
  { key: "TRON", label: "TRON", icon: "tron.png" },
];
const marketOptions = [
  {
    key: "$PIE/USDT",
    icon: "logo-01.png",
  },
  {
    key: "ETH/USDT",
    icon: "eth.png",
  },
  {
    key: "BTC/USDT",
    icon: "btc.png",
  },
  {
    key: "BNB/USDT",
    icon: "bsc.png",
  },
];

function Home() {
  const [activeTab, setActiveTab] = useState(1);
  const [activeOrderTab, setActiveOrderTab] = useState(1);
  const [activeTabHistory, setActiveTabHistory] = useState(1);
  const [focus, setFocus] = useState(0);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [selectedOption, setSelectedOption] = useState(menuOptions[0]);
  const [marketOption, setMarketOption] = useState("$PIE/USDT");
  const [tokenImg, setTokenImg] = useState(marketOptions[0].icon);
  // const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // importing all images in the application
  const images = importAll(
    require.context("../assets/img", false, /\.(png|jpe?g|svg)$/)
  );

  // handler for networks
  const handleOptionClick = (optionKey) => {
    const option = menuOptions.find((opt) => opt.key === optionKey);
    if (option) {
      setSelectedOption(option);
    }
  };

  // handler for token images
  const handleTokenImageChange = (optionKey) => {
    const option = marketOptions.find((opt) => opt.key === optionKey);
    if (option) {
      setTokenImg(option.icon);
    }
  };

  // const showModal = () => {
  //   setOpen(true);
  // };

  // menu
  const menu = (
    <Menu onClick={(e) => handleOptionClick(e.key)}>
      {menuOptions.map((option) => (
        <Menu.Item key={option.key} className="network__item">
          <img
            src={images[option.icon]}
            height={30}
            alt={`${option.key}_logo`}
          />
          {option.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  const handleTabClick1 = (tabNumber) => {
    setFocus(tabNumber);
  };
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const handleTabClick2 = (tabNumber) => {
    setActiveOrderTab(tabNumber);
  };

  function handleChange(value) {
    setMarketOption(value);
    handleTokenImageChange(value);
  }
  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  return (
    <>
      <div className="main__container">
        <div className="main__div row">
          <div className="col-md-12">
            {/* navigation bar */}
            <div className="row">
              <div className="col-md-12">
                <div className="nav">
                  <div className="nav__bar">
                    <div className="logo">
                      <img src={images["logo.png"]} height={80} alt="logo" />{" "}
                      Pie Trade
                    </div>
                    <div className="nav__menu">
                      <div
                        className={`menu-item ${
                          activeMenuItem === 0 ? "active" : ""
                        }`}
                        onClick={() => handleMenuItemClick(0)}
                      >
                        Trade
                      </div>
                      <div
                        className={`menu-item ${
                          activeMenuItem === 1 ? "active" : ""
                        }`}
                        onClick={() => handleMenuItemClick(1)}
                      >
                        Swap
                      </div>
                      <div
                        className={`menu-item ${
                          activeMenuItem === 2 ? "active" : ""
                        }`}
                        onClick={() => handleMenuItemClick(2)}
                      >
                        Earn
                      </div>
                      <div
                        className={`menu-item ${
                          activeMenuItem === 3 ? "active" : ""
                        }`}
                        onClick={() => handleMenuItemClick(3)}
                      >
                        Account
                      </div>
                      <div
                        className={`menu-item ${
                          activeMenuItem === 4 ? "active" : ""
                        }`}
                        onClick={() => {
                          handleMenuItemClick(4);
                          navigate("/settings");
                        }}
                      >
                        Settings
                      </div>
                    </div>
                  </div>
                  <div className="nav__btn">
                    <div className="wallet">
                      <Dropdown overlay={menu} trigger={["click"]}>
                        <button className="wallet__btn">
                          <img
                            src={images[selectedOption.icon]}
                            height={30}
                            alt={`${selectedOption.key}_logo`}
                          />
                          {selectedOption.label} <DownCircleOutlined />
                        </button>
                      </Dropdown>
                    </div>
                    <div className="account">
                      <button className="connect__btn">Connect Wallet</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* top info bar */}
            <div className="row">
              <div className="col-md-12 token">
                <div className="token__info">
                  <div>
                    <img src={images[tokenImg]} height={35} alt="" />{" "}
                    {marketOption}
                  </div>
                  <div>
                    <Select
                      style={{ width: 120 }}
                      onChange={handleChange}
                      placeholder="All Markets"
                      bordered={false}
                    >
                      <Option value="BNB/USDT">BNB/USDT</Option>
                      <Option value="BTC/USDT">BTC/USDT</Option>
                      <Option value="ETH/USDT">ETH/USDT</Option>
                      <Option value="$PIE/USDT">$PIE/USDT</Option>
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
            {/* main body */}
            <div className="row" style={{ marginTop: "12px" }}>
              <div className="col-md-3">
                <div className="trade_order">
                  <div className="tabs">
                    <div
                      className={`tab-button ${
                        activeTab === 1 ? "active" : ""
                      }`}
                      onClick={() => handleTabClick(1)}
                    >
                      BUY
                    </div>
                    <div
                      className={`tab-button tt ${
                        activeTab === 2 ? "active" : ""
                      }`}
                      onClick={() => handleTabClick(2)}
                    >
                      Sell
                    </div>
                  </div>
                  <div className="tabs__order">
                    <div
                      className={`order ${focus === 1 ? "clicked" : ""}`}
                      onClick={() => {
                        handleTabClick1(1);
                      }}
                    >
                      Limit
                    </div>
                    <div
                      className={`order ${focus === 2 ? "clicked" : ""}`}
                      onClick={() => {
                        handleTabClick1(2);
                      }}
                    >
                      Market
                    </div>
                    <div
                      className={`order ${focus === 3 ? "clicked" : ""}`}
                      onClick={() => {
                        handleTabClick1(3);
                      }}
                    >
                      Stop Limit
                    </div>
                  </div>
                  <div className="price__input">
                    <span>Price</span>{" "}
                    <Input
                      width={100}
                      placeholder="20000"
                      bordered={false}
                      suffix="USDT"
                      className="input__text"
                    />
                  </div>
                  <div className="price__input">
                    <span>Amount</span>{" "}
                    <Input
                      width={100}
                      placeholder="20000"
                      bordered={false}
                      suffix="$PIE"
                      className="input__text"
                    />
                  </div>
                  <div className="price__slider">
                    <Slider marks={marks} step={10} defaultValue={50} />
                  </div>
                  <div className="price__input">
                    <span>Total</span>{" "}
                    <Input
                      width={100}
                      placeholder="20000"
                      bordered={false}
                      suffix="$PIE"
                      className="input__text"
                    />
                  </div>
                  <div className="summary">
                    <div className="summ__title">Transaction Summary</div>
                    <div className="summ__details">
                      <span>Entry Price</span> <span>$1000</span>
                    </div>
                    <div className="summ__details">
                      <span>Price Impact</span> <span>10</span>
                    </div>
                    <div className="summ__details">
                      <span>Liquidation Price</span> <span>$1000</span>
                    </div>
                    <div className="summ__details">
                      <span>Transaction fee</span> <span>$1</span>
                    </div>
                    <Divider
                      type="horizontal"
                      style={{ margin: "10px", padding: "10px" }}
                    />
                    <div className="summ__details ddd">
                      <span>Total Cost</span> <span>$20000</span>
                    </div>
                  </div>
                  <button className="order__button">Place Buy Order</button>
                </div>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-3">
                    <div className="order__graph">
                      <div className="graph__tabs">
                        <div
                          className={`tab-button-graph ${
                            activeOrderTab === 1 ? "active" : ""
                          }`}
                          onClick={() => handleTabClick2(1)}
                        >
                          Book
                        </div>
                        <div
                          className={`tab-button-graph ${
                            activeOrderTab === 2 ? "active" : ""
                          }`}
                          onClick={() => handleTabClick2(2)}
                        >
                          Trade
                        </div>
                      </div>
                      <div className="graph__order__tabs">
                        <div className="graph__title">Total</div>
                        <div className="graph__title">Amount</div>
                        <div className="graph__title">Price</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="candle__stick">
                      <CandleStick />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="order_history">
                      <div className="tabs">
                        <div
                          className={`tab-button ${
                            activeTabHistory === 1 && "active"
                          }`}
                          onClick={() => setActiveTabHistory(1)}
                        >
                          Balances
                        </div>
                        <div
                          className={`tab-button ${
                            activeTabHistory === 2 && "active"
                          }`}
                          onClick={() => setActiveTabHistory(2)}
                        >
                          Open Orders
                        </div>
                        <div
                          className={`tab-button ${
                            activeTabHistory === 3 && "active"
                          }`}
                          onClick={() => setActiveTabHistory(3)}
                        >
                          Order History
                        </div>
                        <div
                          className={`tab-button ${
                            activeTabHistory === 4 && "active"
                          }`}
                          onClick={() => setActiveTabHistory(4)}
                        >
                          Funds
                        </div>
                      </div>
                      <div className="history__table__header">
                        <div className="table__header">Time</div>
                        <div className="table__header">
                          Pair
                          <TiArrowUnsorted />
                        </div>
                        <div className="table__header">
                          Type
                          <MdOutlineKeyboardArrowDown />
                        </div>
                        <div className="table__header">
                          Side
                          <MdOutlineKeyboardArrowDown />
                        </div>
                        <div className="table__header">
                          Price
                          <TiArrowUnsorted />
                        </div>
                        <div className="table__header">
                          Amount
                          <TiArrowUnsorted />
                        </div>
                        <div className="table__header">
                          Filled
                          <TiArrowUnsorted />
                        </div>
                        <div className="table__header">
                          Unfilled
                          <TiArrowUnsorted />
                        </div>
                        <div className="table__header">Action</div>
                      </div>
                      <div className="history__table__data">
                        {data.map((item, index) => {
                          return (
                            <div
                              className={`table__row ${item.Side.toLowerCase()}`}
                              key={index}
                            >
                              <div className="table__data">{item.time} </div>
                              <div className="table__data">{item.pair}</div>
                              <div className="table__data">{item.Type}</div>
                              <div className="table__data">{item.Side}</div>
                              <div className="table__data">{item.Price}</div>
                              <div className="table__data">{item.Amount}</div>
                              <div className="table__data">{item.filled}</div>
                              <div className="table__data">{item.unfilled}</div>
                              <div className="table__data">Cancel</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
