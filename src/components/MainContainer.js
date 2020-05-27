import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import CarouselContainer from './CarouselContainer';

const ContenedorPpal = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  width: 100%;
  background-color: #101010;
`;

const MainContainer = ({ linkHeader, link1, link2, link3, link4, title1, title2, title3, title4 }) => {

  return (
    <ContenedorPpal>
      <Header link={linkHeader} />
      <CarouselContainer link={link1} title={title1}/>
      <CarouselContainer link={link2} title={title2}/>
      {link3 && <CarouselContainer link={link3} title={title3}/>}
      {link4 && <CarouselContainer link={link4} title={title4}/>}
    </ContenedorPpal>
  );
};

export default MainContainer;