import React from 'react';
import styled from 'styled-components';
import MediaCard from './MediaCard';

const MediaSection = styled.section`
 display: flex;
 flex-wrap: wrap;
 padding: 20px;
 justify-content: center;
`;

const Media = ({ info, section }) => {

  const { vidData } = info;
  let images;

  if (info.imgData) {
    images = info.imgData.backdrops.concat(info.imgData.posters);
  };

  return (
    <MediaSection>
      {(section === 'photos' ? images : vidData).map((mediaItem, key) => <MediaCard media_item={mediaItem} section={section} key={mediaItem.id}/>)}
    </MediaSection>
  );
};

export default Media;