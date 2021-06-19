import styled from 'styled-components';
import { Select, Input } from '@/common';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin: 30px 15px;

  & > * {
    margin-right: 20px;
  }

  & > *:last-child {
    margin-right: 0px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 30px 0px;

    & > * {
      margin-bottom: 20px;
      margin-right: 0px;
    }

    & > *:last-child {
      margin-bottom: 0px;
    }
  }
`;

export const StyledSelect = styled(Select)`
  width: 250px;
`;
export const StyledInput = styled(Input)`
  width: 250px;
`;
