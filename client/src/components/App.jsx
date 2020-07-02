import React from 'react';
import ReactDOM from 'react-dom';

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
      lastComment: 5
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
    const queryID = this.getQueries();
    // `http://localhost:3001/api/reviews?id=${queryID}`
    fetch(`http://localhost:3004/api/reviews?id=${queryID}`, {
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
          pageReview: data.slice(0, 5)
        });
      })
      .catch(err => {
        console.log('Error making GET request ', err);
      });
  }

  updateLikes(data) {
    const queryID = this.getQueries();

    fetch(`http://localhost:3004/api/reviews?id=${queryID}`, {
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

  getQueries() {
    const url = window.location.href;
    let passingID = 1;
    let queries = url.split('?');

    if (queries.length !== 1) {
      queries = queries[queries.length - 1].split('=');
      passingID = queries[1];
    }

    return passingID;
  }

  filterListOfReviews(query, newList) {
    const oldList = this.state.fullReviews;
    const pageButtons = null;
    if (newList.length > 5) {
      pageButtons = false;
    }

    if (query === '') {
      this.setState({
        reviews: oldList,
        pageReview: oldList.slice(0, 5),
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
    const newFirst = this.state.firstComment - 5;
    const newLast = newFirst + 4;

    // if last comment + 5 < limit
    if (this.state.firstComment - 5 > 1) {
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
        lastComment: 5,
        pageReview: fullReviews.slice(0, 5)
      });
    }
  }

  nextButton() {
    const { fullReviews } = this.state;
    const newFirst = this.state.firstComment + 5;
    const newLast = this.state.lastComment + 5;

    // if last comment + 5 < limit
    if (this.state.lastComment + 5 < fullReviews.length) {
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
        lastComment: fullReviews.length - 1,
        pageReview: fullReviews.slice(newFirst),
      });
    }
  }

  render() {
    const { fullReviews, reviews, next, prev, firstComment, lastComment, pageReview } = this.state;
    return (
      <div>
        <Search
          full={fullReviews.length} reviews={reviews} filterListOfReviews={this.filterListOfReviews}
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