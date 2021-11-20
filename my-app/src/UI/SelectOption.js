import React  from 'react';

const SelectOption = (props) => {
  return <option key={props.value} value={props.value}>{props.text}</option>;
};

export default SelectOption;