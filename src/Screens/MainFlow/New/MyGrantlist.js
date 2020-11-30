import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Slider, TextInput, ScrollView, TouchableOpacity, FlatList, Image, Dimensions, ImageBackground, ActivityIndicator, AsyncStorage } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Carousel from 'react-native-snap-carousel';
import { Icon } from 'react-native-elements';
import image1 from '../../../Assets/Images/image1.jpg'
import image2 from '../../../Assets/Images/image2.jpg'
import Swipeout from 'react-native-swipeout';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const Colors = {
    purple: '#651a93',
    orange: '#f9c400',
    whisper: '#f0edf4',
    white: '#ffffff',
    steel: '#cccccc',
    black: '#000000',
    gray: 'gray',
    blue: '#585AD6',
    transparent: 'transparent'
}


const MyGrantlist = ({navigation}) => {

        const [carousel, setCarousel] = useState('');
        const [token, setToken] = useState(null);
        const [grants, setGrants] = useState([]);
        const [loading, setLoading] = useState(true);

        const getData = async () => {

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

                await fetch('http://192.168.0.8:8000/display-posted/', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Token ' + tokenData
                        }
                      })
                      .then((response) => response.json())
                      .then((json) => setGrants(json))
                      .finally(() => setLoading(false))
            }
            catch (error)
            {
                console.log(error);
            }
        }

        useEffect(() => getData(), [true]);

        return (
            <View style={styles.mainContainer}>

                    <View style={styles.headerMainContainer}>
                        <ImageBackground source={require('../../../Assets/Images/grantHeader.jpg')} style={styles.backgroundImage}>

                            <TouchableOpacity style={styles.wishlistIcon}>
                                <IonIcon name={'reader-outline'} size={35} color={Colors.white}/>
                            </TouchableOpacity>

                            <Text style={styles.myGrantlistText}>
                                My Grantlist
                            </Text>

                            <TouchableOpacity style={styles.treviIcon} onPress={() => navigation.navigate('Trending', {})}>
                                <Image source={require('../../../Assets/Images/littleTreviLogo.png')} />
                            </TouchableOpacity>

                         </ImageBackground>

                    </View>


                <TouchableOpacity onPress={() => navigation.navigate('Grant1', {})} style={{ position: 'absolute', bottom: -totalSize(7.5), left: -totalSize(7.5), height: totalSize(15), width: totalSize(15), backgroundColor: Colors.blue, borderRadius: 100, alignItems: 'flex-end', padding: totalSize(2.5) }}>
                    <Icon
                        name="plus"
                        type="font-awesome"
                        color={Colors.white}
                        size={totalSize(4)}/>
                </TouchableOpacity>



                {loading ? <ActivityIndicator/> : (
                        <FlatList
                            data={grants}
                            keyExtractor={({item_id}, index) => item_id.toString()}
                            renderItem={({item, index}) => (

                                <Swipeout
                                    backgroundColor={Colors.whisper}
                                    style={[{ marginRight: width(5), borderRadius: 25, marginLeft: 0, marginTop: index === 0 ? height(2) : 0, marginBottom: index === grants.length - 1 ? height(10) : height(2) }]}>
                                    <View style={[{ backgroundColor: Colors.white, borderRadius: 25, marginLeft: width(5) }]}>
                                        <View style={{ flexDirection: 'row', margin: 5 }}>
                                            <View style={{ flex: 3 }}>
                                                <Image
                                                    source={require('../../../Assets/Images/littleTreviLogo.png')}
                                                    style={{ height: index === 2 || index === 5 ? 150 : 100, width: null, borderRadius: 25 }}/>
                                            </View>
                                            <View style={{ flex: 7, padding: 10, backgroundColor: 'transparent', justifyContent: 'space-between' }}>
                                                <Text style={styles.productTitle}>{item.title}</Text>
                                                <Text style={styles.productTitle}>{item.description}</Text>
                                                <Text style={styles.productPrice}>{item.price}</Text>
                                                <Text style={styles.productTitle}>{item.condition}</Text>
                                                <Text style={styles.productTitle}>{item.category}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </Swipeout>
                                )}/>
                            )}
                    </View>
            );
    };

export default MyGrantlist;

const styles = StyleSheet.create({
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
        color: Colors.blue,
    },
    detail: {
        fontSize: totalSize(1.5),
        fontWeight: 'normal',
        color: Colors.blue,
    },
    productTitle: {
        fontSize: totalSize(1.5),
        fontWeight: 'bold',
        color: Colors.blue,
    },
    productPrice: {
        fontSize: totalSize(1.25),
        color: Colors.steel,
        textAlign: 'right'
    },
    SelectedItem: {
        fontSize: totalSize(1.6),
        fontWeight: '600',
        color: Colors.blue,
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
        borderColor: Colors.blue,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        alignSelf: 'center',
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
    },
    headerMainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: totalSize(12),
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
        top: 70,
        left: 18

    },
    myGrantlistText: {
        fontSize: 34,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        top: 62,
    }
});
