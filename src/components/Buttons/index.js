import React from 'react'
import {Container, Texts,ToDoButton,ToDoText, Main} from './style'
import {Text} from 'react-native'

const Buttons = ()  =>{
  return(
    <Container>
      <Texts>Hi there.</Texts>
      <Main>
        <ToDoButton> 
          <ToDoText>To do </ToDoText>
          </ToDoButton>
          <ToDoButton > 
          <ToDoText> Closed </ToDoText>
          </ToDoButton>
        </Main>
    </Container> 
  )
}

export default Buttons;