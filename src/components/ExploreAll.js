import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { API_URL_BASE } from '../constants';
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

const ExploreAll = () => {

  const { category, media, id } = useParams();
  const { pathname } = useLocation();
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  let categoryTitle;
  
  if (category) {
    categoryTitle = category.replace(/[^a-z]/g, ' ');
    categoryTitle = categoryTitle.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1));
  };

  const routes = {
    '/movie/category/trending-movies': `${API_URL_BASE}trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`,
    '/movie/category/popular-movies': `${API_URL_BASE}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
    '/movie/category/top-rated-movies': `${API_URL_BASE}movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
    '/movie/category/upcoming-movies': `${API_URL_BASE}movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
    '/movie/category/now-playing-movies': `${API_URL_BASE}movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
    '/tv/category/trending-tv-shows': `${API_URL_BASE}trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`,
    '/tv/category/popular-tv-shows': `${API_URL_BASE}tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
    '/tv/category/top-rated-tv-shows': `${API_URL_BASE}tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
    '/tv/category/currently-airing-tv-shows': `${API_URL_BASE}tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
    '/tv/category/tv-shows-airing-today': `${API_URL_BASE}tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
    [`/${media}/${id}/similar`]: `${API_URL_BASE}${media}/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&${page}`
  };

  useEffect(() => {
    fetch(`${routes[pathname]}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.results);
        setTotalPages(data.total_pages);
      });
  }, [page]);

  const handleChange = (e, value) => {
    setPage(value);
  };

  return (
    <Container>
      <ResultsNav>
        <p>{categoryTitle || 'Similar'}</p>
      </ResultsNav>
      <div className='results-container'>
        {results && results.map(item => <Card info={item} key={item.id} />)}
      </div>
      <div className='pagination'>
        <Pagination count={totalPages} page={page} color='primary' onChange={handleChange} />
      </div>
    </Container>
  );
};

export default ExploreAll;