import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MediaCard from './MediaCard';

const EpisodesSection = styled.section`
  padding: 30px 30px;
  .season-select {
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    select {
      background-color: #000;
      color: #fff;
      padding: 8px;
    };
    p {
      margin-left: 15px;
      color: #fff;
    };
  };

  @media (min-width: 780px) {
    .season-select {
      padding: 40px;
      align-items: unset;
    }; 
  };
`;

const EpisodesCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Episodes = ({ item, api_key, section }) => {

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

  // excelente como resolviste este componente. 

  return (
    <EpisodesSection value={selectedOption} onChange={handleChange}>
      <div className='season-select'>
        <select name='seasons'>
          {seasons.map((season, i) => <option key={i + 1} value={i + 1}>Season {i + 1}</option>)}
        </select>
      <p>{number_of_seasons}{number_of_seasons > 1 ? ' seasons' : ' season'}</p>
      </div>

      <EpisodesCardsContainer>
        {seasonEpisodes.map(episode => <MediaCard media_item={episode} section={section} />)}
      </EpisodesCardsContainer>
    </EpisodesSection>
  )
};

export default Episodes;
