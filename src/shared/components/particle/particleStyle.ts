import styled, { keyframes } from "styled-components";

const getUD = (init: number, end: number) => {
  const UpDown = keyframes`
   0% {
     left: ${init}%;
     top: 0;
     bottom: 100%;
    }
    
    100% {
      left: ${end}%;
      top: 100%;
      bottom: 0;
    }
    `;
  return UpDown;
};
const getLR = (init: number, end: number) => {
  const UpDown = keyframes`
   0% {
     left: 0%;
     right: 100%;
     top: ${init}%;
     
    }
    
    100% {
      left: 100%;
      right: 0;
      top: ${end}%;
      
    }
    `;
  return UpDown;
};

interface Pr {
  init: number;
  end: number;
  time: number;
}

export const DivParticleUpDown = styled.div<Pr>`
  animation: ${(props) => getUD(props.init, props.end)}
    ${(props) => props.time}ms linear infinite;
`;
export const DivParticleLeftRight = styled.div<Pr>`
  animation: ${(props) => getLR(props.init, props.end)}
    ${(props) => props.time}ms linear infinite;
`;
