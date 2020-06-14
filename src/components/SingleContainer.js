import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import CarouselContainer from './CarouselContainer';
import Overview from './Overview';
import Episodes from './Episodes';
import Media from './Media';

const ContenedorPpal = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  width: 100%;
  background-color: #101010;
  .menu {
    display: flex;
    color: #515151;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    background-color: #0D0D0D;
      p {
        font-size: 18px;
      };
    div {
      background-color: #0D0D0D;
      color: #fff;
    };
  };

  @media (min-width: 780px) {
    .menu {
      p {
        font-size: 25px;
      };
      div {
        cursor: pointer;
        &:hover {
          color: #515151;
        };
      };
    };
  };
`;

// no es necesario pasar api_key como props: las variables de entorno como process.env son globales, 
// es decir se pueden usar en todo tu codigo. 
const SingleContainer = ({ api_key }) => {

  const [info, setInfo] = useState([]);
  const [section, setSection] = useState('overview');
  const params = useParams();

  useEffect(() => {
    fetch(params.movieid ?
    `https://api.themoviedb.org/3/movie/${params.movieid}?api_key=${api_key}&language=en-US`
    : `https://api.themoviedb.org/3/tv/${params.tvid}?api_key=${api_key}&language=en-US`)
    .then(res => res.json())
    .then(data => setInfo(data))
  }, []);

  const details = {
    'overview': <Overview item={info} api_key={api_key} />,
    'videos': <Media id={info.id} api_key={api_key} media_type={params.movieid ? 'movie' : 'tv'} section='videos' />,
    'episodes': <Episodes item={info} api_key={api_key} section='episodes' />,
    'photos': <Media id={info.id} api_key={api_key} media_type={params.movieid ? 'movie' : 'tv'} section='images' />
  };

  const addEpisodesSection = e => {
    e.persist();
    // por que no usar e.target.id aca? 
    setSection(e.target.textContent.toLowerCase());
  };
  
  return (
    <ContenedorPpal>
      <Header linkSingleItem={params.movieid ?
        `https://api.themoviedb.org/3/movie/${params.movieid}?api_key=${api_key}&language=en-US`
        : `https://api.themoviedb.org/3/tv/${params.tvid}?api_key=${api_key}&language=en-US`
        }
       />

      <div>
        <div className="menu">
          <div id="overview" onClick={addEpisodesSection}>
            <p>OVERVIEW</p>
          </div>
          {params.tvid &&
            <div id='episodes' onClick={addEpisodesSection}>
              <p>EPISODES</p>
            </div>
          }
          <div id='videos' onClick={addEpisodesSection}>
            <p>VIDEOS</p>
          </div>
          <div id='photos' onClick={addEpisodesSection}>
            <p>PHOTOS</p>
          </div>
        </div>

        {details[section]}

        <CarouselContainer title={'More Like This'} 
          link={params.movieid ? `https://api.themoviedb.org/3/movie/${params.movieid}/similar?api_key=${api_key}&language=en-US&page=1`
          : `https://api.themoviedb.org/3/tv/${params.tvid}/similar?api_key=${api_key}&language=en-US&page=1`}/>
     
      </div>

    </ContenedorPpal>
  );
};


export default SingleContainer;
