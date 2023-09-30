import "./LoginForm.css";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";


const LoginForm = () => {
  const [needHelp, setNeedHelp] = useState(false);
  const [passEyeIcon, setPassEyeIcon] = useState(faEyeSlash);
  const [passInputType, setPassCInputTypet] = useState("password");

  const handlePassInputClick = () => {
    setPassCInputTypet(passInputType === "text"? "password": "text");
    passInputType === "text" ? setPassEyeIcon(faEye) : setPassEyeIcon(faEyeSlash);
  };

  const handleLogin = () => {
    setNeedHelp(true);
    setTimeout(() => {
      setNeedHelp(false);
    }, 10000);
  };

  return <Panel className="panel">
    <div className="heading">Welcome</div>
    <div className={needHelp ? "errorBar-visible" : "errorBar-hidden"}>Hmm... No match found. Let's give it another shot!</div>
    <div className="form">
      <div className="formRow"><input className="inputField" type="emal" placeholder="Email"></input><FontAwesomeIcon className="inputIcon" icon={faEnvelope} /></div>
      <div className="formRow"><input className="inputField" type={passInputType} placeholder="Password"></input><FontAwesomeIcon className="inputIcon" icon={faLock} /><FontAwesomeIcon className="passEyeIcon" icon={passEyeIcon} onClick={handlePassInputClick} /></div>
      <div className="formRow"><input type="checkbox"></input> <label>Remember Me</label></div>
      <div className="formRow buttonAlignRight"><Button text="Sign In" onClick={handleLogin}/></div>
      
      <div className="formRow">Don't have an account? Sign up!</div>
      <div className="formRow"><span className={needHelp ? "help-visible" : "help-hidden"}>Need help signing in?</span></div>
    </div>
    </Panel>;
};

export default LoginForm;
