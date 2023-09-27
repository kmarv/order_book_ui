import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, Menu, Divider, Badge } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";

import Profile from "./Profile";
import Financials from "./Financial";
import Password from "./Password";
import BotSettings from "./BotSettings";
import Notifications from "./Notifications";
import TradeHistory from "./TradeHistory";
import Wallet from "./Wallet";

import "../../assets/css/home.scss";

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

function Settings() {
  // importing all images in the application
  const images = importAll(
    require.context("../../assets/img", false, /\.(png|jpe?g|svg)$/)
  );
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [activeItem, setActiveItem] = useState();
  const [selectedOption, setSelectedOption] = useState(menuOptions[0]);
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([
    { text: "Profile", active: false },
    { text: "My Financials", active: false },
    { text: "Password", active: false },
    { text: "Bot Settings", active: false },
    { text: "Notifications", active: false, badgeCount: 10 },
    { text: "Trade History", active: false },
    { text: "Wallet", active: false },
  ]);

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };
  const handleOptionClick = (optionKey) => {
    const option = menuOptions.find((opt) => opt.key === optionKey);
    if (option) {
      setSelectedOption(option);
    }
  };
  const handleClick = (index) => {
    const updatedMenuItems = menuItems.map((item, i) => {
      if (i === index) {
        // Toggle the clicked state for the clicked item
        setActiveItem(index);
        return { ...item, active: !item.active, badgeCount: 0 };
      } else {
        // Set all other items to false
        return { ...item, active: false };
      }
    });

    setMenuItems(updatedMenuItems);
  };

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

  const renderComponent =() =>{
    switch (activeItem) {
      case 0:
        return <Profile/>
      case 1:
        return <Financials/>
      case 2:
        return <Password />
      case 3:
        return <BotSettings/>
      case 4:
        return <Notifications />
      case 5:
        return <TradeHistory/>
      case 6:
        return <Wallet />
      default:
        return null;
    }
  }
  return (
    <div className="main__container">
      <div className="main__div row">
        <div className="col-md-12">
          {/* navigation bar */}
          <div className="row">
            <div className="col-md-12">
              <div className="nav">
                <div className="nav__bar">
                  <div className="logo">
                    <img src={images["logo.png"]} height={80} alt="logo" /> Pie
                    Trade
                  </div>
                  <div className="nav__menu">
                    <div
                      className={`menu-item ${
                        activeMenuItem === 0 ? "active" : ""
                      }`}
                      onClick={() => {
                        handleMenuItemClick(0);
                        navigate("/");
                      }}
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

          {/* main Body */}
          <div className="row">
            <div className="col-md-12">
              <div className="settings__page">
                <h3 className="settings__title">Settings</h3>
                <Divider />
                <div className="row">
                  <div className="col-md-3">
                    <div className="settings__menu">
                      {menuItems.map((item, index) => (
                        <p
                          key={index}
                          onClick={() => handleClick(index)}
                          className={`menu__item ${
                            item.active ? "active" : "text-muted"
                          }`}
                        >
                          {item.text}
                          {item.text === "Notifications" &&
                            item.badgeCount > 0 && (
                              <Badge
                                className="badge"
                                count={item.badgeCount}
                                showZero
                                color="#7454c8"
                              />
                            )}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="main__setings">
                    {renderComponent()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
