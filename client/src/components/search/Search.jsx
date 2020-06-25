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
  width: 620px;
  display: flex;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: ''
    };

    this.filterListOfReviews = props.filterListOfReviews;
  }

  updateSearchedKeyWord(event) {
    // console.log(this.state.searched);
    this.setState({
      searched: event
    });
  }

  onClickingSearch() {
    // console.log(this.props.reviews[0]);
    const query = this.state.searched.toLowerCase();

    // console.log(this.props.reviews);
    const newList = this.props.reviews.reduce((acc, review) => {
      const comment = review.comment.toLowerCase();

      if (comment.includes(query)) {
        acc.push(review);
      }
      return acc;
    }, []);

    // console.log(newList);
    this.filterListOfReviews(query, newList);
  }

  render() {
    return (
      <SearchsSection>
        <SearchWrapper>

          <Numbers>
            Reviewed by {this.props.reviews.length} customers
          </Numbers>

          <SearchBar onChange={(e) => this.updateSearchedKeyWord(e.target.value)}>
            <input type='text' placeholder='Enter Search Terms'
              style={{width: '100%'}}></input>
            <SearchButton onClick={() => this.onClickingSearch()}>
              <FaSearch style={{transform: 'rotate(90deg)', padding: '5px'}}/>
            </SearchButton>
          </SearchBar>

        </SearchWrapper>

      </SearchsSection>
    );
  }
}

export default Search;