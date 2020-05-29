import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderSection = styled.header`
  height: 450px;
  padding: 80px 0 50px 50px;
  width: 100%;
  color: white;
  background: linear-gradient(to right, black, black, transparent 60%), url(${({ img }) => `https://image.tmdb.org/t/p/original/${img}`});
  background-position: center;
  background-size: cover;
  border-left: 1px solid #101010;
  h2 {
    font-size: 40px;
    max-width: 50%;
  };
  p {
    font-size: 12px;
  };
  div {
    width: 40%;
    height: 100px;
    margin: 15px 0;
    p {
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 15px;
      text-align: justify;
      max-height: 100px;
    };
  };
  button {
    width: 150px;
    height: 40px;
    font-size: 20px;
    background-color: #101010;
    color: #ccc;
    border: 1px solid #101010;
    transition: all 0.5s ease-out;
    &:hover {
     border: 1px solid #ccc;
     cursor: pointer;
    };
  };
`;

const Header = ({ link, linkSingleItem }) => {

  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`${linkSingleItem || link}`)
      .then(res => res.json())
      .then(data => setItem(linkSingleItem ? data : data.results[Math.floor(Math.random() * data.results.length)]))
  }, []);

  return (
    <>
      {item && (
        <HeaderSection img={item.backdrop_path}>
          <h2>{item.name}{item.title}</h2>
          <p>estrellas review {item.vote_average}</p>
          <p>{item.vote_count}, {item.release_date}, {item.adult} y cert. R</p>
          <div>
            <p>{item.overview}</p>
          </div>
          <button>Watch Trailer</button>

        </HeaderSection>)
      }
    </>
  );
};

export default Header;