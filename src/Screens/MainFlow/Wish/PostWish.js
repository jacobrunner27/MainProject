import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Slider, TextInput, ScrollView, TouchableOpacity, ImageBackground, Dimensions, Image, AsyncStorage, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Carousel from 'react-native-snap-carousel';
import { Icon } from 'react-native-elements';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
//import SnapSlider from 'react-native-snap-slider'
import MapView from 'react-native-maps';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Colors = {
    purple: '#651a93',
    orange: '#f9c400',
    whisper: '#f0edf4',
    white: '#ffffff',
    steel: '#cccccc',
    black: '#000000'
}


const PostWish = ({navigation}) => {

    const [token, setToken] = useState(null);
    const [category, setCategory] = useState('book');
    const [title, setTitle] = useState(null);
    const [condition, setCondition] = useState(null);
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [message, setMessage] = useState('');

    const postWish = async () => {
        try
        {
            let tokenData = null;

            if (!token)
            {
                const getToken = await AsyncStorage.getItem('token');
                setToken(getToken);
                tokenData = getToken;
            }
            else
            {
                tokenData = token;
            }

            await fetch('http://trevi-server.us-west-2.elasticbeanstalk.com/save-wish/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + tokenData
                },
                body: JSON.stringify({
                    category: category,
                    title: title,
                    condition: condition,
                    min_price: minPrice,
                    max_price: maxPrice
                })
            }).then((response) => response.json())
              .then((json) => (json.response == 'valid') ? navigation.navigate('WishlistSimple') : setMessage('Error posting wish'));
        }
        catch (error)
        {
            console.log(error);
        }
    };
        return (
            <View style={styles.container}>

                <TextInput placeholder='Wish Category' onChangeText={text => setCategory(text)}/>
                <TextInput placeholder='Wish Title' onChangeText={text => setTitle(text)}/>
                <TextInput placeholder='Condition' onChangeText={text => setCondition(text)}/>
                <TextInput placeholder='Minimum Price' onChangeText={text => setMinPrice(text)}/>
                <TextInput placeholder='Maximum Price' onChangeText={text => setMaxPrice(text)}/>
                <Button title='Submit' onPress={() => postWish()}/>

                <Text>{message}</Text>

            </View>
        );
};

export default PostWish;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.whisper
    },
    compContainer: {
        marginHorizontal: width(5),
        marginVertical: height(2.5)
    },
    rowCompContainer: {
        marginHorizontal: width(5),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: height(2.5)
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shadow: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: Colors.black,
        shadowOpacity: 0.25,
        elevation: 5
    },
    lineHorizontal: {
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.white,
        marginVertical: height(2.5)
    },
    buttonText: {
        fontSize: totalSize(2.5),
        fontWeight: 'bold',
        color: Colors.white
    },
    title: {
        fontSize: totalSize(2),
        fontWeight: 'bold',
        color: Colors.purple
    },
    detail: {
        fontSize: totalSize(1.5),
        fontWeight: 'normal',
        color: Colors.purple
    },
    SelectedItem: {
        fontSize: totalSize(1.6),
        fontWeight: '600',
        color: Colors.purple
    },
    categorySlideInactive: {
        height: totalSize(6),
        width: totalSize(6),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        alignSelf: 'center',
    },
    categorySlideActive: {
        height: totalSize(6),
        width: totalSize(6),
        borderWidth: 2,
        borderColor: Colors.orange,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        alignSelf: 'center',
    },
    headerMainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height:totalSize(12),
    },
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: totalSize(14),
        alignItems: 'center',
        shadowOffset: { width: 3, height: 6 },
        shadowColor: Colors.black,
        shadowOpacity: 0.16,
        elevation: 5
    },
    profileIcon: {
        flexDirection: 'row',
        position: 'absolute',
        marginVertical: 60,
        left: 15
    },
    wishlistIcon: {
        flexDirection: 'row',
        position: 'absolute',
        marginVertical: 60,
        right: 10
    },
    textCenter: {
        textAlign: 'center'
    },
    snapsliderContainer: {
        marginHorizontal: width(5)
    },
    snapslider: {
        // backgroundColor:'red'
    },
    snapsliderItemWrapper: {
        // backgroundColor:'red'
    },
    snapsliderItem: {
        color: 'red'
    }
})
