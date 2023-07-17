import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import ContactBox from './ContactBox';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyleListBox = styled.div`
  p {
    margin-top: 5px;
  }
`;

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== '') {
      let list = contactList.filter((item) => item.name.includes(keyword)); // includes 배열에 특정 요소가 포함되어 있는지 확인

      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword]);
  return (
    <StyleListBox>
      <SearchBox />
      <p>num: {filteredList.length}</p>
      {filteredList.map((item) => (
        <ContactBox item={item} />
      ))}
    </StyleListBox>
  );
};

export default ContactList;
