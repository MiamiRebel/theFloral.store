
import React from 'react'
import styledComponents from 'styled-components';

const Container = styledComponents.div`
    height: 30px;
    background-color: #751370;
    color: white;
    display: flex;
    align-items:center;
    justify-content:center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
        Integration powered by Violet!
    </Container>
  )
}

export default Announcement