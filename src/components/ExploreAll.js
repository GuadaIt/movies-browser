import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';
import Card from './Card';

const Container = styled.section`
  padding: 0 0 30px 0;
  width: 100%;
  background-color: #101010;
  .results-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 30px; 
    };
    ul {
      margin-top: 70px;
      justify-content: center;
      button {
        color: #ccc;
      };
    };

  @media (min-width: 780px) {
    padding: 70px 0 70px;
  };
`;

const ResultsNav = styled.div`
  height: 60px;
  background-color: #101010;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  @media (min-width: 780px) {
    position: fixed;
    top: 0;
    z-index: 2;
    width: 95%;
    background-color: #000;
  };
`;

const ExploreAll = ({ api_key }) => {

  const { pathname } = useLocation();
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const routes = {
    '/movie/category/trending-movies': `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`,
    '/movie/category/popular-movies': `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${page}`,
    '/movie/category/top-rated-movies': `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=${page}`,
    '/movie/category/upcoming-movies': `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=${page}`,
    '/movie/category/now-playing-movies': `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=${page}`,
    '/tv/category/trending-tv-shows': `https://api.themoviedb.org/3/trending/tv/week?api_key=${api_key}`,
    '/tv/category/popular-tv-shows': `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=${page}`,
    '/tv/category/top-rated-tv-shows': `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=${page}`,
    '/tv/category/currently-airing-tv-shows': `https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}&language=en-US&page=${page}`,
    '/tv/category/tv-shows-airing-today': `https://api.themoviedb.org/3/tv/airing_today?api_key=${api_key}&language=en-US&page=${page}`
  };

  useEffect(() => {
    fetch(`${routes[pathname]}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.results);
        setTotalPages(data.total_pages);
      });
  }, [page]);

  const handleClick = e => {
    let toPage = Number(e.target.textContent);
    setPage(toPage);
  };

  return (
    <Container>
      <ResultsNav>
        <p>Titulo categoria</p>
      </ResultsNav>
      <div className='results-container'>
        {results && results.map(item => <Card info={item} key={item.id} />)}
      </div>
      <div className='pagination'>
        <Pagination count={totalPages} page={page} color='primary' onClick={handleClick} />
      </div>
    </Container>
  );
};

export default ExploreAll;