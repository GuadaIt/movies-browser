import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AverageReviewsStar from './AverageReviewsStar';

const HeaderSection = styled.header`
  height: 450px;
  padding: 40px 0 40px 20px;
  width: 100%;
  color: white;
  background: linear-gradient(to right, black, black, transparent 60%), url(${({ img }) => `https://image.tmdb.org/t/p/original/${img}`});
  background-position: center;
  background-size: cover;
  border-left: 1px solid #101010;
  h2 {
    max-width: 60%;
  };
  p {
    margin-top: 10px;
  };
  .overview {
    width: 50%;
    height: 100px;
    margin: 15px 0;
    p {
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 12px;
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
    border: 1px solid #ccc;
  };

  @media (min-width: 780px) {
    padding: 80px 0 50px 50px;
    h2 {
      max-width: 50%;
      font-size: 40px;
    };
    .overview {
      width: 40%;
      p {
        font-size: 15px;
      };
    };
    button {
      border: 1px solid #101010;
      transition: all 0.5s ease-out;
      &:hover {
       border: 1px solid #ccc;
       cursor: pointer;
      };
    };
  };
`;

const Header = ({ link, linkSingleItem }) => {

  const [item, setItem] = useState({});
  const releaseDate = new Date(item.release_date || item.last_air_date || item.first_air_date).toLocaleDateString();

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
          <AverageReviewsStar vote_average={item.vote_average} vote_count={item.vote_count}/>
          <p>{releaseDate}</p>
          <div className="overview">
            <p>{item.overview}</p>
          </div>
          <button>Watch Trailer</button>
        </HeaderSection>)
      }
    </>
  );
};

export default Header;