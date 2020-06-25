import React from 'react';

import ReviewList from './ReviewList.jsx';
import Search from './search/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      filtered: [],
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
          reviews: data
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
    console.log('passedIn')
    this.setState({
      reviews: newList
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <Search
          reviews={reviews} filterListOfReviews={this.filterListOfReviews}
        />
        <ReviewList reviews={reviews} updateLikes={this.updateLikes} />
      </div>
    );
  }
}

export default App;