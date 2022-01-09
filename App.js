import React from 'react';
import {Container} from './src/style/globalStyle'
import { ScrollView} from 'react-native'

import Header from './src/components/Header/index'
import Buttons from './src/components/Buttons/index'
import Task from './src/components/Task/index'




const App = () => {
  return (
    <ScrollView>
          <Container>
            <Header/>
            <Buttons/>
            <Task/>
          </Container>
     </ScrollView>
  );
};


export default App;