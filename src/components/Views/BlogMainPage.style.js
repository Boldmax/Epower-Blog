import styled from 'styled-components'
/* import { Link } from "react-router-dom"; */


export const Header = styled.div`
position: relative;
width: 100%;
height: 10rem;
background: #2d8d9e;
margin-bottom: ${(props) => props.footer ? "0px" : "3rem"};
margin-top: ${(props) => props.footer ? "4rem" : "0rem"};
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
margin: 0;
padding: 0;
width: 100%;
height: 100%;
padding-bottom: 4rem;
justify-content: center;
align-content: center;

`

export const Links = styled.span`
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
width: 27.8vw;
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
height: 3rem;
font-size: 18px;
background: #2d8d9e;
border-radius: 25px;
color:  #ffffff;
outline: none;
border: none;
`

export const ButtonCont = styled.div`
display: flex;
width: 40vw;
justify-content: space-between;
margin-top: 5rem;
`

export const Copyright = styled.p`
display: block;
width: max-content;
margin: auto;
margin-top: 3rem;
font-size: 18px;
color: #ffffff;
`

export const Footer = styled.div`
position: relative;
width: 100%;
height: 10rem;
background: #2d8d9e;
margin-bottom: 0;
margin-top: 10%;
`