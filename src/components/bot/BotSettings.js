import React, { useState } from "react";
import { Modal, Button, Watermark } from "antd";

function BotSettings(props) {
  const [loading, setLoading] = useState(false);
 

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props.setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    props.setOpen(false);
  };

  return (
    <Watermark  content="Under Development"
    // image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
     >
    <Modal
      open={props.open}
      title="Bot Settings"
      onOk={handleOk}
      width={1000}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleOk}
        >
          Submit
        </Button>,
      ]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
    </Watermark>
  );
}

export default BotSettings;
