import React, { Component } from 'react';
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
import { routes } from '../../../services';

export default class AboutTrevi extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }
  render() {
    return (
      
      <View style={styles.container}>

        <View>
          
        <ImageBackground source={require('../../../Assets/Images/AboutTrevi.jpg')} style={styles.backgroundImage}>
                    {this.props.children}     

          <View styles={styles.headerIconRight}> 
            <TouchableOpacity style={styles.treviIcon} onPress={() => this.props.navigation.navigate(routes.trending)}>
              <Image source={require('../../../Assets/Images/TreviLogo.jpg')} style={{ width: totalSize(4), height: totalSize(4), }}/>
            </TouchableOpacity>
          </View>
          
          <View styles={styles.headerIconLeft}> 
            <TouchableOpacity style={styles.wishlistIcon} onPress={() => this.props.navigation.navigate(routes.profile)}>
              <MCIcon name={'star-outline'} size={35} color={'white'}  />
            </TouchableOpacity> 
          </View>


        </ImageBackground>
        </View>
        
      </View>
      
    );
  }
}

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
    top: 818
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
    top: -150,
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
    top: -15,
    borderRadius: 20,
    justifyContent:"center",
    padding:10 
  },
  minimumInput: {
    width: 130,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    borderRadius: 30,
    justifyContent:"center",
    padding:10 
  },
  maximumInput: {
    width: 130,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    borderRadius: 30,
    justifyContent:"center",
    padding:10 
  },
  minimumMaximumPosition: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width(6.5),
    top: 90,
    
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
  treviIcon: {
    flexDirection: 'row',
    position: 'absolute',
    marginVertical: 60,
    right: 10
},
wishlistIcon: {
  flexDirection: 'row',
  position: 'absolute',
  marginVertical: 60,
  left: 10
},
  headerIconLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
},
headerIconRight: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
},
});

                                            