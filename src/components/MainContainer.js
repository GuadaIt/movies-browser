import React from 'react';
import useFetch from '../hooks/useFetch';
import styled from 'styled-components';
import Header from './Header';
import CarouselContainer from './CarouselContainer';

const ContenedorPpal = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100vh;
  width: 100%;
  background-color: #101010;
`;

const MainContainer = ({ links }) => {

  let header_info = useFetch(links.linkHeader);
  const carousel_1_info = useFetch(links.link1);
  const carousel_2_info = useFetch(links.link2);
  const carousel_3_info = useFetch(links.link3);
  const carousel_4_info = useFetch(links.link4); 

  if (header_info && header_info.length > 1) {
    header_info = header_info[Math.floor(Math.random() * header_info.length)]
  };

  return (
    <ContenedorPpal>
      <Header headerInfo={header_info}/>
      <CarouselContainer info={carousel_1_info} title={links.title1} />
      <CarouselContainer info={carousel_2_info} title={links.title2} />
      {links.link3 && <CarouselContainer info={carousel_3_info} title={links.title3} />}
      {links.link4 && <CarouselContainer info={carousel_4_info} title={links.title4} />}
    </ContenedorPpal>
  );
};

export default MainContainer;