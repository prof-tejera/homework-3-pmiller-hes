import RadioButtonInput from "components/Input/RadioButtonInput";
import "./RadioButtons.css";
import Panel from "components/Panel/Panel";
import { useState } from "react";

const RadioButtons = ({displayStyle = "radio", className, options, groupName = "groupA", onOptionhange}) => {
  const [currentSelectedOption, setCurrentSelectedOption] = useState({label: '', value: ''});

  const optionSelected = (option) => { 
    setCurrentSelectedOption(option)
    if (onOptionhange) {
      onOptionhange(option);
    }
  }

  return (
    <Panel className={"default-"+displayStyle+"button-panel " + className}>
      {options.map((option, i) => (
        <RadioButtonInput           
          key={i} 
          labelText={option.label} 
          value={option.value}
          groupName={groupName} 
          displayStyle={displayStyle}
          isActive={currentSelectedOption.value === option.value}
          onClick={() => optionSelected(option)}
        />
      ))}
    </Panel>
  );
};

export default RadioButtons;
