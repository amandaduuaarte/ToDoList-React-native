import React, {useState} from 'react';
import {Container, Img, TaksButton, Texts} from './style'
import LogoSvg from '../../assets/images/Logo.js';


const Header = (props) =>{
  return (
  <Container>
    <LogoSvg/>
    <TaksButton 
    onPress={props.handleOpenModal}
    >
       <Texts>New task </Texts>
    </TaksButton>
  </Container>
  )
}

export default Header;