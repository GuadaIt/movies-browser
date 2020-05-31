import React from 'react';
import styled from 'styled-components';

const Card = styled.article`
 margin:15px 10px;
 color: #fff;
 width: 300px;
 height: 350px;
 p {
   margin-top: 10px;
 };
 img {
   width: 100%;
   height: auto;
 };
 div {
   font-size: 14px;
   height: 30%;
   overflow: hidden;
 };
 p:nth-child(2) {
   span {
     font-weight: bolder;
     color: #089AE8;
     margin-right: 8px;
   };
 };
 p:nth-child(4) {
   color: #ccc;
 }
`;

const EpisodeCard = ({ episode }) => {
  
  const releaseDate = new Date(episode.air_date).toLocaleDateString();

  return (
    <Card>
      <img src={`https://image.tmdb.org/t/p/w500/${episode.still_path}`} alt={episode.name} />
      <p><span>EP{episode.episode_number}</span>{episode.name}</p>
      <div>
        <p>{episode.overview}</p>
      </div>
      <p>{releaseDate}</p>
    </Card>
  )
};

export default EpisodeCard;