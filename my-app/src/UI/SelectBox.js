import React, { useState } from "react";
import SelectOption from "./SelectOption";

const SelectBox = (props) => {
  const [selectedOption, setSelectedOption] = useState(
    props.selected || props.selectOptions[0].value
  );

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    props.fnCallback(event.target.value);
  };

  const selectOptions = props.selectOptions.map((option) => {
    return <SelectOption value={option.value} text={option.text} />;
  });

  return (
    <div className="selectBox">
      <label for={props.label}>{props.label}</label>
      <br />
      <select id={props.label} value={selectedOption} onChange={handleChange}>
        {selectOptions}
      </select>
    </div>
  );
};

export default SelectBox;
