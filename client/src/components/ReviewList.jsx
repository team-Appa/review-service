import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = (props) => {
  const { reviews } = props;
  // console.log(reviews);
  return (
    <div>
      {
        reviews.map(review => (
          <ReviewListEntry
            key={review._id} review={review}
            updateLikes={props.updateLikes} />
        ))
      }
    </div>
  );
};

export default ReviewList;