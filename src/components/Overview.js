import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CarouselContainer from './CarouselContainer';

const Section = styled.section`
 padding: 50px;
 display: flex;
 width: 100%;
 color: #fff;
 .info {
  padding-left: 50px;
  flex: 70%;
  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  };
  p {
    font-size: 18px;
  };
  .extra-info {
    margin: 30px 0 50px;
    p {
      margin-bottom: 10px;
    };
  };
 };
`;

const Img = styled.div`
 flex: 30%;
 height: 100%;
 img {
   width: 100%;
 };
`;

const Overview = ({ item, api_key }) => {

  const params = useParams();
  const firstAiredDate = new Date(item.first_air_date).toLocaleDateString();
  const lastAiredDate = new Date(item.last_air_date).toLocaleDateString();

  return (
    <>
      <Section>
          <Img>
            <img alt={item.title} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
          </Img>

          <div className="info">
            <h3>STORYLINE</h3>
            <p>{item.overview}</p>

            <div className="extra-info">
              <p>First Aired: {firstAiredDate}</p>
              <p>Runtime: {item.episode_run_time} mins</p>
              <p>Genres: </p>
              <p>Episodes: {item.number_of_episodes}</p>
              <p>Languages: </p>
              <p>Last Aired: {lastAiredDate}</p>
              <p>Creator: </p>
              <p>Seasons: {item.number_of_seasons}</p>
              <p>Status: {item.status}</p>
              <p>Network: </p>
            </div>

            <div>
              <p>ICONS</p>
            </div>
          </div>
  
      </Section>

      <CarouselContainer title={'Cast'} />
    </>
  )
};

export default Overview;