import React from 'react';
import ReviewList from './ReviewList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
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