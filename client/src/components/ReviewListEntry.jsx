import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import StarRatings from 'react-star-ratings';
import { FaThumbsUp } from 'react-icons/fa';

const Section = styled.div`
  border-top: 1px solid #ccc;
  font-family: montserratbold, Arial;
  padding: 10px 0 10px;
  margin: 0 auto;
  width: auto;
  max-width: 1500px;
  font-weight: bold;
`;

const Comment = styled.div`
  flex: 1;
  margin-right: 50px;
  font-weight: 200;
  padding-right: 15px;
`;

const CommentOwner = styled.div`
  flex: 0 auto;
  width: 300px;
  font-size: 0.8em;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 15px 0 15px;
  align-items: center;
`;

const Time = styled.span`
  font-weight: 200;
`;

const Helpful = styled.div`
  flex: 0 auto;
  width: 250px;
`;

const Thumbs = styled.div`
  flex: 0 auto;
  width: 150px;
  text-align: center;
  padding-right: 10px;
`;

const Button = styled.button`
  flex: 0;
  cursor: pointer;
  padding: 15px;
  color: grey;
  background-color: transparent;
  font-weight: bold;
  border: 1px solid #ccc;
  &:hover {
    color: #cd2418;
    background-color: #f2f2f2;
  }
`;

const Flag = styled.div`
  flex: 1;
`;

const StarNumber = styled.p`
  border: 1px solid black;
  border-radius: 15%;
  padding: 1px 5px;
  color: white;
  background-color: black;
  margin: 0 15px 0 5px;
`;

const ReviewListEntry = (props) => {
  var { review } = props;
  var time = moment(review.timestamp).fromNow();


  return (
    <Section>

      <Wrapper>
        <StarRatings
          numberOfSars={5} rating={review.star} starDimension="13px"
          starSpacing="1px" starRatedColor='orange' starEmptyColor='#b3b3b3'/>
        <StarNumber>{review.star}</StarNumber>
        {review.title}
      </Wrapper>

      <Wrapper>
        <Comment>
          <p>{review.comment}</p>
        </Comment>
        <CommentOwner>
          <p>
            Submitted <Time>{time}</Time> <br></br>
            By {review.name} <br></br>
            From {review.location}
          </p>
        </CommentOwner>
      </Wrapper>

      <Wrapper>
        <Helpful>
          Was this review helpful to you?
        </Helpful>
        <Thumbs>
          <Button> < FaThumbsUp /> {review.like}</Button>
          <Button>
            < FaThumbsUp style={{transform: 'rotate(180deg)'}}/> {review.dislike}</Button>
        </Thumbs>
        <Flag>
          <a style={{color: '#cd2418'}} href='#'>Flag this review</a>
        </Flag>
      </Wrapper>

    </Section>
  );
};

export default ReviewListEntry;

