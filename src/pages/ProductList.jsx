import React from 'react'
import styledComponents from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const Container = styledComponents.div`

`;
const Title = styledComponents.h1`
    margin: 20px;
`;
const FilterContainer = styledComponents.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styledComponents.div`
margin: 20px;
`;

const FilterText = styledComponents.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styledComponents.select`
    font-size: 20px;
    font-weight: 600px;
    padding: 10px;
    margin-right: 20px;
`;

const Option = styledComponents.option`
    font-size: 20px;
    font-weight: 600px;
`;
const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title> Tops</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Yellow</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter><FilterText>Sort Proucts:</FilterText>
            <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (High-Low)</Option>
                    <Option>Price (Low-High)</Option>
                </Select></Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList