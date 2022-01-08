import React from 'react';
import {Container} from './src/style/globalStyle'

import Header from './src/components/Header/index'
import Buttons from './src/components/Buttons/index'


const App = () => {
  return (
      <Container>
        <Header/>
        <Buttons/>
      </Container>
  );
};


export default App;