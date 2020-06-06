import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MediaCard from './MediaCard';

const MediaSection = styled.section`
 display: flex;
 flex-wrap: wrap;
 padding: 20px;
 justify-content: center;
`;

const Media = ({ id, api_key, media_type, section }) => {

  const [mediaData, setMediaData] = useState();
  //falta resolver el fetch de las imagenes
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${media_type}/${id}/${section}?api_key=${api_key}&language=en-US`)
    .then(res => res.json())
    .then(data => media_type === 'images' ? setMediaData(data) : setMediaData(data.results));
  }, [section]);

  return (
    <MediaSection>
      {mediaData && mediaData.map(mediaItem => <MediaCard media_item={mediaItem} section={section}/>)}
    </MediaSection>
  )
};

export default Media;