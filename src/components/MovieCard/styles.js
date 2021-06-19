import { Tag } from 'antd';
import styled, { keyframes } from 'styled-components';

const hoverPop = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.15);
  }
`;

const hoverFade = keyframes`
  0% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

export default styled.div`
  position: relative;
  height: 400px;
  width: 300px;
  width: clamp(150px, 50vw + 6rem, 300px);
  display: flex;
  cursor: pointer;

  animation: 0.4s ${hoverFade} forwards;

  &:hover {
    animation: 0.4s ${hoverPop} forwards;
  }

  &::after {
    content: '';
    background: ${(p) => p.poster !== 'N/A' && `url(${p.poster})`};
    opacity: 0.75;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 250px;
    width: clamp(150px, 50vw + 6rem, 300px);
  }
`;

export const TextWrapper = styled.div`
  width: 300px;
  width: clamp(150px, 50vw + 6rem, 300px);

  background-image: linear-gradient(to bottom, rgba(21, 21, 21, 0) -33%, #090909);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px 20px;

  @media (max-width: 768px) {
    width: 250px;
    width: clamp(150px, 50vw + 6rem, 300px);
  }
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fafbfc;
`;

export const StyledTag = styled(Tag)`
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const MetaWrapper = styled.div`
  display: flex;

  margin-top: 15px;

  & > *:first-child {
    margin-right: 15px;
  }
`;
