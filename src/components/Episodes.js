import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';
import EpisodeCard from './EpisodeCard';

const EpisodesSection = styled.section`
  padding: 30px 30px;
  div:nth-child(1) {
    display: flex;
    padding: 40px;
    select {
      height: 30px;
      background-color: #000;
      color: #fff;
      padding: 8px;
    };
    p {
      margin-left: 15px;
      color: #fff;
    };
  };
`;

const EpisodesCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Episodes = ({ item, api_key }) => {

  const { number_of_seasons, id } = item;
  const seasons = Array.apply(null, Array(number_of_seasons));
  const [selectedOption, setSelectedOption] = useState(1);
  const [seasonEpisodes, setSeasonEpisodes] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}/season/${selectedOption}?api_key=${api_key}&language=en-US`)
      .then(res => res.json())
      .then(data => setSeasonEpisodes(data.episodes))
  }, [selectedOption]);

  const handleChange = e => {
    setSelectedOption(e.target.value);
  };

  return (
    <EpisodesSection value={selectedOption} onChange={handleChange}>
      <div>
        <select name='seasons'>
          {seasons.map((season, i) => <option value={i + 1}>Season {i + 1}</option>)}
        </select>
      <p>{number_of_seasons}{number_of_seasons > 1 ? ' seasons' : ' season'}</p>
      </div>

      <EpisodesCardsContainer>
        {seasonEpisodes.map(episode => <EpisodeCard episode={episode} />)}
      </EpisodesCardsContainer>
    </EpisodesSection>
  )
};

export default Episodes;