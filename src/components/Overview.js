import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CarouselContainer from './CarouselContainer';

const Section = styled.section`
 padding: 50px;
 display: flex;
 width: 100%;
 color: #fff;
 .info {
  padding-left: 50px;
  flex: 70%;
  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  };
  p {
    font-size: 18px;
  };
  .extra-info {
    display: flex;
    div {
      flex: 50%;
      padding: 50px 0;
    };
  }
 };
`;

const Img = styled.div`
 flex: 30%;
 height: 100%;
 img {
   width: 100%;
 };
`;

const Overview = ({ item, api_key }) => {

  const params = useParams();

 return (
   <>
   <Section>
     <Img>
       <img alt={item.title} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
     </Img>

     <div className="info">
       <h3>STORYLINE</h3>
       <p>{item.overview}</p>

       <div class="extra-info">
         <div>
           <p>First Aired</p>
           <p>Runtime</p>
           <p>Genre</p>
           <p>Episodes</p>
           <p>Languages</p>
         </div>
         <div>
           <p>Last Aired</p>
           <p>Creator</p>
           <p>Seasons</p>
           <p>Status</p>
           <p>Network</p>
         </div>
       </div>

       <p>ICONS</p>
     </div>

  </Section>

  <CarouselContainer title={'Cast'} />
 </>
 )
};

export default Overview;