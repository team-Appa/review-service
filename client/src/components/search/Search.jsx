import React from 'react';
import styled from 'styled-components';

import { SearchsSection, SearchWrapper } from '../../styled/components.jsx';
import { FaSearch } from 'react-icons/fa';

const SearchButton = styled.button`
  background-color: grey;
  color: white;
`;

const Numbers = styled.h1`
  flex: 1;
  font-size: 22px;
`;

const SearchBar = styled.section`
  flex: 0 auto;
  width: 500px;
  display: flex;
`;

const Search = (props) => {
  return (
    <SearchsSection>
      <SearchWrapper>

        <Numbers>
          Reviewed by {props.customers} customers
        </Numbers>

        <SearchBar>
          <input type='text' placeholder='Enter Search Terms'
            style={{width: '100%'}}></input>
          <SearchButton>
            <FaSearch style={{transform: 'rotate(90deg)', padding: '5px'}}/>
          </SearchButton>
        </SearchBar>

      </SearchWrapper>

    </SearchsSection>
  );
};

export default Search;