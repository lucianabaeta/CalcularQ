/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';


import { Container, Header, Content, Item, Input, Icon, Button, Toast } from 'native-base';
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class App extends React.Component {



  calcularRampa(){ 
  
    var altura= this.state.altura.replace(",", '.')
    var inclinacao = this.state.inclinacao.replace(",", '.')
    var resultado = (altura/inclinacao) * 100
    console.log(("Comprimento da rampa é "+(Math.round(resultado))+ " metros"));
    this.setState({resultado: (Math.round(resultado)) })
    
  }

  constructor(props) {
    super(props);
    this.state = {
      altura: '',
      inclinacao: '',
      resultado: '',
      alt: '',
      inc: ''
    };
    

  }


   handleAlturaChange = (altura) => {
        this.setState({ altura });
        console.log(altura)
    };

    handleInclincaoChange = (inclinacao) => {
      this.setState({ inclinacao });
      console.log(inclinacao)
  };


  render() {
    return (

      <Container style={{backgroundColor: '#abb8ca'}}>
        {/* <Header><Text style={{color:'white', fontSize:20, marginTop:15}}>Calculo de Rampa</Text></Header> */}
        <Content>
          <Item
            style={{ marginTop: "50%", width: '60%', alignSelf: "center" }}>
            <TextInput placeholder="Altura a ser vencida (M)"
               value={this.state.altura}
               onChangeText={this.handleAlturaChange}
               keyboardType='numeric'
            />
          </Item>
          <Item style={{ marginTop: "10%", width: '60%', alignSelf: "center" }}>
            <TextInput
              keyboardType='numeric'
              onChangeText={inclinacao => this.setState({ inclinacao })}
              value={this.state.inclinacao}
              onChangeText={this.handleInclincaoChange}
              placeholder="Inclinação da rampa (%) " />
          </Item>
          <Item style={{ marginTop: "10%", width: '60%', alignSelf: "center" }} disabled>
           <Text>Comprimento da rampa é: {this.state.resultado} Metros</Text>
          </Item>
          <Button onPress={() => this.calcularRampa()} style={{ marginTop: "10%", alignSelf: "center",backgroundColor: '#626c84' }} success><Text style={ {color: 'white'} }> Calcular Resultado </Text></Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
