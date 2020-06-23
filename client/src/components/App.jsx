import React from 'react';
import ReviewList from './ReviewList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
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

  render() {
    var { reviews } = this.state;
    return (
      <div>
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

export default App;