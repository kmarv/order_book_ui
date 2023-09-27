import React, {useState} from "react";
import { Divider, Input, Button } from "antd";
import { ToastContainer, toast } from "react-toastify";

function Password() {
  const[oldPass, setOldPass] = useState();
  const[newPass, setNewPass] = useState();
  const[repeatPass, setRepeatPass] = useState();

  const handleOldPass =(e)=>{
    setOldPass(e.target.value);
  }
  const handleNewPass =(e)=>{
    setNewPass(e.target.value)
  }
  const handleRepeatPass =(e)=>{
    setRepeatPass(e.target.value)
  }

  const handleSubmit = () =>{
    if (newPass === repeatPass) {
      toast.success('Passwords Match', {
        position: toast.POSITION.TOP_RIGHT
      })
    } else {
      toast.error('Passwords Don`t Match', {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }

  return (
    <div className="bot__settings">
      <h3 h3 className="bot_set_title">
        Password
      </h3>
      <Divider />
      <p>
        <h5>Change Password</h5>
      </p>
      <div className="bot__input">
        <div className="input__group" >
          <p>Password Change</p>
          <div className="pass__input" >
            <label className="text-muted">Old Password </label> 
            <Input.Password size="large" onChange={handleOldPass}   placeholder="input old password" />
           
          </div>
          <div className="pass__input">
            <label className="text-muted">New Password </label> 
            <Input.Password size="large" onChange={handleNewPass} placeholder="input new password" />
           
          </div>
          <div className="pass__input">
            <label className="text-muted">Repeat Password </label> 
            <Input.Password size="large" onChange={handleRepeatPass} placeholder="Repeat password" />
           
          </div>
        </div>
      </div>
      <Button size="large" type="primary" onClick={handleSubmit}>Submit</Button>
      <ToastContainer/>
    </div>
  );
}

export default Password;
