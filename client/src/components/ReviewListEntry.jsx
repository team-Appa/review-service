import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import StarRatings from 'react-star-ratings';
import { FaThumbsUp } from 'react-icons/fa';

import { Section, Wrapper, Comment, CommentOwner, Time, Helpful, Thumbs, Flag, StarNumber } from '../styled/components.jsx';

const Button = styled.button`
  flex: 0;
  cursor: pointer;
  padding: 15px;
  color: ${props => (props.like ? 'white' : 'grey')};
  background-color: ${props => (props.like ? 'red' : 'transparent')};
  opacity: ${props => ( props.clicked ? '0.4' : '1' )};
  font-weight: bold;
  border: 1px solid #ccc;
  &:hover {
    color: #cd2418;
    background-color: #f2f2f2;
  };
`;

const Disbutton = styled.button`
  flex: 0;
  cursor: pointer;
  padding: 15px;
  color: ${props => (props.dislike ? 'white' : 'grey')};
  background-color: ${props => (props.dislike ? 'red' : 'transparent')};
  opacity: ${props => ( props.clicked ? '0.4' : '1' )};
  font-weight: bold;
  border: 1px solid #ccc;
  &:hover {
    color: #cd2418;
    background-color: #f2f2f2;
  };
`;

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
      dislike: false,
      clicked: false
    };

    this.review = props.review;
    this.time = moment(this.review.timestamp).fromNow();
    this.updateLikes = props.updateLikes;
  }

  likeHandler() {
    this.setState({
      like: true,
      clicked: true
    });

    const data = {
      _id: this.review._id,
      like: this.review.like
    };

    this.updateLikes(data);
  }

  dislikeHandler() {
    this.setState({
      dislike: true,
      clicked: true
    });

    const data = {
      _id: this.review._id,
      dislike: this.review.dislike
    };

    this.updateLikes(data);
  }

  render() {
    return (
      <Section>

        <Wrapper>
          <StarRatings
            numberOfSars={5} rating={this.review.star} starDimension="13px"
            starSpacing="1px" starRatedColor='orange' starEmptyColor='#b3b3b3'
          />
          <StarNumber>{this.review.star}</StarNumber>
          {this.review.title}
        </Wrapper>

        <Wrapper>
          <Comment>
            <p>{this.review.comment}</p>
          </Comment>
          <CommentOwner>
            <p>
              Submitted <Time>{this.time}</Time> <br></br>
              By {this.review.name} <br></br>
              From {this.review.location}
            </p>
          </CommentOwner>
        </Wrapper>

        <Wrapper>
          <Helpful>
            Was this review helpful to you?
          </Helpful>
          <Thumbs>
            <Button
              like={this.state.like}
              clicked={this.state.clicked}
              onClick={() => {
                this.likeHandler();
                this.review.like += 1;
              }}>
              < FaThumbsUp /> {this.review.like}
            </Button>
            <Disbutton
              dislike={this.state.dislike}
              clicked={this.state.clicked}
              onClick={() => {
                this.dislikeHandler();
                this.review.dislike += 1;
              }}>
              < FaThumbsUp style={{transform: 'rotate(180deg)'}}/> {this.review.dislike}
            </Disbutton>
          </Thumbs>
          <Flag>
            <a style={{color: '#cd2418'}} href='#'>Flag this review</a>
          </Flag>
        </Wrapper>

      </Section>
    );
  }
}

export default ReviewListEntry;

