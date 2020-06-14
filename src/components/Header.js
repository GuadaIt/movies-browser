import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AverageReviewsStar from './AverageReviewsStar';
import LoadingDots from './LoadingDots';

const HeaderSection = styled.header`
  height: 450px;
  padding: 40px 0 40px 20px;
  width: 100%;
  color: white;
  background: linear-gradient(to right, black, black, transparent 60%), url(${({ img }) => `https://image.tmdb.org/t/p/original/${img}`});
  background-position: center;
  background-size: cover;
  border-left: 1px solid #101010;
  position: relative;
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
    padding: 60px 0 50px 50px;
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

const Header = ({ headerInfo, api_key }) => {

  const [videos, setVideos] = useState();
  const releaseDate = new Date(headerInfo.release_date || headerInfo.last_air_date || headerInfo.first_air_date).toLocaleDateString();

  useEffect(() => {
    const fetchVideos = async (arg) => {
      const videosRes = await fetch(`https://api.themoviedb.org/3/${arg.original_name ? 'tv' : 'movie'}/${arg.id}/videos?api_key=${api_key}&language=en-US`);
      const videosData = await videosRes.json();
      const vidLink = videosData.results;
  
      setVideos(vidLink);
    };

    fetchVideos(headerInfo);
  }, [headerInfo]);

  //to fix: rendering issue. Sometimes href will throw an error

  return (
    <>
      {videos
        ?
        <HeaderSection img={headerInfo.backdrop_path}>
          <h2>{headerInfo.name}{headerInfo.title}</h2>
          <AverageReviewsStar vote_average={headerInfo.vote_average} vote_count={headerInfo.vote_count} />
          <p>{releaseDate}</p>
          <div className="overview">
            <p>{headerInfo.overview}</p>
          </div>
          <button>
            <a href={`https://youtube.com/watch?v=${videos[0].key}` || ''} target='_blank'>Watch Trailer</a>
          </button>
        </HeaderSection>
        : <LoadingDots />
      }
    </>
  );
};

export default Header;