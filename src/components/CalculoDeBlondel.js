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


    calcularEscada() {
        console.log(this.state.espelho)
   
        if (this.state.espelho !== 0 ) {
            var espelho = this.state.espelho.replace(",", '.') * 2
            var resultado = 64 - espelho 
            console.log(resultado)
            this.setState({texto: "Profundidade do piso: "})
            this.setState({medida: "cm"})
        } else if (this.state.piso !== 0) {
            var piso = this.state.piso.replace(",", '.') 
            var divisao = 64 - piso
            var resultado = divisao / 2
            console.log(resultado)
            this.setState({texto: "Altura do Espelho: "})
            this.setState({medida: "cm"})
        }

        this.setState({ resultado: (Math.round(resultado * 100) / 100) })
        this.setState({espelho: 0})
        this.setState({piso: 0})
    

    }

    constructor(props) {
        super(props);
        this.state = {
            altura: '',
            espelho: 0,
            resultado: '',
            alt: '',
            inc: '',
            alturaConvertida: '',
            piso: 0,
            texto: '',
            medida:''
        };


    }


    handleAlturaChange = (piso) => {
        this.setState({ piso });
        console.log(piso)
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
                        <TextInput 
                        placeholderTextColor="#fff"
                        placeholder="Altura do Espelho"
                            value={this.state.espelho}
                            onChangeText={this.handleEspelhoChange}
                            keyboardType='numeric'
                        />
                    </Item>
                    <Item style={{ marginTop: "10%", width: '60%', alignSelf: "center" }}>
                        <TextInput
                            placeholderTextColor="#fff"
                            keyboardType='numeric'
                            onChangeText={piso => this.setState({ piso })}
                            value={this.state.piso}
                            onChangeText={this.handleAlturaChange}
                            placeholder="Piso" />
                    </Item>
                    <Item style={{ marginTop: "10%", width: '60%', alignSelf: "center" }} disabled>
                        <Text>{this.state.texto}{this.state.resultado}{this.state.medida} </Text>
                    </Item>
                    <Button onPress={() => this.calcularEscada()} style={{ marginTop: "10%", alignSelf: "center", backgroundColor: '#626c84' }} success><Text style={ {color: 'white'} }> Calcular Resultado </Text></Button>
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
