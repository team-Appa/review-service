import styled from 'styled-components';

export const Section = styled.div`
  border-top: 1px solid #ccc;
  font-family: montserratbold, Arial;
  padding: 10px 0 10px;
  margin: 0 auto;
  width: auto;
  max-width: 1500px;
  font-weight: bold;
`;

export const SearchsSection = styled.div`
  border: 1px solid #ccc;
  font-family: montserratbold, Arial;
  margin: 30px auto;
  width: auto;
  max-width: 1500px;
  font-weight: bold;
  background-color: #f2f2f2;
`;

export const Wrapper = styled.div`
display: flex;
flex-flow: row nowrap;
margin: 15px 0 15px;
align-items: center;
`;

export const SearchWrapper = styled.div`
display: flex;
flex-flow: row nowrap;
margin: 10px 15px;
align-items: center;
`;

export const Comment = styled.div`
  flex: 1;
  margin-right: 50px;
  font-weight: 200;
  padding-right: 15px;
`;

export const CommentOwner = styled.div`
  flex: 0 auto;
  width: 300px;
  font-size: 0.8em;
`;

export const Time = styled.span`
  font-weight: 200;
`;

export const Helpful = styled.div`
  flex: 0 auto;
  width: 250px;
`;

export const Thumbs = styled.div`
  flex: 0 auto;
  width: 150px;
  text-align: center;
  padding-right: 10px;
`;

export const Flag = styled.div`
  flex: 1;
`;

export const StarNumber = styled.p`
  border: 1px solid black;
  border-radius: 15%;
  padding: 1px 5px;
  color: white;
  background-color: black;
  margin: 0 15px 0 5px;
`;