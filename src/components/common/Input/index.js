import React from 'react';
import InputStyles from './styles';
function Input(props) {
  return <InputStyles {...props}>{props.children}</InputStyles>;
}

export default Input;
