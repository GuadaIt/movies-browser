import React from 'react';
import styled from 'styled-components';

const HiddenSearchBar = styled.div`
  position: absolute;
  left: 100px;
  right: 0;
  top: ${({ hidden }) => hidden ? '-70px' : 0};
  font-size: 30px;  
  color: rgba(51, 51, 51, 1);
  background-color: #101010;
  width: 92.5%; 
  height: 70px;
  animation-name: ${({ hidden }) => hidden ? '' : 'slideIn'};
  animation-duration: 1s;
  @keyframes slideIn {
    from {top: -70px}
    to {top: 0px}
  };
  form {
    display: flex;
    height: 100%;
    align-items: center;
    margin-left: 10px;
    input {
      padding-left: 10px;
      width: 90%;
      height: 80%;
      background-color: #101010;
      border: solid 1px #101010;
      color: #ccc;
    };
    div {
      font-size: 20px;
      width: 30px;
      height: 30px;
    };
  };
`;

const SearchBar = ({ hidden, handleSubmit, showSearchBar, searchInput, handleChange}) => {  

  return (
    <HiddenSearchBar hidden={hidden}>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} defaultValue={searchInput} placeholder='Search for movies or tv shows' />
        <div onClick={showSearchBar}>X</div>
      </form>
    </HiddenSearchBar>
  );
};

export default SearchBar;