import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const Card = ({ info }) => {

  const { media, searchInput } = useParams();
  const { pathname } = useLocation();
  let route;

  if (media) {
    route = `/${media}/${info.id}`; 
  } else if (searchInput) {
    route = `/${info.media_type}/${info.id}`;
  } else if (pathname.length > 1) {
    route = `${pathname}/${info.id}`;
  } else {
    route = `/${info.media_type}/${info.id}`;
  };

  return (
    //éstos links no rutean bien en el componente SingleContainer. 
    <Item to={route} >
      <div className='img'>
        <img alt={info.title || info.original_name || info.original_title} src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} />
      </div>
      <div className='title'>
        <p>{info.title || info.original_name || info.original_title}</p>
      </div>
    </Item>
  );
};

export default Card;