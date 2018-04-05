import React from 'react';

const Input = props => {
  return(
    <input
      type="text"
      name={props.input}
      value={props.value}
      onChange={props.handleTextInput}
    />
  )
};

export default Input;