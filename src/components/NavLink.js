import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavIcon = styled(Link)`
 text-decoration: none;
 width: 30px;
 height: 30px;
 margin-top: 30px;
 color: #fff;
 transition: filter 0.3s;
 &:visited {
   color: #fff;
 };
 img {
   width: 100%;
   filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(16deg) brightness(100%) contrast(104%);
 };
 &:hover {
  filter: invert(58%) sepia(81%) saturate(4215%) hue-rotate(172deg) brightness(95%) contrast(94%);
   };
`;

const NavLink = ({ link, showSearchBar, src }) => {

  return (
   <NavIcon to={link} onClick={showSearchBar}>
     <img alt='icon' src={src}/>
   </NavIcon>
  );
};

export default NavLink;