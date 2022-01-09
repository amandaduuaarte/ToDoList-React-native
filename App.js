import React,{useState} from 'react';
import {Container} from './src/style/globalStyle'
import { ScrollView} from 'react-native'
import Modal from 'react-native-modal'

import Header from './src/components/Header/index'
import Buttons from './src/components/Buttons/index'
import Task from './src/components/Task/index'
import Footer from './src/components/Footer/index'
import ModalNewTask from './src/components/ModalNewTask/index'




const App = () => {
  const [modalVisibility, setModalVisibility]= useState(false)

  function toggleModal ()  {
    setModalVisibility(!modalVisibility);
  };
  return (
    <ScrollView>
          <Container>
            <ModalNewTask Visible={modalVisibility} handleOpenModal={toggleModal}/>
            <Header handleOpenModal={toggleModal}/>
            <Buttons/>
            <Task/>
            <Footer/>
          </Container>
     </ScrollView>
  );
};


export default App;