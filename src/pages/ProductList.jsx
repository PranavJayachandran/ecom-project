import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import { mobile } from "../responsive"

const Container=styled.div`
`
const Title=styled.h1`
margin:20px;
`
const Filter=styled.div`
margin:20px;
display:flex;
${mobile({margin:"0px 20px", display:"flex",flexDirection:"column"})};
`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;
`


const FileterText=styled.div`
font-size:20px;
font-weight:600;
margin-right:20px;
${mobile({marginRight:"0px "})}
`

const Select=styled.select`
padding:10px;
margin-right:20px;
${mobile({margin:"10px 0px"})}
`
const Option=styled.option`
`


export const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
            <FileterText>Filter Products:</FileterText>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
            </Filter>
            <Filter>
            <FileterText>Sort Products:</FileterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList;