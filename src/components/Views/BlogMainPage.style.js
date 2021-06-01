import styled from 'styled-components'
import { Link } from "react-router-dom";


export const Header = styled.div`
position: relative;
width: 100%;
height: 10rem;
background: #2d8d9e;
margin-bottom: 1rem;
`
export const HeaderTitle = styled.div`
display: block;
font-size: 42px;
width: max-content;
margin: 4rem auto;
color:  #ffffff;
`

export const Image = styled.img`
height: 18rem;
width: 23.73rem;
`

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
position: relative;
width: 100%;
height: max-content;
padding-bottom: 4rem;
justify-content: center;
align-content: center;
`

export const Links = styled(Link)`
display: block;
font-size: 14px;
width: 20vw;
color: #000000;
margin: auto;
text-decoration: none;

&:hover{
    color:  blue;
}
`
export const Cards = styled.div`
display: flex;
flex-direction: column;
width: 25vw;
height: 75vh;
background: #ffffff;
margin: 1rem 2rem;
box-shadow: 0px 4px 9px 0px rgba(170, 198, 206, 0.24);
`

export const Title = styled.h3`
display: block;
font-size: 18px;
color:  #000000;
width: 18vw;
margin: auto;
`

export const Button = styled.button`
width: 10rem;
height: 4rem;
font-size: 18px;
background: #2d8d9e;
border-radius: 15px;
color:  #ffffff;
outline: none;
border: none;
`

export const ButtonCont = styled.div`
display: flex;
width: 50vw;
justify-content: space-between;
margin-top: 2rem;
`