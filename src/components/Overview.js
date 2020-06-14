import React from 'react';
import styled from 'styled-components';
import CarouselContainer from './CarouselContainer';
import FcbkIcon from '../assets/fcbk-icon.png';
import ImdbIcon from '../assets/imdb-icon.png';
import InstagramIcon from '../assets/instagram-icon.png';
import TwitterIcon from '../assets/twitter-icon.png';

const Section = styled.section`
 padding: 20px;
 width: 100%;
 color: #fff;
 display: flex;
 flex-direction: column;
 align-items: center;
 .info {
  padding: 30px;
  text-align: justify;
  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  };
  p {
    font-size: 18px;
  };
  .extra-info {
    margin: 30px 0 50px;
    p {
      margin-bottom: 10px;
    };
  };
 };
 .icons-container {
   display: flex;
   width: 200px;
   justify-content: space-between;
   .icon {
     width: 40px;
     height: 40px;
     img {
       width: 100%;
     };
   };
   .imdb img {
     transform: scale(1.3) translateY(3px);
   };
 };

 @media (min-width: 780px) {
   padding: 50px;
   flex-direction: row;
   align-items: unset;
   .info {
     padding: 0 0 0 50px;
     flex: 70%;
   };
 };
`;

const Img = styled.div`
 height: 300px;
 width: 200px;
 img {
   height: 100%;
 };

 @media (min-width: 780px) {
   flex: 30%;
   height: 100%;
   width: auto;
   img {
     width: 100%;
    };
 };
`;

const Overview = ({ item, extraInfo, media, api_key }) => {

  const { idData, credData } = extraInfo;

  const releaseDate = new Date(item.release_date).toLocaleDateString();
  const firstAiredDate = new Date(item.first_air_date).toLocaleDateString();
  const lastAiredDate = new Date(item.last_air_date).toLocaleDateString();
  const genres = item.genres && item.genres.map(genre => genre.name).join(', ');
  const language = item.languages ? item.languages.map(genre => genre.name) : item.original_language;
  const productionCompanies = item.production_companies && item.production_companies.map(company => company.name).join(', ');
  const network = item.networks && item.networks.map(network => network.name).join(', ');
  const creators = item.created_by && item.created_by.map(creator => creator.name).join(', ');

  return (
    <>
      {item &&
        <>
          <Section>
            <Img>
              <img alt={item.title} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
            </Img>

            <div className="info">
              <h3>STORYLINE</h3>
              <p>{item.overview}</p>

              <div className="extra-info">
                {media === 'movie' && <p>Release date: {releaseDate}</p>}
                {media === 'tv' && <p>First Aired: {firstAiredDate}</p>}
                <p>Runtime: {item.episode_run_time || item.runtime} mins</p>
                <p>Genres: {genres}</p>
                {media === 'tv' && <p>Seasons: {item.number_of_seasons}</p>}
                {media === 'tv' && <p>Episodes: {item.number_of_episodes}</p>}
                <p>Languages: {language}</p>
                {media === 'tv' && <p>Last Aired: {lastAiredDate}</p>}
                {media === 'tv' && <p>Creator: {creators}</p>}
                <p>Status: {item.status}</p>
                <p>Production companies: {productionCompanies}</p>
                {media === 'tv' && <p>Network: {network}</p>}
              </div>


                <div className='icons-container'>
                  <a href={`https://www.imdb.com/title/${idData.imdb_id}`}>
                    <div className='icon imdb'>
                      <img src={ImdbIcon} alt='imdb-link' />
                    </div>
                  </a>
                  <a href={`https://www.facebook.com/${idData.facebook_id}`}>
                    <div className='icon'>
                      <img src={FcbkIcon} alt='facebook-link' />
                    </div>
                  </a>
                  <a href={`https://www.twitter.com/${idData.twitter_id}`}>
                    <div className='icon'>
                      <img src={TwitterIcon} alt='twitter-link' />
                    </div>
                  </a>
                  <a href={`https://www.instagram.com/${idData.instagram_id}`}>
                    <div className='icon'>
                      <img src={InstagramIcon} alt='instagram-link' />
                    </div>
                  </a>
                </div>
              
            </div>

          </Section>

          <CarouselContainer title={'Cast'} info={credData} api_key={api_key}/>
        </>
      }
    </>
  );
};

export default Overview;