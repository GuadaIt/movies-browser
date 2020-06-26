import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card';

const Section = styled.section`
  position: relative;
  min-width: 100%;
  padding: 30px 50px;
  color: #fff;
  .title-section {
    margin-bottom: 20px;
    h3 {
      font-size: 25px;
      font-weight: lighter;
    };
    p {
      color: #089AE8;
      &:hover {
        color: rgb(83, 195, 255);
        cursor: pointer;
      };
    };
  };

  @media (min-width: 780px) {
    .title-section {
      display: flex;
      align-items: baseline;
      h3 {
        font-size: 30px;
        margin-right: 15px;
      };
    }; 
  };
`;

const Carousel = styled.ul`
  padding: 0;
  overflow: hidden;
  div {
   display: flex;
   overflow: hidden;
   list-style: none;
  };
`;


const CarouselContainer = ({ info, title }) => {

  const { id } = useParams();
  const history = useHistory();
  let { pathname } = useLocation();
  pathname = pathname.slice(1);

  const routes = {
    'Trending Movies': 'movie/category/trending-movies',
    'Popular Movies': 'movie/category/popular-movies',
    'Top Rated Movies': 'movie/category/top-rated-movies',
    'Upcoming Movies': 'movie/category/upcoming-movies',
    'Now Playing Movies': 'movie/category/now-playing-movies',
    'Trending Tv Shows': 'tv/category/trending-tv-shows',
    'Popular Tv Shows': 'tv/category/popular-tv-shows',
    'Top Rated Tv Shows': 'tv/category/top-rated-tv-shows',
    'Currently Airing Tv Shows': 'tv/category/currently-airing-tv-shows',
    'Tv Shows Airing Today': 'tv/category/tv-shows-airing-today',
    'More Like This': `${id}/similar`
  };

  const handleClick = () => {
    history.push(`./${routes[title]}`);
  };
  //falta aplicar el carousel
  return (
    <Section>
      <div className="title-section">
        <h3>{title}</h3>
        {title !== 'Cast' && <p onClick={handleClick}>Explore all</p>}
      </div>
      <Carousel>
        {info &&
            <div>
              {info.map(item => <Card info={item} key={item.id} pathname={pathname} cast={title} />)}
            </div>
        }
      </Carousel>
    </Section>
  );
};


export default CarouselContainer;