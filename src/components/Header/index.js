import React from 'react';
import {Container, Img, TaksButton, Texts} from './style'
import LogoSvg from '../../assets/images/Logo.js';


const Header = () =>{
  return (
  <Container>
    <LogoSvg/>
    <TaksButton>
       <Texts>New task </Texts>
    </TaksButton>
  </Container>
  )
}

export default Header;