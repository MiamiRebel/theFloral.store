import React from 'react'
import styledComponents from 'styled-components'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const NewTitle = styledComponents.h1`
  font-weight: 200;
  text-align:center;
  padding-top: 25px;
  margin-bottom: ${props=>props.type === 'more' && "40px"};
`;

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <NewTitle>LATEST ARRIVALS</NewTitle>
        <Products />
        <NewTitle type="more">View All</NewTitle>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home