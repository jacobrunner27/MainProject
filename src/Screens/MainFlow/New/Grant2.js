import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Slider, TextInput, ScrollView, TouchableOpacity, Dimensions,ImageBackground,Image, AsyncStorage } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Carousel from 'react-native-snap-carousel';
import { Icon } from 'react-native-elements';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
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


const Grant2 = ({navigation, route}) => {

        const [token, setToken] = useState('');

        const getToken = async () => {
                try
                {
                    const tokenData = await AsyncStorage.getItem('token');
                    setToken(tokenData);
                }
                catch (error)
                {
                    console.log(error);
                }
            }

            const [carousel, setCarousel] = useState(null);

            const [categories, setCategories] = useState([
                {
                    title: 'Book',
                    iconName: 'book-open-page-variant',
                    iconType: 'material-community',
                },
                {
                    title: 'Car',
                    iconName: 'car-side',
                    iconType: 'material-community',
                },
                {
                    title: 'Tools',
                    iconName: 'toolbox',
                    iconType: 'material-community',
                },
                {
                    title: 'Technology',
                    iconName: 'lightbulb-on',
                    iconType: 'material-community',
                },
                {
                    title: 'Indoor',
                    iconName: 'home',
                    iconType: 'material-community',
                },
                {
                    title: 'All',
                    iconName: 'check-all',
                    iconType: 'material-community',
                },
                {
                    title: 'Clothes',
                    iconName: 'tshirt-crew',
                    iconType: 'material-community',
                },
            ])

            const [selectedCategory, setSelectedCategory] = useState('Book');
            const [itemCondition, setItemCondition] = useState('');
            const [selectedIndex, setIndex] = useState(0);
            const [multiOptions, setMultiOptions] = useState([2, 3]);
            const [message, setMessage] = useState('');

            const [sliderOptions, setOptions] = useState(2);

            const [conditions, setConditions] = useState([
                { value: 0, label: 'Poor' },
                { value: 1, label: 'Fair' },
                { value: 2, label: 'Good' },
                { value: 3, label: 'Great' },
                { value: 4, label: 'New' },
            ])

            const postGrant = async () => {
                await fetch('http://192.168.0.8:8000/post-item/', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Token ' + token
                    },
                    body: JSON.stringify({
                        category: selectedCategory,
                        title: route.params.title,
                        description: route.params.description,
                        price: route.params.price,
                        condition: itemCondition
                    })
                }).then((response) => response.json())
                  .then((json) => {
                      console.log(selectedCategory);
                      console.log(route.params.title);
                      console.log(route.params.description);
                      console.log(route.params.price);
                      console.log(itemCondition);
                      if (json.response == 'valid')
                      {
                          setMessage('Item posted');
                      }
                      else if (json.response == 'invalid')
                      {
                          setMessage('Error posting item');
                      }
                  })
            }

    const renderScale = () => {
        return (
            <>
                {
                    sliderOptions.map((item, key) => {
                        return (
                            <Text style={{ fontSize: totalSize(1.7), color: '#585AD6' }}>{item.label}</Text>
                        )
                    })
                }
            </>
        )
    }

    const _renderItem = ({ item, index }) => {

        return (
            <View style={{ padding: 5 }}>
                <View style={index == selectedIndex + 3 ? [styles.categorySlideActive, styles.shadow] :  [styles.categorySlideInactive, styles.shadow]}>
                    <Icon
                        name={item.iconName}
                        type={item.iconType}
                        color={index === selectedIndex + 3 ? Colors.orange : Colors.steel}
                        size={totalSize(2.5)}
                    />
                </View>
            </View>
        );
    }
        return (
            <View style={styles.mainContainer} onLayout={() => getToken()}>
                <View style={styles.headerMainContainer}>
                     <ImageBackground source={require('./src/Assets/Images/grantHeader.jpg')} style={styles.backgroundImage}>

                        <TouchableOpacity style={styles.treviIcon} onPress={() => navigation.navigate('Trending', {})}>
                        <Image source={require('./src/Assets/Images/littleTreviLogo.png')} />
                        </TouchableOpacity>

                        <Text style={styles.grantText}>
                            Grant
                        </Text>

                        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.navigate('Grant3', {})}>
                        <IonIcon name={'chevron-back-outline'} size={35} color={'white'}  />
                        </TouchableOpacity>

                     </ImageBackground>

                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <View style={styles.compContainer}>
                            <Text style={styles.title}>Category</Text>
                            <Text style={styles.detail}>Which category best describes the item?</Text>
                        </View>
                        <View style={{ justifyContent: 'center', backgroundColor: 'transparent' }}>
                            <View style={[styles.lineHorizontal, { position: 'absolute', right: 0, left: 0, borderBottomColor: Colors.orange, borderBottomWidth: 2 }]}></View>
                            <Carousel
                                ref={(c) => setCarousel(c)}
                                data={categories}
                                layout={'default'}
                                enableSnap={true}
                                loop={true}
                                renderItem={_renderItem}
                                sliderWidth={width(100)}
                                sliderHeight={height(20)}
                                itemWidth={width(15)}
                                itemHeight={height(15)}
                                inactiveSlideOpacity={1}
                                inactiveSlideScale={0.8}
                                onSnapToItem={(index) => {
                                    setIndex(index);
                                    setSelectedCategory(categories[index].title);
                                    }
                                }
                            />
                        </View>
                        <Text style={[styles.SelectedItem, styles.textCenter, { marginTop: height(1) }]}>{categories[selectedIndex].title}</Text>
                    </View>

                    <View style={[styles.lineHorizontal]}></View>

                    <View>
                        <View style={styles.compContainer}>
                            <Text style={styles.title}>Condition</Text>
                            <Text style={styles.detail}>Tap the scale to specify the condition you want the item in.</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Slider
                                style={{width: 300, height: 40}}
                                maximumValue={4}
                                step={1}
                                onSlidingComplete={(value) => {
                                        setOptions(value);
                                        setItemCondition(conditions[value].label)
                                    }
                                }/>
                        <View style={[styles.lineHorizontal]}></View>
                        </View>
                        <View style={[styles.rowCompContainer, { marginTop: 0 }]}>
                        </View>
                    </View>

                    <View style={[styles.lineHorizontal]}></View>

                    <View style={styles.pictureTextPosition}> 
                        <Text style={styles.pictureTextBold}>Pictures</Text>
                        <Text style={styles.pictureText}>Provide pictures of what you want to sell</Text>
                    </View>

                    <View style={styles.photoButtonPosition}> 
                        <TouchableOpacity style={[styles.takePhotoButtonContainer, styles.takePhotoButton]} onPress={()=> this.props.navigation.navigate(routes.loginScreen)}>
                            <Text style={styles.takePhotoText}>Take Photo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.selectPhotoButtonContainer, styles.selectPhotoButton]} onPress={()=> this.props.navigation.navigate(routes.loginScreen)}>
                            <Text style={styles.selectPhotoText}>Select Photo</Text>
                        </TouchableOpacity>
                    </View>

                    
                </ScrollView>

                <View>
                    <Text>{message}</Text>
                </View>
                <View style={[styles.bottomBox, styles.bottomBoxPosition]}>
                        <TouchableOpacity style={styles.submitButton} onPress={() => postGrant()}>
                            <Text style={[styles.buttonText]}>Submit</Text>
                        </TouchableOpacity>
                    </View>

            </View>
        );
    }

