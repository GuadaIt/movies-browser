import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CastCardLink from './CastCardLink';

const Item = styled(Link)`
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

const Card = ({ info, pathname, cast }) => {

  const { media } = useParams();
  let route;

  if (cast === 'Cast') return <CastCardLink info={info} />;
    
  if (media) {
    route = `/${media}/${info.id}`; 
  } else if (info.media_type) {
    route = `/${info.media_type}/${info.id}`;
  } else {
    route = `/${pathname}/${info.id}`;
  };

  return ( 
    <Item to={route}>
      <div className='img'>
        <img 
        alt={info.title || info.original_name || info.original_title} 
        src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} />
      </div>
      <div className='title'>
        <p>{info.title || info.original_name || info.original_title}</p>
      </div>
    </Item>
  );
};

export default Card;