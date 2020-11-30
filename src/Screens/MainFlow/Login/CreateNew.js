import React, { Component, useState } from 'react';
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

const CreateAccountScreen = ({navigation}) => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [bio, setBio] = useState(null);
    const [message, setMessage] = useState('');

    const createUser = async () => {
        await fetch('http://192.168.0.8:8000/create-user/', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
                first_name: firstName,
                last_name: lastName
            })
        })
        .then((response) => response.json())
        .then((json) => (json.response == 'valid') ? setMessage('Account Created') : setMessage('Error Creating Account'))
        .catch((error) => console.log(error))

      }

    return (

      <View style={styles.container}>

        <View>
        <ImageBackground source={require('../../../Assets/Images/createAccountScreen.jpg')} style={styles.backgroundImage}>

        </ImageBackground>
        </View>

        <TouchableOpacity style={[styles.createButtonContainer, styles.createAccountButton]} onPress={()=> createUser()}>
          <Text style={styles.createAccountText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.termsButtonContainer, styles.termsButton]} onPress={()=> this.props.navigation.navigate(routes.termsAndConditions)} >
          <Text style={styles.termsText}>Terms and Conditions</Text>
        </TouchableOpacity>

        <View style={styles.userInputs}>
            <View style={styles.firstNameInput} >
            <TextInput
                style={styles.inputText}
                placeholder="First name"
                placeholderTextColor="#D3D3D3"
                onChangeText={text => setFirstName(text)}/>
            </View>

            <View style={styles.lastNameInput} >
            <TextInput
                style={styles.inputText}
                placeholder="Last name"
                placeholderTextColor="#D3D3D3"
                onChangeText={text => setLastName(text)}/>
            </View>

            <View style={styles.emailInput} >
            <TextInput
                style={styles.inputText}
                placeholder="Email"
                placeholderTextColor="#D3D3D3"
                onChangeText={text => setEmail(text)}/>
            </View>

            <View style={styles.usernameInput} >
            <TextInput
                style={styles.inputText}
                placeholder="Username"
                placeholderTextColor="#D3D3D3"
                onChangeText={text => setUsername(text)}/>
            </View>
            <View style={styles.passwordInput} >
            <TextInput
                style={styles.inputText}
                placeholder="Password"
                placeholderTextColor="#D3D3D3"
                onChangeText={text => setPassword(text)}/>
            </View>

            <Text>{message}</Text>

            <Button title='Submit' onPress={() => createUser()}/>

            <View styles={styles.headerIconLeft}>
              <TouchableOpacity style={styles.backIcon} onPress={() => navigation.navigate('Splash')}>
              <IonIcon name={'chevron-back-outline'} size={35} color={'white'}  />
              </TouchableOpacity>
            </View>

        </View>

      </View>

    );
  }

 export default CreateAccountScreen;

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
  termsButtonContainer: {
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:210,
    borderRadius:30,
  },
  termsButton: {
    backgroundColor: "white",
    position: 'absolute',
    top: 750,
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5
  },
  createButtonContainer: {
    height:48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:245,
    borderRadius:30,
  },
  createAccountButton: {
    backgroundColor: '#EFC102',
    position: 'absolute',
    top: 818,
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5
  },
  termsText: {
    fontSize: 15,
    color: '#5D41BC',

  },
  createAccountText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  firstNameInput:{
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: -170,
    borderRadius: 30,
    justifyContent:"center",
    padding:10
  },
  inputText:{
    height:50,
    fontWeight: 'bold',
    fontSize: 15,
  },
  userInputs: {
    position: "absolute",

  },
  lastNameInput: {
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: -120,
    borderRadius: 30,
    justifyContent:"center",
    padding:10
  },
  emailInput: {
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: -35,
    borderRadius: 30,
    justifyContent:"center",
    padding:10
  },
  usernameInput: {
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: 50,
    borderRadius: 30,
    justifyContent:"center",
    padding:10
  },
  passwordInput: {
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: 100,
    borderRadius: 30,
    justifyContent:"center",
    padding:10
  },
  zipCodeInput: {
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: 185,
    borderRadius: 30,
    justifyContent:"center",
    padding:10
  },
  headerIconLeft: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backIcon: {
    position: 'absolute',
    marginVertical: -500,
    left: 10
  },
});
