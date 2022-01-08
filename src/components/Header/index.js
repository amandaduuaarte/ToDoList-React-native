import React from 'react';
import {Container, Img, TaksButton, Texts} from './style'
import {Text} from 'react-native'


import LogoImg from '../../assets/images/Logo.png'

const Header = () =>{
  return (
  <Container>
    <Img source={LogoImg} />
    <TaksButton>
       <Texts>New task </Texts>
    </TaksButton>
  </Container>
  )
}

export default Header;