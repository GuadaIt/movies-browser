import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import Card from './Card';

const Section = styled.section`
  width: 100%;
  padding: 30px 20px;
  color: #fff;
  .title-section {
    display: flex;
    margin: 0 0 20px 40px;
    h3 {
      font-size: 30px;
      margin-right: 15px;
      font-weight: lighter;
    };
    p {
      color: #089AE8;
      line-height: 45px;
      &:hover {
        color: rgb(83, 195, 255);
        cursor: pointer;
      };
    };
  };
`;

const Carousel = styled.ul`
  overflow: hidden;
  div {
   display: flex;
   overflow: hidden;
   list-style: none;
  };
`;

const CarouselContainer = ({ link, title }) => {

  const history = useHistory();

  const items = useFetch(link);

  const routes = {
    'Popular Movies': 'category/popular-movies',
    'Top Rated Movies': 'category/top-rated-movies',
    'Upcoming Movies': 'category/upcoming-movies',
    'Now Playing Movies': 'category/now-playing-movies',
    'Popular Tv Shows': 'category/popular-tv-shows',
    'Top Rated Tv Shows': 'category/top-rated-tv-shows',
    'Currently Airing Tv Shows': 'category/currently-airing-tv-shows',
    'Tv Shows Airing Today': 'category/tv-shows-airing-today'
  };
  //no me redirige a /tv/category/blablabla sino a category/blablabla
  //*inserte aquí meme de "está mal, pero no tan mal"*/ 
  const handleClick = () => {
    history.push(`./${routes[title]}`);
  };

  return (
    <>
    {items && 
    <Section>
      <div className="title-section">
       <h3>{title}</h3>
       <p onClick={handleClick}>Explore all</p>
      </div>
      <Carousel>
        <div>
        {items.map(item => <Card info={item} key={item.id} />)}
        </div>
      </Carousel>
    </Section>  
    }
    </>
  );
};


export default CarouselContainer;