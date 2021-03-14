import React, { Component } from 'react';
import { ImageBackground, Image, Text, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class SplashScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: require('../imgs/load.png')
          }
    }

    async componentDidMount() {
        setTimeout(function () {
            Actions.Menu()
        }, 4000);
    }

    render() {
        return (
            <View 
            style={{width: '100%', height: '100%'}}>
                <Image
                    style={styles.backgroundImage}
                    source={this.state.img}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({


    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%'
    },
    
});
