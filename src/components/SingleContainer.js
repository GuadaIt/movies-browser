import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Header from './Header';
import CarouselContainer from './CarouselContainer';
import Overview from './Overview';
import Episodes from './Episodes';
import Media from './Media';
import LoadingDots from './LoadingDots';

const ContenedorPpal = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100%;
  width: 100%;
  background-color: #101010;
  .menu {
    display: flex;
    color: #515151;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    background-color: #0D0D0D;
      p {
        font-size: 18px;
      };
    div {
      background-color: #0D0D0D;
      color: #fff;
    };
  };

  @media (min-width: 780px) {
    .menu {
      p {
        font-size: 25px;
      };
      div {
        cursor: pointer;
        &:hover {
          color: #515151;
        };
      };
    };
  };
`;

const SingleContainer = ({ api_key, baseUrl }) => {

  const [info, setInfo] = useState([]);
  const [section, setSection] = useState('overview');
  const { media, id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${media}/${id}?api_key=${api_key}&language=en-US&`)
      .then(res => res.json())
      .then(data => {
        setInfo(data);
      });
  }, [id]);

  const fetchExtraInfo = async (str, id) => {

    const credRes = await fetch(`${baseUrl}/${media}/${id}/credits?api_key=${api_key}&language=en=US&include_image_language=en,null`);
    const creditsData = await credRes.json();
    let castData;

    const extraCast = async (credData) => {
      const results = await Promise.all(
        credData.map(async (person) => {
          const res = await fetch(`https://api.themoviedb.org/3/person/${person.id}?api_key=${api_key}&language=en-US`);
          const data = await res.json();
          return {
            name: person.name,
            id: person.id,
            imdb_id: data.imdb_id,
            profile_path: person.profile_path
          };
        })
      );
      castData = results;
    };

    extraCast(creditsData.cast);

    const idRes = await fetch(`${baseUrl}/${media}/${id}/external_ids?api_key=${api_key}&language=en=US&include_image_language=en,null`);
    const idData = await idRes.json();

    const imgRes = await fetch(`${baseUrl}/${media}/${id}/images?api_key=${api_key}&language=en=US&include_image_language=en,null`);
    const imgData = await imgRes.json();

    const vidRes = await fetch(`${baseUrl}/${media}/${id}/videos?api_key=${api_key}&language=en-US`);
    const videoData = await vidRes.json();
    const vidData = videoData.results;

    const simRes = await fetch(`${baseUrl}/${media}/${id}/similar?api_key=${api_key}&language=en-US&page=1`);
    const similarData = await simRes.json();
    const simData = similarData.results;

    const data = { castData, idData, imgData, vidData, simData };

    return data;
  };

  const { status, data, isFetching } = useQuery(['fetch_extra_data', id], fetchExtraInfo);

  const details = {
    'loading': <LoadingDots />,
    'overview': <Overview item={info} extraInfo={data} media={media} api_key={api_key} />,
    'videos': <Media info={data} section='videos' />,
    'episodes': <Episodes item={info} section='episodes' api_key={api_key} />,
    'photos': <Media info={data} section='photos' />
  };

  const addEpisodesSection = e => {
    e.persist();
    setSection(e.target.textContent.toLowerCase());
  };

  return (
    <ContenedorPpal>
      <Header headerInfo={info} api_key={api_key} />

      <div>
        <div className="menu">
          <div id="overview" onClick={addEpisodesSection}>
            <p>OVERVIEW</p>
          </div>
          {media === 'tv' &&
            <div id='episodes' onClick={addEpisodesSection}>
              <p>EPISODES</p>
            </div>
          }
          <div id='videos' onClick={addEpisodesSection}>
            <p>VIDEOS</p>
          </div>
          <div id='photos' onClick={addEpisodesSection}>
            <p>PHOTOS</p>
          </div>
        </div>

        {isFetching ? <LoadingDots />
          :
          <>
            {details[section]}
            <CarouselContainer title={'More Like This'} info={data.simData} />
          </>
        }

      </div>

    </ContenedorPpal>
  );
};


export default SingleContainer;