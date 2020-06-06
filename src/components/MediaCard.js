import React from 'react';
import styled from 'styled-components';
import playIcon from '../assets/play.png';

const Card = styled.article`
 position: relative;
 margin: 30px 15px;
 color: #fff;
 width: 300px;
 height: ${({ section }) => section === 'episodes' && '350px'};
 p {
   margin-top: 10px;
 };
 .still-container {
   width: 100%;
    img {
      width: 100%;
      height: auto;
    };
  };
 .episode-overview {
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
 };
`;

const ExternalMediaLink = styled.a`
 position: absolute;
 bottom: 60%;
 right: 45%;
 text-decoration: none;
 color: #fff;
 &:visited {
   color: #fff;
 };
 div {
   width: 50px;
   img {
     width: 100%;
   };
 };
`;

const MediaCard = ({ media_item, section }) => {

  const releaseDate = new Date(media_item.air_date).toLocaleDateString();

  return (
    <Card section={section}>
      <div className='still-container'>
        <img src={section === 'episodes' ?
          `https://image.tmdb.org/t/p/w500/${media_item.still_path}`
          : `https://img.youtube.com/vi/${media_item.key}/mqdefault.jpg`}
          alt={media_item.name} />
      </div>
      <p>
        {section === 'episodes' && <span>EP{media_item.episode_number}</span>}
        {media_item.name}
      </p>

      {section === 'episodes' ?
        <>
          <div className='episode-overview'>
            <p>{media_item.overview}</p>
          </div>
          <p>{releaseDate}</p>
        </>
        : <p>{media_item.type}</p>
      }

      {section === 'videos' &&
        <ExternalMediaLink href={`https://youtube.com/watch?v=${media_item.key}`}>
          <div>
            <img src={playIcon} alt='play' />
          </div>
        </ExternalMediaLink>
      }
    </Card>
  )
};

export default MediaCard;