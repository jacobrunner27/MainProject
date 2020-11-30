import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Slider, TextInput, ScrollView, TouchableOpacity, ImageBackground, Dimensions, Image, AsyncStorage } from 'react-native';
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


const Wish = ({navigation}) => {
    /*

    const [token, setToken] = useState(null);
    const [category, setCategory] = useState(null);
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

            await fetch('http://192.168.0.8:8000/save-wish/', {
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
              .then((json) => (json.response == 'valid') ? setMessage('Wish posted') : setMessage('Error posting wish'));
        }
        catch (error)
        {
            console.log(error);
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            categories_list: [
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
            ],
            selectedCategoryIndex: 0,
            sliderOptions: [
                { value: 0, label: 'Poor' },
                { value: 1, label: 'Fair' },
                { value: 2, label: 'Good' },
                { value: 3, label: 'Great' },
                { value: 4, label: 'New' },
            ],
            conditions: [
                { value: 0, label: 'Poor' },
                { value: 1, label: 'Fair' },
                { value: 2, label: 'Good' },
                { value: 3, label: 'Great' },
                { value: 4, label: 'New' },
            ],
            initial_region: {
                latitude: -29.1482491,
                longitude: -51.1559028,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            mapRegion: null,
            currentLatitude: null,
            currentLongitude: null,
            LATLNG: {
                latitude: -35,
                longitude: 120
            },
            multiSliderValues: [2, 3],
        };
        // this.slidingComplete = this.slidingComplete.bind(this);
    }
    slidingComplete = (itemSelected) => {
        //console.warn(itemSelected);
        //console.warn("item selected " + this.refs.slider.state.item);
        //console.warn("item selected(from callback)" + itemSelected);
        //  console.warn("value " + this.sliderOptions[this.refs.slider.state.item].value);
    }
    onRegionChangeComplete = () => {

    }
    multiSliderValuesChange = values => this.setState({ multiSliderValues: values });
    LineHorizontal = ({ style }) => {
        return (
            <View style={[styles.lineHorizontal, style]}></View>
        )
    }
    renderScale = () => {
        return (
            <>
                {
                    this.state.sliderOptions.map((item, key) => {
                        return (
                            <Text style={{ fontSize: totalSize(1.7), color: '#651a93' }}>{item.label}</Text>
                        )
                    })
                }
            </>
        )
    }
    _renderItem = ({ item, index }) => {
        return (
            <View style={{ padding: 5 }}>
                <View style={index === this.state.selectedCategoryIndex + 3 ? [styles.categorySlideActive, styles.shadow] : [styles.categorySlideInactive, styles.shadow]}>
                    <Icon
                        name={item.iconName}
                        type={item.iconType}
                        color={index === this.state.selectedCategoryIndex + 3 ? Colors.orange : Colors.steel}
                        size={totalSize(2.5)}
                    />
                </View>
            </View>
        );
    }
    render() {
        const { categories_list, selectedCategoryIndex, sliderOptions, initial_region, multiSliderValues } = this.state
        return (
            <View style={styles.mainContainer}>
                <View style={styles.headerMainContainer}>
                     <ImageBackground source={require('../../../Assets/Images/WishlistHeader.jpg')} style={styles.backgroundImage}>
                        {this.props.children}

                        <TouchableOpacity onPress={()=> this.props.navigation.navigate(routes.wish1)} style={styles.profileIcon}>
                        <IonIcon name={'cheveron-back-outline'} size={35} color={'white'} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.wishlistIcon} onPress={() => this.props.navigation.navigate(routes.trending)}>
                        <Image source={require('../../../Assets/Images/TreviLogo.jpg')}/>
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
                            <this.LineHorizontal style={{ position: 'absolute', right: 0, left: 0, borderBottomColor: Colors.orange, borderBottomWidth: 2 }} />
                            <Carousel
                                ref={(c) => { this._carousel = c; }}
                                data={categories_list}
                                layout={'default'}
                                layoutCardOffset={`10`}
                                activeSlideOffset={10}
                                enableSnap={true}
                                renderItem={this._renderItem}
                                sliderWidth={width(100)}
                                itemWidth={width(15)}
                                loop={true}
                                inactiveSlideOpacity={1}
                                inactiveSlideScale={0.8}
                                onSnapToItem={(index) => this.setState({ selectedCategoryIndex: index })}
                            />
                        </View>
                        <Text style={[styles.SelectedItem, styles.textCenter, { marginTop: height(1) }]}>{categories_list[selectedCategoryIndex].title}</Text>
                    </View>
                    <this.LineHorizontal />
                    {/* <View>
                        <View style={styles.compContainer}>
                            <Text style={styles.title}>Condition</Text>
                            <Text style={styles.detail}>Tap the scale to specify the condition you want the item in.</Text>
                        </View>
                        <View>
                            <SnapSlider
                                ref="slider"
                                containerStyle={styles.snapsliderContainer}
                                style={styles.snapslider}
                                itemWrapperStyle={styles.snapsliderItemWrapper}
                                itemStyle={styles.SelectedItem}
                                items={sliderOptions}
                                labelPosition="bottom"
                                minimumTrackTintColor={Colors.orange}
                                maximumTrackTintColor={Colors.white}
                                thumbTintColor={Colors.orange}
                                defaultItem={1}
                                onSlidingComplete={this.slidingComplete}
                            />

                        </View>
                    </View>
                    <this.LineHorizontal /> }
                    <View>
                        <View style={styles.compContainer}>
                            <Text style={styles.title}>Condition</Text>
                            <Text style={styles.detail}>Tap the scale to specify the condition you want the item in.</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <MultiSlider
                                trackStyle={{ backgroundColor: '#FFFFFF' }}
                                selectedStyle={{ backgroundColor: "#f9c400" }}
                                values={[multiSliderValues[0], multiSliderValues[1]]}
                                sliderLength={width(85)}
                                onValuesChange={this.multiSliderValuesChange}
                                min={1}
                                max={5}
                                markerStyle={{ backgroundColor: '#f9c400' }}
                                step={1}
                                allowOverlap={false}
                                snapped={true}
                            />
                        </View>
                        <View style={[styles.rowCompContainer, { marginTop: 0 }]}>
                            {this.renderScale()}
                        </View>
                    </View>
                    <this.LineHorizontal />
                    <View>
                        <View style={styles.compContainer}>
                            <Text style={styles.title}>Location</Text>
                            <Text style={styles.detail}>Enter your zip code and a maximum distance away from you to search through.</Text>
                        </View>
                        <View style={[styles.rowCompContainer, {}]}>
                            <View style={{ flex: 6, borderRadius: 10, borderWidth: 5, borderColor: Colors.white }}>
                                <MapView
                                    style={{ height: height(25) }}
                                    region={initial_region}
                                >
                                    <MapView.Circle
                                        center={{
                                            latitude: -29.1471337,
                                            longitude: -51.148951,
                                        }}
                                        radius={4000}
                                        strokeWidth={0}
                                        strokeColor={Colors.orange}
                                        fillColor={Colors.orange + '80'}
                                    />
                                </MapView>
                            </View>
                            <View style={{ flex: 4, backgroundColor: 'transparent' }}>
                                <TextInput
                                    placeholder="zip code"
                                    style={{ backgroundColor: Colors.white, borderRadius: 100, marginHorizontal: width(5), textAlign: 'center', fontSize: totalSize(1.75) }}
                                />
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={[styles.SelectedItem, styles.textCenter, { marginTop: height(2) }]}>Max. Distance</Text>
                                    <View style={[styles.rowView, { marginTop: height(1.5) }]}>
                                        <TextInput
                                            placeholder="#"
                                            style={{ backgroundColor: Colors.white, borderRadius: 100, textAlign: 'center', fontSize: totalSize(1.75), paddingHorizontal: width(5), marginRight: width(2.5) }}
                                        />
                                        <Text style={[styles.SelectedItem, styles.textCenter]}>miles</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[{ backgroundColor: Colors.white, paddingVertical: height(2.5), alignItems: 'center' }, styles.shadow]}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate(routes.offersTinderList)} style={{ backgroundColor: Colors.orange, paddingHorizontal: 30, paddingVertical: 10, borderRadius: 100 }}>
                            <Text style={[styles.buttonText]}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
    */
}

export default Wish;

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
