import React from "react";
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../responsive";

const Container=styled.div`
display:flex;
${mobile({flexDirection:"column"})}
`
const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Logo=styled.h1`
`
const Desc=styled.p`
margin:20px 0px;
`
const SocialContainer=styled.div`
display:flex;

`
const SocialIcons=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-left:20px;
`

const Center=styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})}
`

const Title=styled.h3`
margin-bottom:30px;
`
const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const ListItem=styled.li`
width:50%;

`
const Right=styled.div`
flex:1;
padding:20px
${mobile({backgroundColor:"#"})}
`
const ContactItem=styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`
const Payment=styled.img`
width:50%;
`

function Footer(){
    return(
        <Container>
            <Left>
                <Logo>SHOPOLO</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore numquam ex iste mollitia earum odio at quam magnam, tempora ea!</Desc>
                <SocialContainer>
                    <SocialIcons color="385999">
                        <FacebookIcon/>
                    </SocialIcons>
                    <SocialIcons color="E4405F">
                        <InstagramIcon/>
                    </SocialIcons>
                    <SocialIcons color="55ACEE">
                        <TwitterIcon/>
                    </SocialIcons>
                </SocialContainer>

            </Left>
            <Center>
                <Title>
                    Useful Links
                </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accesories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>
                    Contact
                </Title>
                <ContactItem>
                    <LocationOnIcon style={{marginRight:"10px"}}/>
                    Address Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </ContactItem>
                <ContactItem>
                    <LocalPhoneIcon style={{marginRight:"10px"}}/>
                    99999999
                </ContactItem>
                <ContactItem>
                    <EmailIcon style={{marginRight:"10px"}}/>
                   a@gmail.com
                </ContactItem>
                <Payment src="data:image/jpeg;base64,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"/>
            </Right>
        </Container>
    )
}

export default Footer;