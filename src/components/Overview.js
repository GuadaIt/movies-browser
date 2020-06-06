import React from 'react';
import styled from 'styled-components';
import CarouselContainer from './CarouselContainer';

const Section = styled.section`
 padding: 20px;
 width: 100%;
 color: #fff;
 display: flex;
 flex-direction: column;
 align-items: center;
 .info {
  padding: 30px;
  text-align: justify;
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

 @media (min-width: 780px) {
   padding: 50px;
   flex-direction: row;
   align-items: unset;
   .info {
     padding: 0 0 0 50px;
     flex: 70%;
   };
 };
`;

const Img = styled.div`
 height: 300px;
 width: 200px;
 img {
   height: 100%;
 };

 @media (min-width: 780px) {
   flex: 30%;
   height: 100%;
   width: auto;
   img {
     width: 100%;
    };
 };
`;

const Overview = ({ item, api_key }) => {

  //falta acceder a las propiedades del item que son arrays para presentarlo como arrays en el front

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
              {firstAiredDate && <p>First Aired: {firstAiredDate}</p>}
              <p>Runtime: {item.episode_run_time || item.runtime} mins</p>
              <p>Genres: </p>
              {item.number_of_episodes && <p>Episodes: {item.number_of_episodes}</p>}
              <p>Languages: </p>
              {lastAiredDate && <p>Last Aired: {lastAiredDate}</p>}
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
      {/*éste componente no se muestra porque cuando se renderea los parametros dan undefined, por ende el fetch nunca se hace*/}
      {/*lo ideal sería que cada componente se haga cargo de su propio fetch pero como plantee el trabajo yo, pasando todo como props, se complica*/}
      {/*tal vez implementando useContext se solucionaría? */}
      <CarouselContainer title={'Cast'} link={`https://api.themoviedb.org/3/tv/2734/credits?api_key=${api_key}&language=en-US`}/>
    </>
  )
};

export default Overview;