import { Facebook, Instagram, MailOutline, Map, PhoneAndroid, Pinterest, Twitter } from '@material-ui/icons';
import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
    display: flex;
`;
const Left = styledComponents.div`
    flex: 1;
    display: flex;
    flex-direction:column;
    padding: 20px;
`;
const Logo = styledComponents.h1`
`;
const Description = styledComponents.p`
    margin: 20px 0px;
`;
const SocialContainer = styledComponents.div`
    display: flex;
`;
const SocialIcon = styledComponents.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    
`;

const Center = styledComponents.div`
    flex: 1;
    padding: 20px;
`;
const Title = styledComponents.h3`
    margin-bottom:30px;
`;
const List = styledComponents.ul`
    margin:0;
    padding:0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styledComponents.li`
    width: 50%;
    margin-bottom: 10px;

`;
const Right = styledComponents.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styledComponents.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>The Floral</Logo>
            <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. </Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405f">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men's Fashion</ListItem>
                <ListItem>Women's Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Privacy</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Map style={{marginRight:"10px"}}/> 622 Dixie Path, South Blazzy 98336 </ContactItem>
            <ContactItem><PhoneAndroid style={{marginRight:"10px"}}/>+1 234 567 8900</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>contact@thefloral.store</ContactItem>
            
        </Right>
    </Container>
  )
}

export default Footer