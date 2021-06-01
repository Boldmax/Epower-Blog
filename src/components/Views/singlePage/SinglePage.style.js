import styled from 'styled-components'


export const Header = styled.div`
position: fixed;
width: 100%;
height: 10rem;
background: #2d8d9e;
margin-bottom: 1rem;
top: 0;
z-index: 6;
`
export const HeaderTitle = styled.div`
display: block;
font-size: 42px;
width: max-content;
margin: auto;
color:  #ffffff;
margin-top: 3rem;
`

export const HeaderDate = styled.h1`
display: block;
font-size: 25px;
margin: auto;
width: max-content;
color: #ffffff;
margin-top: 1rem;
`

export const Image = styled.img`
height: 48rem;
width: 70vw;
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
margin-top: 12rem;
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
`