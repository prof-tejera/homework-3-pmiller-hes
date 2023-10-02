import "./LoginForm.css";

import { useState } from "react";


import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import EmailInput from "components/Input/EmailInput";
import PasswordInput from "components/Input/PasswordInput";
import CheckboxInput from "components/Input/CheckboxInput";
import ErrorBar from "components/Messaging/ErrorBar";
import FormRow from "components/Form/FormRow";
import Form from "components/Form/Form";
import FormHeader from "components/Form/FormHeader";


const LoginForm = ({header}) => {
  const [needHelp, setNeedHelp] = useState(false);


  const handleLogin = () => {
    setNeedHelp(true);
    setTimeout(() => {
      setNeedHelp(false);
    }, 10000);
  };

  return <Panel className="loginPanel">
    <FormHeader text={header}></FormHeader>
    <ErrorBar isShown={needHelp} message="Hmm... No match found. Let's give it another shot!"></ErrorBar>
    <Form>
      <FormRow><EmailInput type="emal" placeHolder="Email" /></FormRow>
      <FormRow><PasswordInput placeHolder="Password" /></FormRow>
      <FormRow><CheckboxInput labelText="Remember Me" /></FormRow>
      <FormRow className="buttonAlignRight"><Button text="Sign In" onClick={handleLogin}/></FormRow>
      
      <FormRow>Don't have an account? Sign up here!</FormRow>
      <FormRow><span className={needHelp ? "help-visible" : "help-hidden"}>Need help signing in?</span></FormRow>
    </Form>
    </Panel>;
};

export default LoginForm;
