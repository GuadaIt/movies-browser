import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const ContenedorPpal = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #101010;
  nav .menu {
    display: flex;
    color: #515151;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    background-color: #0D0D0D;
    div {
      cursor: pointer;
      background-color: ${active => active ? '#101010' : '#0D0D0D'};
      color: ${active => active ? '#FFF' : '#515151'};
      &:hover {
        color: #fff;
      };
    };
  };
`;

const SingleContainer = ({ api_key }) => {


  //la ruta no cambia, sólo lo que muestra el componente
  //peeeero, al cambiar el estado se vuelve a renderizar todo el container
  //que no es lo ideal
  
  const [section, setSection] = useState('overview');
  const params = useParams();


  const details = {
    'overview': <h1>OVERVIEW</h1>,
    'videos': <h1>VIDEOS</h1>,
    'episodes': <h1>EPISODES</h1>,
    'photos': <h1>PHOTOS</h1>
  };

  const addEpisodesSection = e => {
    e.persist();
    setSection(e.target.textContent.toLowerCase());
  };

  return (
    <ContenedorPpal>
      <Header linkSingleItem={params.movieid ?
        `https://api.themoviedb.org/3/movie/${params.movieid}?api_key=${api_key}&language=en-US`
        : `https://api.themoviedb.org/3/tv/${params.tvid}?api_key=${api_key}&language=en-US`
        }
       />

      <nav>
        <div className="menu">
          <div id="overview" active={'active'} onClick={addEpisodesSection}>
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
        <div>
          {details[section]}
        </div>
      </nav>

    </ContenedorPpal>
  );
};


export default SingleContainer;