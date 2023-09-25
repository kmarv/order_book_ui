import React, { useState } from "react";
import { Divider, Input, Tooltip } from "antd";

const formatNumber = (value) => new Intl.NumberFormat().format(value);
const NumericInput = (props) => {
  const { value, onChange } = props;
  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
      onChange(inputValue);
    }
  };

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === "." || value === "-") {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, "$1"));
  };
  const title = value ? (
    <span className="numeric-input-title">
      {value !== "-" ? formatNumber(Number(value)) : "-"}
    </span>
  ) : (
    "Input a number"
  );
  return (
    <Tooltip
      trigger={["focus"]}
      title={title}
      placement="topLeft"
      overlayClassName="numeric-input"
    >
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Input a number"
        maxLength={16}
      />
    </Tooltip>
  );
};

function BotSettings() {
  const [limit, setLimit] = useState(0);
  const [orderNum, setOrderNum] = useState(0);
  const [spreadAsk, setSpreadAsk] = useState(0);
  const [spreadBid, setSpreadBid] = useState(0);
  const [time, setTime] = useState(0);

  return (
    <div className="bot__settings">
      <h3 className="bot_set_title">Bot Settings </h3>
      <Divider />
      <p>
        {" "}
        <h5>Bot Parameters</h5>
      </p>
      <div className="bot__input">
        <div className="input__group">
          <p>Orders Parameter</p>
          <div>
            <label className="text-muted">Max Number of Orders </label> :{" "}
            <NumericInput
              style={{
                width: 120,
              }}
              value={orderNum}
              onChange={setOrderNum}
            />
          </div>
        </div>
      </div>
      <div className="bot__input">
        <div className="input__group">
          <p>Spread Parameter</p>
          <div>
            {" "}
           <label className="text-muted"> Bid Spread:</label>
            <NumericInput
              style={{
                width: 120,
              }}
              value={spreadBid}
              onChange={setSpreadBid}
            />
          </div>
          <div>
           <label className="text-muted"> Ask Spread : </label>
            <NumericInput
              style={{
                width: 120,
              }}
              value={spreadAsk}
              onChange={setSpreadAsk}
            />{" "}
          </div>
        </div>
      </div>

      <div className="bot__input">
        <div className="input__group">
          <p>Amount Limit Parameter</p>
          <div>
            <label className="text-muted">Amount in USD:</label>
            <NumericInput
              style={{
                width: 120,
              }}
              value={limit}
              onChange={setLimit}
            />
          </div>
        </div>
      </div>
      <div className="bot__input">
        <div className="input__group">
          <p>Trade Time Execution Parameter</p>
          <div>
            <label className="text-muted">Time to excute a transaction</label>
            <NumericInput
              style={{ width: 120 }}
              value={time}
              onChange={setTime}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSettings;
