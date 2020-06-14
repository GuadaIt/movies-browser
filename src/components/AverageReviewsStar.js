import React from 'react';
import styled from 'styled-components';

const Reviews = styled.div`
 display: flex;
 flex-direction: column;

 @media (min-width: 780px) {
   flex-direction: row;
   align-items: center;
   .vote-count {
     margin: 0 15px;
   };
 };
`;

const ReviewStarsContainer = styled.div`
  display: flex;
  font-size: 25px;
  font-family: Times;
  line-height: 1;
  &&::before {
    content: '★★★★★';
    background: ${({ average }) => `linear-gradient(90deg, #089ae8 ${average}%, #fff ${average}%)`};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  };
`;

const AverageReviewStar = ({ vote_average, vote_count }) => {

  const average_percentage = vote_average * 10;
<<<<<<< HEAD
  
  // increible este componente!! sencillo y efectivo!!
=======

>>>>>>> f9ca5793ba32157303353dda8a01d0d0634a0aad
  return (
    <Reviews>
      <ReviewStarsContainer average={average_percentage} />
      <p className='vote-count'>{`${vote_count} reviews`}</p>
    </Reviews>

  );
};

export default AverageReviewStar;
