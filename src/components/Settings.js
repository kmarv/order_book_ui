import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";

import "../assets/css/home.scss";

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
    require.context("../assets/img", false, /\.(png|jpe?g|svg)$/)
  );
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [selectedOption, setSelectedOption] = useState(menuOptions[0]);
  const navigate = useNavigate();

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };
  // handler for networks
  const handleOptionClick = (optionKey) => {
    const option = menuOptions.find((opt) => opt.key === optionKey);
    if (option) {
      setSelectedOption(option);
    }
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
  return (
    <div className="main__container">
      <div className="main__div row">
        <div className="col-md-12">
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
        </div>
      </div>
    </div>
  );
}

export default Settings;
