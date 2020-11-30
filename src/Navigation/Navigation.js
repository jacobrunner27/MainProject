import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, CreateAccountScreen, LoginScreen } from '../Screens/MainFlow/Login';
import { EditProfile, Profile, AboutTrevi } from '../Screens/MainFlow/Profile';
import { Grant1, Grant2, GrantUpload, MyGrantlist } from '../Screens/MainFlow/Grants';
import { Trending, TrendingSimple } from '../Screens/MainFlow/Trending';
import { OffersSimple } from '../Screens/MainFlow/Offers';
import { WishlistSimple, PostWish } from '../Screens/MainFlow/Wish';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name='Splash'
                component={SplashScreen}
            />

            <Stack.Screen
                name='CreateAccount'
                component={CreateAccountScreen}
            />

            <Stack.Screen
                name='Login'
                component={LoginScreen}
            />

            <Stack.Screen
                name='Trending'
                component={Trending}
            />

            <Stack.Screen
                name='Grantlist'
                component={MyGrantlist}
            />

            <Stack.Screen
                name='Grant1'
                component={Grant1}
            />

            <Stack.Screen
                name='Grant2'
                component={Grant2}
            />

            <Stack.Screen
                name='GrantUpload'
                component={GrantUpload}
            />

            <Stack.Screen
                name='Profile'
                component={Profile}
            />

            <Stack.Screen
                name='TrendingSimple'
                component={TrendingSimple}
            />

            <Stack.Screen
                name='OffersSimple'
                component={OffersSimple}
            />

            <Stack.Screen
                name='WishlistSimple'
                component={WishlistSimple}
            />

            <Stack.Screen
                name='PostWish'
                component={PostWish}
            />

        </Stack.Navigator>
    );
};

export default Navigation;
