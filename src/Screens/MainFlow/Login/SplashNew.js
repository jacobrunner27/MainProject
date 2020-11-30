import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const SplashScreen = ({navigation}) => {

    return (

      <View style={styles.container}>

        <View>
        <ImageBackground source={require('../../../Assets/Images/createAccountOrLoginScreen.jpg')} style={styles.backgroundImage}>

        </ImageBackground>
        </View>

        <TouchableOpacity style={[styles.createButtonContainer, styles.createAccountButton]} onPress={()=> navigation.navigate('CreateAccount')}>
          <Text style={styles.loginText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableHighlight style={[styles.loginButtonContainer, styles.loginButton]} onPress={()=> navigation.navigate('Login')}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableHighlight>

      </View>

    );
  }

 export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  backgroundImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover'
  },
  createAccountButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  treviText: {

  },
  loginButtonContainer: {
    height:48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:150,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "white",
    position: 'absolute',
    top: 579
  },
  createButtonContainer: {
    height:48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:265,
    borderRadius:30,
  },
  createAccountButton: {
    backgroundColor: "white",
    position: 'absolute',
    top: 510
  },
  loginText: {
    fontSize: 25,
    color: '#5D41BC',
    fontWeight: 'bold'
  },
  createAccountText: {
    color: 'black',
  }
});
