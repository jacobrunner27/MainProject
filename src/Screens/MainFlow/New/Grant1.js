import React, { Component, useState } from 'react';
import { width, height, totalSize } from 'react-native-dimension';
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

const Colors = {
    purple: '#651a93',
    orange: '#f9c400',
    whisper: '#f0edf4',
    white: '#ffffff',
    steel: '#cccccc',
    black: '#000000',
    blue: '#585AD6',
}

const Grant1 = ({navigation}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    return (

      <View style={styles.container}>

        <View>
        <ImageBackground source={require('./src/Assets/Images/Grant1.jpg')} style={styles.backgroundImage}>
        </ImageBackground>
        </View>

        <TouchableOpacity style={styles.treviIcon} onPress={() => navigation.navigate('Trending', {})}>
          <Image source={require('./src/Assets/Images/littleTreviLogo.png')} />
        </TouchableOpacity>

        <View style={styles.userInputs}>
            <View style={styles.itemNameInput} >
            <TextInput
                style={styles.inputText}
                placeholder="Item name"
                placeholderTextColor="#D3D3D3"
                onChangeText={text => setTitle(text)}/>
            </View>

            <View style={styles.itemDescription} >
            <TextInput
                style={styles.descriptionText}
                placeholder="Item description"
                placeholderTextColor="#D3D3D3"
                onChangeText={text => setDescription(text)}/>
            </View>

            <View style={styles.priceInput}>
            <View style={styles.priceStyle} >
            <TextInput
                style={styles.inputText}
                placeholder="Item price"
                placeholderTextColor="#D3D3D3"
                onChangeText={text => setPrice(text)}/>
            </View>
            </View>

        </View>

        
            <TouchableOpacity style={[styles.continueButtonContainer,  styles.continueButton]} onPress={() => navigation.navigate('Grant2', {title: title, description: description, price: price})}>
                <Text style={[styles.continueText]}>Continue</Text>
            </TouchableOpacity>
       

      </View>

    );
  }

export default Grant1;

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
  continueButton: {
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
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:210,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "white",
    position: 'absolute',
    top: 750
  },
  continueButtonContainer: {
    height:48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:150,
    borderRadius:30,
  },
  continueButton: {
    backgroundColor: '#EFC102',
    position: 'absolute',
    top: 818,
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.16,
    elevation: 5
  },
  loginText: {
    fontSize: 15,
    color: '#5D41BC',
    
  },
  continueText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  itemNameInput:{
    width: 370,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: -165,
    borderRadius: 30,
    justifyContent:"center",
    padding:10
  },
  inputText:{
    height:50,
    fontWeight: 'bold',
    fontSize: 15,
  },
  descriptionText: {
    position: 'absolute',
    top: -50,
    left: 20,
    height:145,
    fontWeight: 'bold',
    fontSize: 15,
  },
  userInputs: {
    position: "absolute",

  },
  itemDescription: {
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 145,
    top: -55,
    borderRadius: 20,
    justifyContent:"center",
    padding:10 
  },
  priceStyle: {
    width: 130,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    borderRadius: 30,
    justifyContent:"center",
    padding:10 
  },
  priceInput: {
    position: 'absolute',
    top: 230,
    left: 125
  },
  treviIcon: {
    flexDirection: 'row',
    position: 'absolute',
    top: 60,
    left: 18
},
});
