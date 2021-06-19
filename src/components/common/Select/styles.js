import styled from 'styled-components';
import { Select } from 'antd';

export default styled(Select)`
  &.ant-select {
    color: ${(p) => p.theme.text.primaryColor};
    border-bottom: 1px solid ${(p) => p.theme.borderColor};
  }
  .ant-select-selector {
    padding-left: 0px !important;
  }

  .anticon-close-circle {
    color: ${(p) => p.theme.text.primaryColor};
    background-color: ${(p) => p.theme.bgColor};
  }
`;
