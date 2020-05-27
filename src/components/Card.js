import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  color: #fff;
  width: 190px;
  height:300px;
  margin-right: 8px;
  flex: none;
  list-style: none;
  .img {
    width: auto;
    height: 85%;
    img {
      object-fit: cover;
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

const Card = ({ info }) => { 

  const { pathname } = useLocation();

  return (
    
      <Item to={info.media_type ? `/${info.media_type}/${info.id}` : `${pathname}/${info.id}`}>
        <div className='img'>
          <img alt ={info.title || info.original_name || info.original_title} src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} />
        </div>
        <div className='title'>
          <p>{info.title || info.original_name || info.original_title}</p>
        </div>
      </Item>
  );
};

export default Card;