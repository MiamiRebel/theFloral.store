import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styledComponents from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styledComponents.div``;

const Wrapper = styledComponents.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styledComponents.div`
  flex:1;
`;

const Image = styledComponents.img`
  width: 100%;
  height: 85vh;
  object-fit: cover;
  
`;

const InfoContainer = styledComponents.div`
  flex:1;
  padding: 0px 50px;;
`;

const Title = styledComponents.h1`
  font-weight: 200;
`;

const Desc = styledComponents.p`
  margin: 20px 0px;
`;

const Price = styledComponents.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styledComponents.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

const Filter = styledComponents.div`
  display: flex;
  align-items; center;
`;

const FilterTitle = styledComponents.span`
  font-size; 20px;
  font-weight: 200;
`;

const FilterColor = styledComponents.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${ props=>props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styledComponents.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styledComponents.option`
  
`;
const AddContainer = styledComponents.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styledComponents.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styledComponents.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styledComponents.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color:#f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
          <ImgContainer>
            <Image src="https://img.ltwebstatic.com/images3_pi/2022/03/24/1648106324c747568b364fc11477493464818c26d8_thumbnail_900x.webp"/>
          </ImgContainer>
          <InfoContainer>
            <Title>The Miami Vice</Title>
            <Desc>
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </Desc>
            <Price>$24.99</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color: </FilterTitle>
                <FilterColor color="Teal"/>
                <FilterColor color="Pink"/>
                <FilterColor color="Coral"/>
              </Filter>
              <Filter>
                <FilterTitle>Size: </FilterTitle>
                <FilterSize>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>

            <AddContainer>
              <AmountContainer>
                <Remove/>
                  <Amount>1</Amount>
                <Add/>
              </AmountContainer>
                <Button> ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product