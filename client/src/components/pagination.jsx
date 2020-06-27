import React from 'react';
import styled from 'styled-components';

import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { PageSection, Wrapper } from '../styled/components.jsx';

const GotoTop = styled.a`
  color: #cd2418;
  flex: 1;
`;

const Displayer = styled.div`
  padding-right: 10px;
  flex: 0 auto;
`;

const PageButton = styled.button`
  background-color: transparent;
  color: #cd2418;
  border: none;
  outline: none;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  &:focus {
    border: 1px solid blue;
  }
`;

const Pagination = (props) => {
  const { nextB, prevB, next, prev, first, last } = props;
  return (
    <PageSection>
      <Wrapper>
        <Displayer>Displaying Reviews {first}-{last}</Displayer>
        <GotoTop href='#top'> Back to Top </GotoTop>
        {prev && <PageButton onClick={() => prevB()}> <FaAngleDoubleLeft/> Prev </PageButton> }
        { prev && next && <div> | </div> }
        { next && <PageButton onClick={() => nextB() }> Next <FaAngleDoubleRight/> </PageButton> }
      </Wrapper>
    </PageSection>
  );
};


export default Pagination;