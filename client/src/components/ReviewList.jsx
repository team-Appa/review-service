import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = ({ reviews }) => {
  // console.log(reviews);
  return (
    <div>
      {
        reviews.map(review => (
          <ReviewListEntry key={review._id} review={review} />
        ))
      }
    </div>
  );
};

export default ReviewList;