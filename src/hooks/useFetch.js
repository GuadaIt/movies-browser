import React, { useEffect, useState } from 'react';

const useFetch = link => {
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(link)
    .then(res => res.json())
    .then(data => setData(data.results))
  }, []);

  return data;
};

export default useFetch;