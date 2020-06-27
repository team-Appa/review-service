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
      pageReview: [],
      prev: false,
      next: true,
      firstComment: 1,
      lastComment: 20
    };

    this.getComments = this.getComments.bind(this);
    this.updateLikes = this.updateLikes.bind(this);
    this.filterListOfReviews = this.filterListOfReviews.bind(this);
    this.prevButton = this.prevButton.bind(this);
    this.nextButton = this.nextButton.bind(this);
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
          fullReviews: data,
          pageReview: data.slice(0, 21)
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
        // console.log(result);
        this.getComments();
        // console.log(this.state.reviews);
      })
      .catch(err => {
        console.log('Error making PATCH request', err);
      });
  }

  filterListOfReviews(query, newList) {
    const oldList = this.state.fullReviews;
    const pageButtons = null;
    if (newList.length > 20) {
      pageButtons = false;
    }

    if (query === '') {
      this.setState({
        reviews: oldList,
        pageReview: oldList.slice(0, 21),
        next: true
      });
    } else {
      this.setState({
        reviews: newList,
        pageReview: newList,
        next: pageButtons
      });
    }

  }

  prevButton() {
    const { fullReviews } = this.state;
    const newFirst = this.state.firstComment - 20;
    const newLast = newFirst + 19;

    // if last comment + 20 < limit
    if (this.state.firstComment - 20 > 1) {
      // update lastComment, pageReview, firstComment
      this.setState({
        next: true,
        firstComment: newFirst,
        lastComment: newLast,
        pageReview: fullReviews.slice(newFirst, newLast + 1)
      });
    } else {
    // else update next = false, pageReview (lastComment + 1 to limit),
      this.setState({
        prev: false,
        firstComment: 1,
        lastComment: 20,
        pageReview: fullReviews.slice(0, 21)
      });
    }
  }

  nextButton() {
    console.log('clicked');
    const { fullReviews } = this.state;
    const newFirst = this.state.firstComment + 20;
    const newLast = this.state.lastComment + 20;

    // if last comment + 20 < limit
    if (this.state.lastComment + 20 < fullReviews.length) {
      // update lastComment, pageReview, firstComment
      this.setState({
        prev: true,
        firstComment: newFirst,
        lastComment: newLast,
        pageReview: fullReviews.slice(newFirst, newLast + 1),
      });
    } else {
    // else update next = false, pageReview (lastComment + 1 to limit),
      this.setState({
        next: false,
        firstComment: newFirst,
        lastComment: fullReviews.length,
        pageReview: fullReviews.slice(newFirst),
      });
    }
  }

  render() {
    const { reviews, next, prev, firstComment, lastComment, pageReview } = this.state;
    return (
      <div>
        <Search
          reviews={reviews} filterListOfReviews={this.filterListOfReviews}
        />
        <ReviewList id='top' reviews={pageReview} updateLikes={this.updateLikes} />
        <Pagination nextB={this.nextButton} prevB={this.prevButton} prev={prev}
          next={next} first={firstComment} last={lastComment} />
      </div>
    );
  }
}

export default App;


// Pagination Idea :

// - refactor the db

// https://medium.com/how-to-react/create-pagination-in-reactjs-e4326c1b9855

// https://www.youtube.com/watch?v=IYCa1F-OWmk