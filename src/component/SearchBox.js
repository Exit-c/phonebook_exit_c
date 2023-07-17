import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const StyleSearchForm = styled.div`
  input {
    border: none;
    border-bottom: 1px solid #ccc;
    width: 250px;
    outline: none;
  }
  button {
    width: 40px;
    height: 30px;
    border: none;
    border-radius: 20%;
    color: #fff;
    background-color: lightblue;
    margin-left: 10px;
  }
`;

const SearchBox = () => {
  let [keyword, setKeyword] = useState('');
  let dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: 'SEARCH_BY_USERNAME', payload: { keyword } });
  };
  return (
    <StyleSearchForm>
      <form onSubmit={searchByName}>
        <input
          placeholder="이름을 입력해주세요."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">찾기</button>
      </form>
    </StyleSearchForm>
  );
};

export default SearchBox;
