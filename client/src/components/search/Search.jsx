import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import {
  SearchsSection,
  SearchWrapper,
  SearchButton,
  Numbers,
  SearchBar,
  ClearButton,
} from '../../styled/components.jsx';
import { FaSearch } from 'react-icons/fa';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: '',
    };

    this.filterListOfReviews = props.filterListOfReviews;
  }

  updateSearchedKeyWord(event) {
    // console.log(this.state.searched);
    this.setState({
      searched: event,
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

  onClickingClear() {
    ReactDOM.findDOMNode(this.refs.search).value = '';
    this.setState({
      searched: '',
    });

    this.filterListOfReviews('', this.props.reviews);
  }

  render() {
    return (
      <SearchsSection>
        <SearchWrapper>
          <Numbers>
            Reviewed by{' '}
            {this.props.reviews.length === this.props.full
              ? this.props.full
              : this.props.reviews.length}{' '}
            customers
          </Numbers>

          <SearchBar
            onChange={(e) => this.updateSearchedKeyWord(e.target.value)}
          >
            <input
              type="text"
              placeholder="Enter Search Terms"
              ref="search"
              style={{ width: '100%' }}
            ></input>
            <ClearButton onClick={() => this.onClickingClear()}>
              {' '}
              X{' '}
            </ClearButton>
            <SearchButton onClick={() => this.onClickingSearch()}>
              <FaSearch
                style={{ transform: 'rotate(90deg)', padding: '5px' }}
              />
            </SearchButton>
          </SearchBar>
        </SearchWrapper>
      </SearchsSection>
    );
  }
}

export default Search;
