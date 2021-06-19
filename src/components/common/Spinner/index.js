import React from 'react';
import SpinnerStyles, { Spin } from './styles';

const Spinner = ({ size, wrapperSize }) => {
  return (
    <SpinnerStyles wrapperSize={wrapperSize}>
      <Spin size={size} />
    </SpinnerStyles>
  );
};

export default Spinner;
