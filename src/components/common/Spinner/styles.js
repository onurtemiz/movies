import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ wrapperSize }) => (wrapperSize ? `${wrapperSize}px` : '100vh')};
`;

export const Spin = styled.div`
  height: ${({ size }) => (size ? `${size}px` : '60px')};
  width: ${({ size }) => (size ? `${size}px` : '60px')};
  border: 6px solid rgba(9, 9, 9, 0.8);
  border-top: 6px solid rgba(9, 9, 9, 0.15);
  border-radius: 100%;
  animation: ${spin} 0.6s linear infinite;
`;
