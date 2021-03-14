
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Item, Input, } from 'native-base';
const image = { ref: "" };
const ScarletScreen = () => {

   
    return (
        <View style={styles.container}>
        <Image source={require('../imgs/blueprint.jpeg')} style={styles.backgroundImage} >
        </Image>
        <View style={styles.viewTextStlye}>
            <Text
                style={styles.font}
                onPress={() => Actions.rampa()}
            >Rampa</Text>
            <Text
                style={styles.font}
                onPress={() => Actions.escada()}
            >Escada</Text>
             <Text
                style={styles.font}
                onPress={() => Actions.blondel()}
            >Blondel</Text>
        </View>
    
        </View>
    );

}

const styles = StyleSheet.create({

    font: {
        margin: 30,
        fontSize: 40,
        textAlign: 'center',
        color: '#2e80f2',
        backgroundColor: '#f2f2f2',
        opacity: 10,
        width: 150,
        borderRadius: 10
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewTextStlye: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'

    }
});

export default ScarletScreen;