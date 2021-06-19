import React from 'react';
import SelectStyles from './styles';
function Select(props) {
  return <SelectStyles {...props}>{props.children}</SelectStyles>;
}

export default Select;
