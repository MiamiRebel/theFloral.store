import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styledComponents.div`

`;
const Wrapper = styledComponents.div`
    padding: 20px;
`;
const Title = styledComponents.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 45px;
`;
const TopTexts = styledComponents.div``;
const TopText = styledComponents.span`
    text-decoration: underline;
    cursor:pointer;
    margin: 10px;
`;
const TopButton = styledComponents.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black": "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const Bottom = styledComponents.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 105px;
`;
const Info = styledComponents.div`
    flex:3;
`;

const Product = styledComponents.div`
    display: flex;
`;
const ProductDetail = styledComponents.div`
    display:flex;
    justify-content: space-between;
    flex:2;
`;
const Image = styledComponents.img`
    width: 200px;
`;
const Details = styledComponents.span`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styledComponents.span`
    
`;
const ProductId = styledComponents.span`
    
`;
const ProductSize = styledComponents.span`
    
`;
const ProductColor = styledComponents.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color};
`;
const PriceDetail = styledComponents.div`
    display:flex;
    flex: 2;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ProductAmountContainer = styledComponents.div`
    display:flex;
    align-items: center;
    margin-bottom:20px;
`;
const ProductAmount = styledComponents.div`
    font-size:24px;
    margin:15px;
`;
const ProductPrice = styledComponents.div`
    font-size: 30px;
    font-weight:200;
`;

const Hr = styledComponents.hr`
    background-color: #eee;
    border: none;
    height:1px;
    margin: 25px;
`;

const Summary = styledComponents.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const SummaryTitle = styledComponents.h1`
    font-weight:200;
    text-align: center;
`;
const SummaryItem = styledComponents.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500" };
    font-size: ${props=>props.type === "total" && "24px" };
`;
const SummaryItemText = styledComponents.span`
   
`;
const SummaryItemPrice = styledComponents.span`
    
`;
const Button = styledComponents.button`
   width: 100%;
   height: 35px;
   padding: 10px;
   background-color: black;
   color: white;
   font-wieght: 600;
`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
            <Wrapper>
                <Title>Your Cart</Title>
                <Top>
                    <TopButton><Link to="/" style={{textDecoration:'none'}}>Continue Shopping</Link></TopButton>
                    <TopTexts>
                    <TopText>Shopping Cart(2)</TopText>
                    <TopText>My Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://img.ltwebstatic.com/images3_pi/2022/03/24/1648106324c747568b364fc11477493464818c26d8_thumbnail_900x.webp"/>
                                <Details>
                                    <ProductName><b>Product:</b> The Miami Vice</ProductName>
                                    <ProductId><b>ID:</b> 458934</ProductId>
                                    <ProductColor color="teal"/>
                                    <ProductSize><b>Size:</b> Large</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>24.99</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://img.ltwebstatic.com/images3_pi/2022/04/14/164990282573af09681eba02296644718d5c51522a_thumbnail_900x.webp"/>
                                <Details>
                                    <ProductName><b>Product:</b>Spring Time Vibe</ProductName>
                                    <ProductId><b>ID:</b> 1234566</ProductId>
                                    <ProductColor color="pink"/>
                                    <ProductSize><b>Size:</b> Large</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>14.99</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice> $64.97</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice> $3.98</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice> $-3.98</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem  type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice> $64.97</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart