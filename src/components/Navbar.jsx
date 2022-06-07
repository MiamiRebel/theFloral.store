import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import Badge from '@mui/material/Badge';
import React from 'react';
import styledComponents from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styledComponents.div`
height: 60px;

`;
const Wrapper = styledComponents.div`
    padding: 10px 20px;
    display: flex;
    justify-content:space-between;
    align-items: center;
`;

const Left = styledComponents.div`
    flex:1;
    display: flex;
    align-items:center
`;

const Language = styledComponents.span`
    font-size:14;
    cursor: pointer
`;

const SearchContainer = styledComponents.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding: 5px;
`;

const Input =  styledComponents.input`
border: none;
`;
const Center = styledComponents.div`
    flex:1;
    text-align:center;
`;

const Logo = styledComponents.h1`
    font-weight: bold;
`;
const Right = styledComponents.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`;

const MenuItem = styledComponents.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    color:inherit;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>🇺🇸 English</Language>
                <SearchContainer>
                <Input/>
                <Search style={{ color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left> 
            <Center><Logo><Link to="/" style={{textDecoration:'none',color:'black'}}>The Floral</Link></Logo></Center>
            <Right>
                <MenuItem><Link to="/register" style={{textDecoration:'none',color:'black'}}>REGISTER</Link></MenuItem>
                <MenuItem><Link to="/login" style={{textDecoration:'none',color:'black'}}>SIGN IN</Link></MenuItem>
                <MenuItem>
                    <Link to="/cart">
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </Link>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar