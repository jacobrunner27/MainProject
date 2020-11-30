import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import { Navigation } from './src/Navigation';
import Home from './src/Screens/MainFlow/Trending/Trending'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    return (
        <NavigationContainer>
            <View style={{ flex: 1 }}>
               <StatusBar translucent backgroundColor={"transparent"} barStyle={"light-content"}/>
               <Navigation/>
            </View>
        </NavigationContainer>
    )
}

export default App;
