import { Send } from '@material-ui/icons';
import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
`;
const Title = styledComponents.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Description = styledComponents.div`
    font-size: 24px;
    font-weight: 100;
    margin-bottom: 20px;
`;
const InputContainer = styledComponents.div`
    width: 35%;
    height: 50px;
    background-color: white;
    display:flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;
const Input = styledComponents.input`
    border: none;
    flex: 8;
    padding-left:20px;
    font-size: 15px;
`;
const Button = styledComponents.button`
    flex:1;
    border:none;
    background-color: teal;
    color: white;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates for your favorite floral products.</Description>
        <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter