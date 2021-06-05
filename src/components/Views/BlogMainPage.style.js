import styled from 'styled-components'
/* import { Link } from "react-router-dom"; */


export const Header = styled.div`
position: relative;
width: 100vw;
height: 10rem;
background: #2d8d9e;
margin-bottom: 3rem;
`
export const HeaderTitle = styled.div`
display: block;
font-size: 42px;
width: max-content;
margin: 4rem auto;
color:  #ffffff;
`

export const Image = styled.img`
height: 25rem;
width: 28vw;

@media (max-width: 1536px){
height: 23rem;
width: 28vw;
}

@media (max-width: 1280px){
height: 16rem;
width: 30.9vw;
}

@media (max-width: 1024px){
width: 32vw;
display: block;
margin: auto;
}

@media (max-width: 800px){
height: 14rem;
width: 38vw;
}

@media (max-width: 768px){
display: block;
margin: auto;
height: 20rem;
width: 50vw;
}

@media (max-width: 425px){
width: 78vw;
height: 14rem;
}
`

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
position: relative;
margin: 0;
padding: 0;
width: 100%;
height: 100%;
/* padding-bottom: 4rem; */
justify-content: center;
align-content: center;

@media (max-width: 768px){
    flex-direction: column;
}
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
    cursor: pointer;
}

@media (max-width: 1024px){
width: 32vw;

}


@media (max-width: 800px){
width: 32vw;
}

@media (max-width: 768px){
    width: 52vw;
    margin-top: 0rem;
    padding-bottom: 2rem;
    font-size: 12px;
}

@media (max-width: 425px){
    width: 65vw;
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

@media (max-width: 1280px){
width: 26.8vw;
height: 75vh;
}

@media (max-width: 1024px){
    width: 38vw;
    height: max-content;
}

@media (max-width: 800px){
    width: 38vw;
    height: max-content;
}

@media (max-width: 768px){
    display: block;
    width: 75vw;
    height: max-content;
    margin: auto;
    margin-top: 3rem;
}

@media (max-width: 425px){
    display: block;
    width: 79vw;
    height: max-content;
    margin: auto;
    margin-top: 3rem;
}
`

export const Title = styled.h3`
display: block;
font-size: 18px;
color:  #000000;
width: 18vw;
margin: auto;

@media (max-width: 1024px){
margin-top: 15px;
width: 22vw;
text-align: center;
}

@media (max-width: 800px){
margin-top: 15px;
width: 28vw;
text-align: center;
}

@media (max-width: 768px){
    display: flex;
    width: 70vw;
    margin-top: 1rem;
    justify-content: center;
    align-self: auto;
}

@media (max-width: 425px){
    width: 65vw;
}
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

@media (max-width: 425px){
    width: 8rem;
    height: 2.5rem;
}
`

export const ButtonCont = styled.div`
display: flex;
width: 40vw;
justify-content: space-between;
margin-top: 5rem;

@media (max-width: 800px){
    width: 60vw;
}

@media (max-width: 768px){
    width: 65vw;
    align-self: center;
    justify-content: space-between;
}

@media (max-width: 425px){
    width: 90vw;
    justify-content: space-around;
}
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
width: 100vw;
height: 10rem;
background: #2d8d9e;
margin-bottom: 0;
margin-top: 10%;
`