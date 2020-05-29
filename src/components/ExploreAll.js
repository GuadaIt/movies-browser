import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.section`
  padding: 70px 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #101010;
`;

const ResultsNav = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 90.8%;
  height: 60px;
  background-color: black;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const ExploreAll = ({ api_key }) => {

  const { pathname } = useLocation();
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState({
    page: 1,
    total_pages: 0,
  });

  const routes = {
    '/movie/category/trending-movies': `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`,
    '/movie/category/popular-movies': `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
    '/movie/category/top-rated-movies': `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    '/movie/category/upcoming-movies': `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
    '/movie/category/now-playing-movies': `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`, 
    '/tv/category/trending-tv-shows': `https://api.themoviedb.org/3/trending/tv/week?api_key=${api_key}`, 
    '/tv/category/popular-tv-shows': `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`,
    '/tv/category/top-rated-tv-shows': `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=1`,
    '/tv/category/currently-airing-tv-shows': `https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}&language=en-US&page=1`,
    '/tv/category/tv-shows-airing-today': `https://api.themoviedb.org/3/tv/airing_today?api_key=${api_key}&language=en-US&page=1`
  };
  
  useEffect(() => {
    fetch(`${routes[pathname]}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.results);
        setSearch({ page: data.page + 1, total_pages: data.total_pages });
      });
  }, []);

  const handleClick = () => {
    let { page } = search;
    if (search.page <= search.total_pages) {
      fetch(``)
        .then(res => res.json())
        .then(data => {
          setResults([...results, ...data.results]);
          setSearch({ page: page + 1, total_pages: data.total_pages });
        });
      return results;
    } else {
      return results;
    };
  };

 return (
  <Container>
  <ResultsNav>
    <p>Titulo categoria</p>
  </ResultsNav>
  {results && results.map(item => <Card info={item} key={item.id} />)}
  <button onClick={handleClick}>Load more</button>
</Container>
 );
};

export default ExploreAll;