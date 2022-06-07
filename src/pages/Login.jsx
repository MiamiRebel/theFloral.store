import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5) ),
        url("https://cdn.shopify.com/s/files/1/0105/4102/products/5PW5016M_lifestyle_1280x1280_e25d6899-1d92-4f79-afc0-98ac20e779d8_5000x.jpg")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const Wrapper = styledComponents.div`
    width: 25%;    
    padding: 20px;
    background-color: white;
`;

const Title = styledComponents.h1`
        font-size: 24px;
        font-weight: 300;
`;

const Form = styledComponents.form`
    display: flex;
    flex-direction:column;

`;

const Input = styledComponents.input`
        flex:1;
        min-width: 40%;
        margin: 10px 0px;
        padding: 10px;
`;


const Button = styledComponents.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: teal;
        color: white;
        cursor:pointer;
        margin-bottom: 10px;
`;

const Link = styledComponents.a`
        margin: 5px 0px;
        font-size:12px;
        text-decoration: underline;
        cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOGIN </Button>
                <Link>DON'T REMEMBER YOUR PASSOWRD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>

            </Form>
        </Wrapper>

    </Container>
  )
}

export default Login