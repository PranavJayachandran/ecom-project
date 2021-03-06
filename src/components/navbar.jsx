import React from "react"
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Menu } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Badge} from "@mui/material";
import {mobile} from "../responsive";

const Container = styled.div`
height:80px;
${mobile({height:"50px"})}
`

const Wrapper = styled.div`
padding:10px 20px;
display:flex;
align-items:center;
justify-content:space-between;
margin-top:-20px;
${mobile({padding:"10px 0px"})}
`

const Left = styled.div`
flex:1;
display:flex;
align-items:center`


const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})}
`
const SearchContainer = styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`

const Input = styled.input`
border:none;
${mobile({width:"50px"})}
`

const Center = styled.div`
flex:1;
text-align:center`

const Logo = styled.h1`
font-weight:bold;
${mobile({fontSize:"24px"})}
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({flex:2,justiyContent:"center"})}
`

const MenuItem = styled.a`
font-size:14px;
cursor:pointer;
margin-left:25px;
color:black;
text-decoration:none;
${mobile({fontSize:"32px",marginLeft:"10px"})}
`
function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <SearchIcon />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        SHOPOLO
                    </Logo>
                </Center>
                <Right>
                    <MenuItem href="/register">Register</MenuItem>
                    <MenuItem href="/login">Login</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="secondary">
                            <a href="/cart">
                           <ShoppingCartIcon style={{color:"gray",fontSize:16}}/>
                           </a>
                        </Badge></MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;