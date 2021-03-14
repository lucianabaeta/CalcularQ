import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Root } from 'native-base'
import LoadScreen from './src/components/LoadScreen';
import CalculadoraRampa from './src/components/CalculadoraRampa';
import CalculadoraEscada from './src/components/CalculadoraEscada';
import CalculoDeBlondel from './src/components/CalculoDeBlondel';
import Menu from './src/components/Menu';

const App = () => {
  return (
    <Root>
      <Router>
        <Scene key="root">
        <Scene
            key="LoadScreen"
            component={LoadScreen}
            hideNavBar
          />
          <Scene 
            key="Menu"
            component={Menu}
            title="Menu"
            hideNavBar
          />

          <Scene 
            key="blondel"
            component={CalculoDeBlondel}
            title="Blondel"
          />

          <Scene 
            key="rampa"
            component={CalculadoraRampa}
            title="Rampa"
          />

          <Scene
            key="escada"
            component={CalculadoraEscada}
            title="Escada"
          />
        </Scene>
      </Router>
    </Root>
  );
}

export default App;