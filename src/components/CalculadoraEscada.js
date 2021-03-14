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

  calcular() {
    Altura = inputAltura.value
    Espelho = inputEspelho.value
    numeroespelhos = Altura / Espelho
    botaoCalcular.innerHTML = ("Número de degraus necessários " + (Math.round(numeroespelhos * 100) / 100))
    
    

    
  } 

  calcularEscada() {
      var Altura = this.state.Altura
      
      
    if (this.state.altura !== 0 || this.state.espelho !== 0) {
      if (this.state.altura !== 0) {
        var altura = this.state.altura.replace(",", '.')
      } else {
        Toast.show({
          text: "Dados incorretos",
          buttonText: "Okay",
          duration: 3000
        })
      }
      if (this.state.espelho !== 0) {
        var espelho = this.state.espelho.replace(",", '.') / 100
      } else {
        Toast.show({
          text: "Dados incorretos",
          buttonText: "Okay",
          duration: 3000
        })
      }
      
      var resultado = (altura / espelho)

      var novoresultado = (altura*100/(Math.trunc(resultado + 1)))
       
      
      
    } else {
      Toast.show({
        text: "Dados incorretos",
        buttonText: "Okay",
        duration: 3000
      })


    }


    const trunc = (n, decimalPlaces) => {
      const decimals = decimalPlaces ? decimalPlaces : 2;
      const asString = n.toString();
      const pos = asString.indexOf('.') != -1 ? asString.indexOf('.') + decimals + 1 : asString.length;
      return parseFloat(n.toString().substring(0, pos)).toLocaleString();
  };

    this.state.novoespelho = (trunc(novoresultado))

    this.setState({ resultado: (Math.round(resultado * 100) / 100)})
    
    this.setState({ resultado: (Math.trunc(resultado + 1))});

    

    


  }

  constructor(props) {
    super(props);
    this.state = {
      altura: 0,
      espelho: 0,
      resultado: '',
      novoespelho: '',
      alt: '',
      inc: '',
      alturaConvertida: '',
      showToast: false
    };


  }

  handleAlturaChange = (altura) => {
    this.setState({ altura });
    console.log(altura)
  };

  handleEspelhoChange = (espelho) => {
    this.setState({ espelho });
    console.log(espelho)
  };


  render() {
    return (

      <Container style={{backgroundColor: '#abb8ca'}}>
        {/* <Header><Text style={{color:'white', fontSize:20, marginTop:15}}>Calculo de Rampa</Text></Header> */}
        <Content>
          <Item
            style={{ marginTop: "50%", width: '60%', alignSelf: "center" }}>
            <TextInput placeholder="Altura do Piso ao Piso (Metros)"
              value={this.state.altura}
              onChangeText={this.handleAlturaChange}
              keyboardType='numeric'
            />
          </Item>
          <Item style={{ marginTop: "10%", width: '60%', alignSelf: "center" }}>
            <TextInput
              keyboardType='numeric'
              onChangeText={espelho => this.setState({ espelho })}
              value={this.state.espelho}
              onChangeText={this.handleEspelhoChange}
              placeholder="Altura do espelho (CM)" />
          </Item>
          <Item style={{ marginTop: "10%", width: '60%', alignSelf: "center" }} disabled>
            <Text >Número de degraus necessários {this.state.resultado} </Text>
          </Item>
          <Item style={{ marginTop: "5%", width: '60%', alignSelf: "center" }} disabled><Text>Nova altura do espelho {this.state.novoespelho} </Text></Item>
          <Button onPress={() => this.calcularEscada()} style={{ marginTop: "10%", alignSelf: "center", backgroundColor: '#626c84'}} success>
            <Text style={ {color: 'white'} }> Calcular Resultado </Text>
            </Button>
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
