import "./Input.css";

const RadioButtonInput = ({ style = "radio", labelText, groupName="groupA", isActive, ...radioProps })  => {
  return <label className={isActive ? "default-"+style+"Label default-"+style+"-label-active" : "default-"+style+"Label"}>{labelText}
    <input type="radio" name={groupName} {...radioProps} />
    <span className={"default-"+style}></span>
  </label>;
};

export default RadioButtonInput;
