import React from 'react';

const ReviewListEntry = (props) => {
  var { review } = props;
  console.log(review);
  return (
    <div className="comment">
      <header>
        {review.title}
      </header>

      <section>
        <p>{review.comment}</p>
        <div>
          <div>
            <p>Submitted {review.timestamp}</p>
            <p>By {review.name}</p>
            <p>From {review.location}</p>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <div>Was this review helpful to you?</div>
          <div>{review.like} {review.dislike}</div>
          <div>Flag this review</div>
        </div>
      </footer>
    </div>
  );
};

export default ReviewListEntry;

// going to need react.star component imported

// figure out how to use icons

// use moment to display timestamp
