import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

const Results = ({ api_key, category }) => {

  const { searchInput } = useParams();
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState({
    page: 1,
    total_pages: 0,
  });

  useEffect(() => {
    let { page } = search;
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&page=${page}&include_adult=false&query=${searchInput}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.results);
        setSearch({ page: data.page + 1, total_pages: data.total_pages });

      });
  }, []);

  const handleClick = () => {
    let { page } = search;
    if (search.page <= search.total_pages) {
      fetch(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&page=${page}&include_adult=false&query=${searchInput}`)
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

  // window.addEventListener('scroll', (e => handleScroll(e)));

  // const handleScroll = e => {
  //   let bodyHeight = document.body.scrollHeight - 20;
  //   let scrollPosition = window.pageYOffset + window.innerHeight;
  //   const { page, total_pages } = search;
  //   console.log(page)

  //   // if (scrolling) return
  //   // if (total_pages <=page) return 
  //   if (scrollPosition >= bodyHeight) {


  //      fetch(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&page=${page}&include_adult=false&query=${searchInput}`)
  //      .then(res => res.json())
  //      .then(data => {
  //        setResults([...results, ...data.results]);
  //        setSearch({page: page + 1, total_pages: data.total_pages});
  //       });  

  //       console.log('search fetch', search)
  //    return results;
  //   } else {
  //     return results;
  //   };
  // };



  return (
    <Container>
      <ResultsNav>
        <p>Results for: {searchInput}</p>
      </ResultsNav>
      {results.map(item => <Card info={item} key={item.id} />)}
      <button onClick={handleClick}>Load more</button>
    </Container>
  )
};

export default Results;