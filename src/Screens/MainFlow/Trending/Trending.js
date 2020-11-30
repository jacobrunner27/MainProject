import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Slider, TextInput, ScrollView, TouchableOpacity, FlatList, Image, findNodeHandle, Modal, Dimensions, ImageBackground } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Carousel from 'react-native-snap-carousel';
import { Icon } from 'react-native-elements';
import image1 from '../../../Assets/Images/image1.jpg'
import image2 from '../../../Assets/Images/image2.jpg'
import Swipeout from 'react-native-swipeout';
import BlurOverlay, { closeOverlay, openOverlay } from 'react-native-blur-overlay';
import { BlurView } from 'react-native-blur';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Colors = {
    primary: '#651a93',
    secondary: '#4E45D6',
    orange: '#f9c400',
    whisper: '#f0edf4',
    white: '#ffffff',
    steel: '#cccccc',
    black: '#000000',
    gray: 'gray',
    gray1: '#acb4be',
    transparent: 'transparent'
}


const Trending = ({navigation}) => {

    const [token, setToken] = useState(null);
    const [items, setItems] = useState(null);
    const [dataLoading, setDataLoading] = useState(true);

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

            await fetch('http://192.168.0.8:8000/display-trending/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + tokenData
                }
            }).then((response) => response.json())
              .then((json) => setItems(json))
              .finally(() => setDataLoading(false))
        }
        catch (error)
        {
            console.log(error);
        }
    }

    useEffect(() => displayData(), [true]);

            const [categories_list, set_categories_list] = useState([
                {
                    title: 'Book',
                    iconName: 'book-open-page-variant',
                    iconType: 'material-community',
                    notifications: null,
                    selected: false
                },
                {
                    title: 'Car',
                    iconName: 'car-side',
                    iconType: 'material-community',
                    notifications: null,
                    selected: false
                },
                {
                    title: 'Tools',
                    iconName: 'toolbox',
                    iconType: 'material-community',
                    notifications: 5,
                    selected: false
                },
                {
                    title: 'Technology',
                    iconName: 'lightbulb-on',
                    iconType: 'material-community',
                    notifications: 3,
                    selected: true
                },
                {
                    title: 'Indoor',
                    iconName: 'home',
                    iconType: 'material-community',
                    notifications: 3,
                    selected: false

                },
                {
                    title: 'Clothes',
                    iconName: 'tshirt-crew',
                    iconType: 'material-community',
                    notifications: 2,
                    selected: true
                },
            ]);

            const [selectedCategoryIndex, setCategoryIndex] = useState(0);

            const [products_list, set_products_list] = useState([
                {
                    image: image1,
                    title: 'iphone Wireless Charger',
                    price: '$40',
                    notifications: 2
                },
                {
                    image: image2,
                    title: 'Amazon Fire TV Stick',
                    price: '$45',
                    notifications: 5
                },
                {
                    image: image1,
                    title: 'MacBook Pro 13"',
                    price: '$900',
                    notifications: null
                },
                {
                    image: image2,
                    title: 'Xbox 360',
                    price: '$50',
                    notifications: null
                },
                {
                    image: image1,
                    title: 'Unlocked iphone 8 Plus',
                    price: '$500',
                    notifications: null
                },
                {
                    image: image1,
                    title: 'iphone Wireless Charger',
                    price: '$40',
                    notifications: 2
                },
                {
                    image: image2,
                    title: 'Amazon Fire TV Stick',
                    price: '$45',
                    notifications: null
                },
                {
                    image: image1,
                    title: 'MacBook Pro 13"',
                    price: '$900',
                    notifications: null
                },
                {
                    image: image2,
                    title: 'Xbox 360',
                    price: '$50',
                    notifications: 6
                },
                {
                    image: image1,
                    title: 'Unlocked iphone 8 Plus',
                    price: '$500',
                    notifications: null
                }]);

            const [blurViewRef, setBlurView] = useState(null);
            const [isFilterModalVisible, setFilterModal] = useState(false);
            const [loading, setLoading] = useState(false);

    load = () => this.setState({ loading: !this.state.loading });
    toggleFilterModal = () => this.setState({ isFilterModalVisible: !this.state.isFilterModalVisible });
    componentDidMount = () => { this.ViewLoaded() };

    LineHorizontal = ({ style }) => {
        return (
            <View style={[styles.lineHorizontal, style]}></View>
        )
    };

    buttonSmall = (props) => {
        const { text, onPress, buttonStyle, textStyle, iconName, iconType, iconSize, iconColor, iconStyle, tintColor } = props
        return (
            <TouchableOpacity onPress={onPress} style={[{ borderRadius: 100, paddingHorizontal: width(5), paddingVertical: height(1), backgroundColor: Colors.primary }, styles.shadow, buttonStyle]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {
                        iconName ?
                            <Icon
                                name={iconName ? iconName : "email-outline"}
                                type={iconType ? iconType : "material-community"}
                                size={iconSize ? iconSize : totalSize(3)}
                                color={tintColor ? tintColor : Colors.appTextColor6}
                                iconStyle={[{ marginRight: width(2.5) }, iconStyle]}

                            />
                            :
                            null
                    }
                    <Text style={[styles.buttonText, { color: tintColor ? tintColor : Colors.white }, textStyle]}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    modalInput = (props) => {
        const { placeholder, value, containerStyle } = props
        return (
            <View style={[styles.rowView, { backgroundColor: Colors.white, borderRadius: 100 }, containerStyle]}>
                <Icon
                    name="dollar"
                    type="foundation"
                    color={Colors.gray1}
                    iconStyle={{ marginHorizontal: width(2.5) }}
                />
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    style={{ height: height(5), flex: 1, }}
                />
            </View>
        )
    };

    iconWithText = (props) => {
        const { text, containerStyle, onPress, tintColor, iconName, iconType, iconSize, column, textStyle, reverseRow } = props
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={[{ flexDirection: column ? 'column' : reverseRow ? 'row-reverse' : 'row', alignItems: 'center', }, containerStyle]}>
                <Icon name={iconName ? iconName : 'email'} type={iconType ? iconType : 'material-community'} size={iconSize ? iconSize : totalSize(2.5)} color={tintColor ? tintColor : Colors.gray} />
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={[{ fontSize: totalSize(1), color: tintColor ? tintColor : Colors.gray, }, textStyle]}>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    categoryItem = ({ item, index }) => {
        return (
            <View style={{ padding: 5 }}>
                <View style={item.selected ? [styles.categorySlideActive, styles.shadow] : [styles.categorySlideInactive, styles.shadow]}>
                    <Icon
                        name={item.iconName}
                        type={item.iconType}
                        color={item.selected ? Colors.orange : Colors.steel}
                        size={totalSize(2.5)}
                    />
                    {/* {
                    item.notifications ?
                        <View style={[{ height: totalSize(2), width: totalSize(2), borderRadius: 100, backgroundColor: Colors.orange, position: 'absolute', top: -2.5, left: -2.5, alignItems: 'center', justifyContent: 'center' }]}>
                            <Text style={{ color: Colors.white, fontSize: totalSize(1.4) }}>{item.notifications}</Text>
                        </View>
                        :
                        null
                } */}
                </View>
            </View>
        );
    };

    renderProducts = ({ data, onPressDelete, onPressSold }) => {
        const swipeoutBtns = [
            {
                text: 'Delete',
                backgroundColor: Colors.orange,
                onPress: onPressDelete
            },
            {
                text: 'Mark Sold',
                backgroundColor: Colors.steel,
                onPress: onPressSold
            },

        ]
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    ref={ref => (this.timerFlatlistRef = ref)}
                    data={data}
                    numColumns={2}
                    renderItem={({ item, index }) => {

                        return (
                            <View style={{ width: width(100) / 2, marginBottom: height(1.5) }}>
                                <View style={[{ backgroundColor: Colors.white, borderRadius: 15, marginLeft: width(2), marginRight: width(2), }, styles.shadow]}>
                                    <View style={{ margin: 5 }}>
                                        <Image
                                            source={item.image}
                                            style={{ height: height(15), width: null, borderRadius: 15 }}/>
                                        <Text style={[styles.productTitle, { marginVertical: height(0.5) }]}>{item.title}</Text>
                                        <View style={[styles.rowView, { justifyContent: 'space-between' }]}>
                                            <View style={[{ flexDirection: 'row', alignItems: 'center', }]}>
                                                <Icon name={'map-marker'} type={'material-community'} size={totalSize(1.5)} color={Colors.gray} />
                                                <View style={{ marginHorizontal: 5 }}>
                                                    <Text style={[{ fontSize: totalSize(1.24), color: Colors.gray, },]}>3 mi</Text>
                                                </View>
                                            </View>
                                            <Text style={styles.productPrice}>{item.price}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                        />
                    </View>
                );
            };

    renderBlurChilds = () => {
        return (
            <View >
                <Text style={[styles.detail, styles.textWhite]}>Blured View</Text>
            </View>
        );
    }

    ViewLoaded = async () => {
        await this.setState({ blurViewRef: findNodeHandle(this.mapView) });
        console.log(this.state.blurViewRef)
    }

    onSelectCategory = (index) => {
        const { categories_list } = this.state
        categories_list[index].selected = !categories_list[index].selected
        this.load()
    }

    renderFilterView = () => {
        const { isFilterModalVisible } = this.state
        return (
            <Modal
                visible={isFilterModalVisible}
                transparent
                animationType="fade"
            >
                <View style={[{ flex: 1 }]}>
                    <BlurView
                        blurType="light"
                        blurAmount={5}
                        blurRadius={15}
                        downsampleFactor={5}
                        overlayColor={'rgba(255, 255, 255, .25)'}
                        viewRef={this.state.blurViewRef}
                        style={styles.placeItemBlur} />
                    <View style={[{ flex: 1, padding: totalSize(1), justifyContent: 'flex-end' }]}>
                        <Animatable.View animation="slideInUp" style={{ backgroundColor: Colors.gray1, borderRadius: 25, paddingTop: height(10) }}>
                            <View style={[{ position: 'absolute', top: -totalSize(5), alignSelf: 'center', height: totalSize(15), width: totalSize(15), borderRadius: 100, backgroundColor: Colors.gray1 }, styles.center]}>
                                <View style={[styles.center]}>
                                    <Icon
                                        name="ios-options"
                                        type="ionicon"
                                        size={totalSize(5)}
                                        color={Colors.orange}
                                    />
                                    <Text style={[styles.title, styles.textWhite]}>Filter</Text>
                                </View>
                            </View>
                            <View style={[styles.compContainer]}>
                                <Text style={[styles.modaldetail]}>Category:</Text>
                            </View>
                            <View style={[styles.rowCompContainer, { marginTop: 0, alignItems: 'flex-start' }]}>
                                <View style={[{ flex: 6 }]}>
                                    <View style={[styles.rowView, { justifyContent: 'space-between', flexWrap: 'wrap' }]}>
                                        {
                                            this.state.categories_list.map((item, key) => {
                                                return (
                                                    // <>
                                                    //     {
                                                    //         this.categoryItem({
                                                    //             item: { item },
                                                    //             index: { key }
                                                    //         })

                                                    //     }

                                                    // </>

                                                    <TouchableOpacity onPress={() => this.onSelectCategory(key)} style={item.selected ? [styles.categorySlideActive, styles.shadow] : [styles.categorySlideInactive, styles.shadow]}>
                                                        <Icon
                                                            name={item.iconName}
                                                            type={item.iconType}
                                                            color={item.selected ? Colors.orange : Colors.steel}
                                                            size={totalSize(2.5)}
                                                        />
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </View>
                                </View>
                                <View style={[{ flex: 4, padding: totalSize(1) }]}>
                                    {
                                        this.state.categories_list.map((item, key) => {
                                            return (
                                                <>
                                                    {
                                                        item.selected ?
                                                            <Text style={[styles.modaldetail, { marginBottom: 5 }]}>{item.title}</Text>
                                                            :
                                                            null
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                            <View style={[styles.compContainer, { marginBottom: 0 }]}>
                                <Text style={[styles.modaldetail]}>Price:</Text>
                            </View>
                            <View style={[styles.rowCompContainer]}>
                                {
                                    this.modalInput({
                                        placeholder: 'minimum',
                                        containerStyle: { flex: 1, },
                                    })
                                }
                                <View style={[{ marginHorizontal: width(2.5) }]}>
                                    <Icon
                                        name="arrow-right"
                                        type="foundation"
                                        size={totalSize(3)}
                                        color={Colors.gray}
                                    />
                                </View>
                                {
                                    this.modalInput({
                                        placeholder: 'maximum',
                                        containerStyle: { flex: 1, },
                                    })
                                }
                            </View>
                            <View style={[styles.rowCompContainer, { justifyContent: 'space-evenly' }]}>
                                {
                                    this.buttonSmall({
                                        text: 'Cancel',
                                        buttonStyle: { backgroundColor: Colors.white },
                                        textStyle: [styles.textGray],
                                        onPress: () => this.toggleFilterModal()
                                    })
                                }
                                {
                                    this.buttonSmall({
                                        text: 'Submit',
                                        buttonStyle: { backgroundColor: Colors.white },
                                        textStyle: [styles.textGray],
                                        onPress: () => this.toggleFilterModal()
                                    })
                                }
                            </View>
                        </Animatable.View>
                    </View>
                </View>
            </Modal>
        )
    }
        return (
            <View style={{ flex: 1 }}>

                <View style={styles.headerMainContainer}>
                    <ImageBackground source={require('../../../Assets/Images/HeaderGradient.jpg')} style={styles.backgroundImage}>
                        {this.props.children}

                        <TouchableOpacity onPress={()=> this.props.navigation.navigate(routes.profile)} style={styles.profileIcon}>
                        <Image source={require('../../../Assets/profile/1.jpg')} style={{ width: totalSize(4), height: totalSize(4), borderRadius: 50, borderWidth: 2, borderColor: Colors.white }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.wishlistIcon} onPress={() => this.props.navigation.navigate(routes.myWishlist)}>
                        <IonIcon name={'reader-outline'} size={35} color={Colors.white}  />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.treviIcon}>
                        <Image source={require('../../../Assets/Images/treviLogoHome.png')} style={{ width: totalSize(4), height: totalSize(4), }} />
                        </TouchableOpacity>

                     </ImageBackground>

                </View>

                <View
                    ref={(ref) => { this.mapView = ref; }}
                    style={styles.mainContainer}>
                    {/* <View>
                    <View style={[{ justifyContent: 'center', backgroundColor: Colors.white, paddingVertical: height(1) }, styles.shadow]}>
                        <this.LineHorizontal style={{ position: 'absolute', right: 0, left: 0, borderBottomColor: Colors.steel, borderBottomWidth: 2 }} />
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={categories_list}
                            layout={'default'}
                            layoutCardOffset={`10`}
                            activeSlideOffset={10}
                            enableSnap={true}
                            renderItem={this.renderCategoryItem}
                            sliderWidth={width(100)}
                            itemWidth={width(15)}
                            loop={true}
                            inactiveSlideOpacity={1}
                            inactiveSlideScale={0.8}
                            onSnapToItem={(index) => this.setState({ selectedCategoryIndex: index })}
                        />
                    </View>
                </View> */}
                    <View style={[styles.rowCompContainer, { marginBottom: height(1.5), alignItems: 'flex-end' }]}>
                        <View>
                            <Text style={[styles.title, {}]}>Trending</Text>
                            <Text style={[styles.detail, {}]}>within 50 miles</Text>
                        </View>
                        <this.buttonSmall
                            text="filter"
                            buttonStyle={{ backgroundColor: Colors.white }}
                            // iconName="ios-options"
                            iconType="ionicon"
                            iconSize={totalSize(1.25)}
                            tintColor={Colors.primary}
                            textStyle={[styles.detail, { fontSize: totalSize(1.25) }]}
                            onPress={() => {
                                this.toggleFilterModal()
                            }}
                        />
                    </View>
                    <this.renderProducts
                        data={products_list}
                        ref={flatListRef}
                    />
                    {/* <TouchableOpacity style={{ position: 'absolute', bottom: -totalSize(7.5), left: -totalSize(7.5), height: totalSize(15), width: totalSize(15), backgroundColor: Colors.primary, borderRadius: 100, alignItems: 'flex-end', padding: totalSize(2.5) }}>
                    <Icon
                        name="plus"
                        type="font-awesome"
                        color={Colors.white}
                        size={totalSize(4)}
                    />
                </TouchableOpacity> */}
                    {/* <TouchableOpacity
                    onPress={() =>
                        this.timerFlatlistRef.scrollToIndex({
                            animated: true,
                            index: 0,
                        })
                    }
                    style={{ position: 'absolute', bottom: -totalSize(1), right: -totalSize(1), height: totalSize(6), width: totalSize(5), backgroundColor: Colors.primary, borderRadius: 10, alignItems: 'flex-start', padding: totalSize(1) }}>
                    <Icon
                        name="arrow-up"
                        type="font-awesome"
                        color={Colors.white}
                        size={totalSize(2)}
                    />
                </TouchableOpacity> */}
                    <View style={[{ backgroundColor: Colors.white }, styles.shadow]}>
                        <View style={[styles.rowCompContainer]}>
                            <View style={styles.buyButton}>
                                <this.buttonSmall
                                    text="Buy"
                                    buttonStyle={{ paddingHorizontal: width(7.5) }}
                                    onPress={()=> this.props.navigation.navigate(routes.wish1)}
                                />
                            </View>
                            <View style={styles.sellButton}>
                                <this.buttonSmall
                                    text="Sell"
                                    buttonStyle={{ paddingHorizontal: width(7.5), backgroundColor: Colors.secondary }}
                                    onPress={()=> this.props.navigation.navigate(routes.Grant1)}
                                />
                            </View>
                        </View>
                    </View>
                    {/* <BlurOverlay
                    radius={10}
                    downsampling={2}
                    brightness={-100}
                    onPress={() => {
                        closeOverlay();
                    }}
                    customStyles={{alignItems: 'center', justifyContent: 'center'}}
                    blurStyle="dark"
                    children={this.renderBlurChilds()}
                /> */}
                </View>
                {/* <BlurView
                    blurType="light"
                    blurAmount={5}
                    blurRadius={15}
                    downsampleFactor={5}
                    overlayColor={'rgba(255, 255, 255, .25)'}
                    viewRef={this.state.blurViewRef}
                    style={styles.placeItemBlur} /> */}
                <this.renderFilterView />
            </View>
        );
    };

export default Trending;


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.whisper
    },
    placeItemBlur: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,

    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
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
        shadowOffset: { width: 5, height: 5 },
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
        fontSize: totalSize(2),
        fontWeight: 'bold',
        color: Colors.white
    },
    title: {
        fontSize: totalSize(2),
        fontWeight: 'bold',
        color: Colors.primary
    },
    modalTitle: {
        fontSize: totalSize(2.5),
        fontWeight: 'bold',
        color: Colors.white
    },
    detail: {
        fontSize: totalSize(1.5),
        fontWeight: 'normal',
        color: Colors.primary
    },
    modaldetail: {
        fontSize: totalSize(1.5),
        fontWeight: 'normal',
        color: Colors.white
    },
    productTitle: {
        fontSize: totalSize(1.4),
        fontWeight: 'bold',
        color: Colors.primary
    },
    productPrice: {
        fontSize: totalSize(1.25),
        color: Colors.gray,
        textAlign: 'right'
    },
    SelectedItem: {
        fontSize: totalSize(1.6),
        fontWeight: '600',
        color: Colors.primary
    },
    categorySlideInactive: {
        height: totalSize(5),
        width: totalSize(5),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        alignSelf: 'center',
        margin: 5
    },
    categorySlideActive: {
        height: totalSize(5),
        width: totalSize(5),
        borderWidth: 2.5,
        borderColor: Colors.orange,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        alignSelf: 'center',
        margin: 5
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
    textWhite: {
        color: Colors.white
    },
    textGray: {
        color: Colors.gray
    },
    textPrimary: {
        color: Colors.primary
    },
    buyButton: {
        left: 40,
        bottom: 10,

    },
    sellButton: {
        right: 40,
        bottom: 10,
    }
})
