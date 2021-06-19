import styled from 'styled-components';
import { Input } from 'antd';

export default styled(Input)`
  &.ant-input {
    padding-left: 0px;
    color: ${(p) => p.theme.text.primaryColor};
    border-bottom: 1px solid ${(p) => p.theme.borderColor};
  }
`;
