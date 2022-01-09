import React from 'react';
import Modal from 'react-native-modal'
import {StyleSheet, } from 'react-native'
import Closer from '../../assets/images/Closer'


import {
  Container,ModalText,TitleInput,ButtonTask, TextButton,CloserView
} from './style'

const ModalNewTask = (props) =>{
  const styles = StyleSheet.create({
    inputDescription: {
     height:220,
     marginTop:'5%',
     paddingTop:2,
     paddingBottom:150,
     paddingLeft:14
    },
    inputTitle:{
      height:64,
      paddingLeft:14
    }
  });

  return (
    <>
      <Modal isVisible={props.Visible}>
        <Container>
          <CloserView
          onPress={props.handleOpenModal}
          >
          <Closer />
          </CloserView>
          <ModalText >New Task</ModalText> 
          <TitleInput style={styles.inputTitle}
           placeholder="Title"
           placeholderTextColor ="#F5F5F5"
          />
           <TitleInput style={styles.inputDescription}
           placeholder="Description"
           placeholderTextColor ="#F5F5F5"
          />
          <ButtonTask
          
          >
            <TextButton>Save</TextButton>
          </ButtonTask>
        </Container>
      </Modal>
    </>
  )
}


export default ModalNewTask;