import React from 'react'
import {
  Container, Header, TitleTaks, Body, TaskText, Footer,TextFooter
} from './style'


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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ultricies eget neque, libero, massa morbi aliquam ornare. 
        Et tristique sit faucibus suspendisse massa sit turpis vitae. 
        Aliquam eget ipsum ut viverra est porta. Odio velit et, egestas in netus. 
        Porttitor amet erat scelerisque aenean enim tortor, gravida quisque. 
        Egestas dui non commodo phasellus nibh volutpat nulla in. 
        </TaskText>
      </Body>
      <Footer>
        <TextFooter>Created March 30, 2021 1:24pm</TextFooter>
      </Footer>
    </Container>
  )
}

export default Task;