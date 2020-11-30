import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Slider, TextInput, ScrollView, TouchableOpacity, FlatList, Image, Dimensions, ImageBackground, AsyncStorage, Button, ActivityIndicator} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Carousel from 'react-native-snap-carousel';
import { Icon } from 'react-native-elements';
import image1 from '../../../Assets/Images/image1.jpg'
import image2 from '../../../Assets/Images/image2.jpg'
import Swipeout from 'react-native-swipeout';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { routes } from '../../../services';

const Colors = {
    purple: '#651a93',
    orange: '#f9c400',
    whisper: '#f0edf4',
    white: '#ffffff',
    steel: '#cccccc',
    black: '#000000',
    gray: 'gray',
    transparent: 'transparent'
}

const WishlistSimple = ({navigation}) => {

    const [token, setToken] = useState(null);
    const [wishes, setWishes] = useState([]);
    const [loading, setLoading] = useState(true);

    const displayData = async () => {
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

            await fetch('http://trevi-server.us-west-2.elasticbeanstalk.com/display-wishlist/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + tokenData
                }
            }).then((response) => response.json())
              .then((json) => setWishes(json))
              .finally(() => setLoading(false))
        }
        catch (error)
        {
            console.log(error);
        }
    }

    useEffect(() => {
        async function run()
        {
            await displayData();
        }
        run();
    }, []);

        return (
            <View style={styles.container}>

            <Button title='Post Wish' onPress={() => navigation.navigate('PostWish')}/>

            {loading ? <ActivityIndicator/> : (
                <View>
                    <FlatList
                        data={wishes}
                        keyExtractor={({wish_id}, index) => wish_id.toString()}
                        renderItem={({item}) => (
                            <View>
                                <Text>{item.category}</Text>
                                <Text>{item.title}</Text>
                                <Text>{item.condition}</Text>
                                <Text>{item.min_price}</Text>
                                <Text>{item.max_price}</Text>
                            </View>
                        )}/>
                </View>
                )}

            </View>
        );
};

export default WishlistSimple;

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
    productTitle: {
        fontSize: totalSize(1.5),
        fontWeight: 'bold',
        color: Colors.purple
    },
    productPrice: {
        fontSize: totalSize(1.25),
        color: Colors.steel,
        textAlign: 'right'
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
        borderWidth: 2.5,
        borderColor: Colors.purple,
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
    treviIcon: {
        flexDirection: 'row',
        position: 'absolute',
        marginVertical: 60,
        left: 15

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
