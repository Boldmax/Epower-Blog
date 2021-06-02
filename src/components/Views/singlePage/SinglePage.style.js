import styled from 'styled-components'


export const Header = styled.div`
position: absolute;
width: 100%;
height: 13rem;
background: #2d8d9e;
margin-bottom: 1rem;
top: 0;
z-index: 6;
`
export const HeaderTitle = styled.h1`
display: block;
font-size: 42px;
font-weight: 600;
width: max-content;
margin: auto;
color:  #ffffff;
margin-top: 3rem;

@media (max-width: 768px){
    font-size: 32px;
}

@media (max-width: 425px){
    font-size: 29px;
    justify-content: center;
    text-align: center;
    overflow: none;
    width: 80vw;
}
`

export const HeaderDate = styled.h1`
display: block;
font-size: 22px;
font-weight: 400;
margin: auto;
width: max-content;
color: #ffffff;
margin-top: 1rem;
text-transform: uppercase;

@media (max-width: 425px){
    font-size: 16px;
    text-align: center;
    overflow: none;
    width: 80vw;
}
`

export const Image = styled.img`
height: 42rem;
width: 70vw;

@media (max-width: 768px){
    height: 30rem;
}

@media (max-width: 425px){
    height: 16rem;
}
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
margin-bottom: 0;
`

export const Content = styled.span`
display: block;
font-size: 18px;
width: 70vw;
color: #000000;
margin: auto;

`

export const Cards = styled.div`
display: flex;
flex-direction: column;
width: 85vw;
height: max-content;
background: #ffffff;
margin-top: 15rem;
align-items: center;
justify-self: center;
`

export const Title = styled.h3`
display: block;
font-size: 32px;
color:  #000000;
width: max-content;
margin: auto;
margin-top: 2rem;

@media (max-width: 768px){
    font-size: 26px;
}

@media (max-width: 425px){
    font-size: 18px;
    width: 80vw;
    text-align: center;
}
`

export const Footer = styled.div`
position: relative;
width: 100%;
height: 14rem;
background: #2d8d9e;
margin-bottom: 0;
margin-top: 10%;

@media (max-width: 425px){
    font-size: 24px;
}
`

export const Copyright = styled.p`
display: block;
width: max-content;
margin: auto;
margin-top: 4rem;
font-size: 28px;
font-weight: 700;
color: #ffffff;
`

export const Slug = styled.p`
display: block;
width: max-content;
margin: auto;
margin-top: 1rem;
font-size: 26px;
font-weight: 600;
color: #000;

@media (max-width: 425px){
    font-size: 20px;
    width: 80vw;
    text-align: center;
}
`