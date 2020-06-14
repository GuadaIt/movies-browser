import React from 'react';
import styled from 'styled-components';

const CastLink = styled.a`
  text-decoration: none;
  font-size: 30px;
  color: #fff;
  width: 200px; 
  margin-right: 15px;
  flex: none;
  list-style: none;
  .img {
    width: auto;
    height: 85%;
    img {
      height: 100%;
      width: 100%;
      transition: all 0.5s ease-in-out;
    };
    &:hover {
      img {
        transform: scale(1.05);
      };
    };
  };
  .title {
    p {
      font-size: 15px;
      margin: 10px 0 0 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    };
  };  
`;

const CastCardLink = ({ info }) => {
  return (
    <CastLink href={`https://www.imdb.com/name/${info.imdb_id}`} target="_blank">
      <div className='img'>
        <img alt={info.name} src={`https://image.tmdb.org/t/p/w500/${info.profile_path}`} />
      </div>
      <div className='title'>
        <p>{info.name}</p>
      </div>
    </CastLink>
  );
};

export default CastCardLink;