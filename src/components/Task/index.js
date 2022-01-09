import React from 'react'
import {Container, Header, TitleTaks, Body, TaskText, Footer} from './style'
import {ScrollView} from 'react-native'


import DotIcon from '../../assets/images/DotIcon'
import Rectangle from '../../assets/images/Rectangle'



const Task = () =>{
  return(
    <Container>
      <Header>
        <Rectangle/>
        <TitleTaks> Create Sign In validation</TitleTaks>
        <DotIcon/>
      </Header>
      <Body>
        <TaskText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        </TaskText>
      </Body>
      <Footer>
      </Footer>
    </Container>
  )
}

export default Task;