export default Grant2;

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
        color: Colors.blue
    },
    detail: {
        fontSize: totalSize(1.5),
        fontWeight: 'normal',
        color: Colors.blue
    },
    SelectedItem: {
        fontSize: totalSize(1.6),
        fontWeight: '600',
        color: Colors.blue
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
    treviIcon: {
        flexDirection: 'row',
        position: 'absolute',
        top: 75,
        right: 18
    },
    backIcon: {
        position: 'absolute',
        marginVertical: 70,
        left: 10,
      },
      grantText: {
        fontSize: 34,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        top: 65,
    },
    submitButton: {
        shadowOffset: { width: 3, height: 6 },
        shadowColor: Colors.black,
        shadowOpacity: 0.16,
        elevation: 5,
        backgroundColor: Colors.orange,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 100
    },
    bottomBox: {
        backgroundColor: 'white', 
        paddingVertical: height(2.5), 
        alignItems: 'center' , 
        shadowOffset: { width: 3, height: 6 },
        shadowColor: Colors.black,
        shadowOpacity: 0.16,
        elevation: 5
    },
    bottomBoxPosition: {
        width: Dimensions.get('window').width,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    takePhotoButtonContainer: {
        height:38,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:150,
        borderRadius:30,
      },
      takePhotoText: {
        fontSize: 16,
        color: '#585AD6',
        fontWeight: 'bold'
      },
      selectPhotoButton: {
        backgroundColor: "white",
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'black',
        shadowOpacity: 0.25,
        elevation: 5
      },
      selectPhotoButtonContainer: {
        height:38,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:150,
        borderRadius:30,
      },
      selectPhotoText: {
        fontSize: 16,
        color: '#585AD6',
        fontWeight: 'bold'
      },
      takePhotoButton: {
        backgroundColor: "white",
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'black',
        shadowOpacity: 0.25,
        elevation: 5
      },
      photoButtonPosition: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: height(12)
      },
      pictureTextPosition: {
        position: 'absolute',
        top: 520,
        left: 20
      },
      pictureText: {
        color: '#585AD6',
        fontSize: 16
      },
      pictureTextBold: {
        color: '#585AD6',
        fontSize: 20,
        fontWeight: 'bold'
      }
})
