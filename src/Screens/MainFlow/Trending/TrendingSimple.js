import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Slider, TextInput, ScrollView, TouchableOpacity, FlatList, Image, Dimensions, ImageBackground, ActivityIndicator, AsyncStorage, Button } from 'react-native';
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


const TrendingSimple = ({navigation}) => {

        const [carousel, setCarousel] = useState(null);
        const [token, setToken] = useState(null);
        const [grants, setGrants] = useState(null);
        const [loading, setLoading] = useState(true);
        const [display, setDisplay] = useState(null);

        const loadData = async () => {

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

                await fetch('http://trevi-server.us-west-2.elasticbeanstalk.com/display-trending/', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Token ' + tokenData
                        }
                      })
                      .then((response) => response.json())
                      .then((json) => {
                          loadImages(json, tokenData);
                      })
                      .catch((error) => console.log(error));
            }
            catch (error)
            {
                console.log(error);
            }
        };

        const loadImages = async (grantData, tokenData) => {
            let displayData = null;

            let imageIndex = 0;

            while (imageIndex < grantData.length)
            {
                let tempGrant = grantData[imageIndex];
                let grant_id = tempGrant.grant_id;
                let imageData = await fetch('http://trevi-server.us-west-2.elasticbeanstalk.com/grant-images/', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Token ' + tokenData
                        },
                        body: JSON.stringify({
                            id_value: grant_id
                        })
                      })
                      .then((response) => response.json())
                      .then((json) => {return json.image.toString()})
                      .catch((error) => console.log(error));

                    if (imageData)
                    {
                        tempGrant.image = 'data:image/jpg;base64,' + imageData;
                    }
                    else
                    {
                        tempGrant.image = 'none';
                    }

                    imageIndex += 1;
                }
                setGrants(grantData);
            };

            const displayData = (grantData) => {
                if (grantData.length == 0)
                {
                    return (
                        <View>
                            <Text>No grants</Text>
                        </View>
                    )
                }
                else
                {
                    return (
                        <View style={styles.container}>
                            <FlatList
                                data={grantData}
                                keyExtractor={({grant_id}, index) => grant_id.toString()}
                                renderItem={({item}) => (
                                    <View>
                                        <Text>{item.title}</Text>
                                        <Text>{item.description}</Text>
                                        <Text>{item.condition}</Text>
                                        <Text>{item.price}</Text>

                                        <Image
                                        source={{uri: item.image}}
                                        style={styles.image}/>
                                    </View>
                                )}/>
                        </View>
                    )
                }
            }

        useEffect(() => {
            if (grants == null)
            {
                loadData();
            }
            else
            {
                setLoading(false);
            }
        }, [grants])

        return (
            <View style={styles.container}>

                <Button title='To Grants'
                        onPress={() => navigation.navigate('Grantlist')}/>

                <Button title='To Offers'
                            onPress={() => navigation.navigate('OffersSimple')}/>

                <Button title='To Wishes'
                        onPress={() => navigation.navigate('WishlistSimple')}/>

                <Button title='To Profile'
                        onPress={() => navigation.navigate('Profile')}/>

                {loading ? <ActivityIndicator/> : displayData(grants)}

                </View>
            );
    };

export default TrendingSimple;

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    },
    container: {
        flex: 1
    },
    image: {
        width: 100,
        height: 100
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
