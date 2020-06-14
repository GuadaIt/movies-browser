import React from 'react';
import styled from 'styled-components';

const DotsContainer = styled.div`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 width: 120px;
 display: flex;
 justify-content: space-between;
 .dot {
   background-color: #089AE8;
   width: 24px;
   height: 24px;
   border-radius: 100%;
 };
 .dot-1 {
   animation: flow .4s ease 0s infinite alternate;
 };
 .dot-2 {
   animation: flow .4s ease .2s infinite alternate;
 };
 .dot-3 {
   animation: flow .4s ease .4s infinite alternate;
 };

 @keyframes flow {
  from{
    opacity: 1;
    transform: scale(1.2);
    }
  to{
    opacity: .20;
    transform: scale(.75);
  };
 };
`;

const LoadingDots = () => {
  return (
    <DotsContainer>
      <div className='dot dot-1'></div>
      <div className='dot dot-2'></div>
      <div className='dot dot-3'></div>
    </DotsContainer>
  );
};

export default LoadingDots;