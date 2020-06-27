import React from 'react';

import ReviewList from './ReviewList.jsx';
import Search from './search/Search.jsx';
import Pagination from './pagination.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      fullReviews: [],
    };

    this.getComments = this.getComments.bind(this);
    this.updateLikes = this.updateLikes.bind(this);
    this.filterListOfReviews = this.filterListOfReviews.bind(this);
  }

  componentDidMount() {
    // invoke get request func
    this.getComments();
  }

  // get request to server
  getComments() {
    fetch('http://localhost:3001/api/reviews', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviews: data,
          fullReviews: data
        });
      })
      .catch(err => {
        console.log('Error making GET request ', err);
      });
  }

  updateLikes(data) {
    fetch('http://localhost:3001/api/reviews', {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.getComments();
        console.log(this.state.reviews);
      })
      .catch(err => {
        console.log('Error making PATCH request', err);
      });
  }

  filterListOfReviews(query, newList) {
    const oldList = this.state.fullReviews;
    if (query === '') {
      this.setState({
        reviews: oldList
      });
    } else {
      this.setState({
        reviews: newList
      });
    }

  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <Search
          reviews={reviews} filterListOfReviews={this.filterListOfReviews}
        />
        <ReviewList id='top' reviews={reviews} updateLikes={this.updateLikes} />
        <Pagination/>
      </div>
    );
  }
}

export default App;


// Pagination Idea :

// - refactor the db

// https://medium.com/how-to-react/create-pagination-in-reactjs-e4326c1b9855

// https://www.youtube.com/watch?v=IYCa1F-OWmk