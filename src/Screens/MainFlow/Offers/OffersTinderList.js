import React, { Component } from 'react';
import { View, Text, StyleSheet, Slider, TextInput, ScrollView, TouchableOpacity, FlatList, Image, Dimensions, ImageBackground } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Carousel from 'react-native-snap-carousel';
import { Icon } from 'react-native-elements';
import image1 from '../../../Assets/Images/image1.jpg'
import image2 from '../../../Assets/Images/image2.jpg'
import Swipeout from 'react-native-swipeout';
import Swiper from 'react-native-swiper';
import Collapsible from 'react-native-collapsible';
import { default as DeckSwiper } from 'react-native-deck-swiper';

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

class OffersTinderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products_list: [
                {
                    images: [image1, image2, image1, image2],
                    title: 'iphone Wireless Charger',
                    Subtitle: 'Mark 5',
                    price: '$60',
                    notifications: 2,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'Good',
                    distance: '10 miles'

                },
                {
                    images: [image2, image1, image2, image1,],
                    title: 'Amazon Fire TV Stick',
                    Subtitle: 'Mark 4',
                    price: '$60',
                    notifications: 5,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'New',
                    distance: '5 miles'
                },
                {
                    images: [image1, image2, image1, image2],
                    title: 'MacBook Pro 13"',
                    Subtitle: 'Mark 5',
                    price: '$1200',
                    notifications: null,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'Great',
                    distance: '8 miles'
                },
                {
                    images: [image2, image1, image2, image1,],
                    title: 'Xbox 360',
                    Subtitle: 'Mark 5',
                    price: '$100',
                    notifications: null,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'Good',
                    distance: '10 miles'
                },
                {
                    images: [image1, image2, image1, image2],
                    title: 'Unlocked iphone 8 Plus',
                    Subtitle: 'Mark 5',
                    price: '$650',
                    notifications: null,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'Poor',
                    distance: '18 miles'
                },
                {
                    images: [image2, image1, image2, image1,],
                    title: 'iphone Wireless Charger',
                    Subtitle: 'Mark 5',
                    price: '$60',
                    notifications: 2,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'Good',
                    distance: '10 miles'
                },
                {
                    images: [image1, image2, image1, image2],
                    title: 'Amazon Fire TV Stick',
                    Subtitle: 'Mark 5',
                    price: '$40',
                    notifications: null,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'New',
                    distance: '16 miles'
                },
                {
                    images: [image2, image1, image2, image1,],
                    title: 'MacBook Pro 13"',
                    Subtitle: 'Mark 5',
                    price: '$1200',
                    notifications: null,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'Great',
                    distance: '10 miles'
                },
                {
                    images: [image1, image2, image1, image2],
                    title: 'Xbox 360',
                    Subtitle: 'Mark 5',
                    price: '$100',
                    notifications: 6,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'Good',
                    distance: '10 miles'
                },
                {
                    images: [image2, image1, image2, image1,],
                    title: 'Unlocked iphone 8 Plus',
                    Subtitle: 'Mark 5',
                    price: '$650',
                    notifications: null,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'Poor',
                    distance: '21 miles'
                },
            ],
            products_list_tinder: [
                [{
                    images: [image1, image2, image1, image2],
                    title: 'iphone Wireless Charger',
                    Subtitle: 'Mark 5',
                    price: '$60',
                    notifications: 2,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'Good',
                    distance: '10 miles',
                    isCollaped: true

                },],
                [{
                    images: [image2, image1, image2, image1,],
                    title: 'Amazon Fire TV Stick',
                    Subtitle: 'Mark 4',
                    price: '$60',
                    notifications: 5,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'New',
                    distance: '5 miles',
                    isCollaped: true
                },],
                [{
                    images: [image1, image2, image1, image2],
                    title: 'MacBook Pro 13"',
                    Subtitle: 'Mark 5',
                    price: '$1200',
                    notifications: null,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'Great',
                    distance: '8 miles',
                    isCollaped: true
                },],
                [{
                    images: [image2, image1, image2, image1,],
                    title: 'Xbox 360',
                    Subtitle: 'Mark 5',
                    price: '$100',
                    notifications: null,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'Good',
                    distance: '10 miles',
                    isCollaped: true
                },],
                [{
                    images: [image1, image2, image1, image2],
                    title: 'Unlocked iphone 8 Plus',
                    Subtitle: 'Mark 5',
                    price: '$650',
                    notifications: null,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'Poor',
                    distance: '18 miles',
                    isCollaped: true
                },],
                [{
                    images: [image2, image1, image2, image1,],
                    title: 'iphone Wireless Charger',
                    Subtitle: 'Mark 5',
                    price: '$60',
                    notifications: 2,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'Good',
                    distance: '10 miles',
                    isCollaped: true
                },],
                [{
                    images: [image1, image2, image1, image2],
                    title: 'Amazon Fire TV Stick',
                    Subtitle: 'Mark 5',
                    price: '$40',
                    notifications: null,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'New',
                    distance: '16 miles',
                    isCollaped: true
                },],
                [{
                    images: [image2, image1, image2, image1,],
                    title: 'MacBook Pro 13"',
                    Subtitle: 'Mark 5',
                    price: '$1200',
                    notifications: null,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'Great',
                    distance: '10 miles',
                    isCollaped: true
                },],
                [{
                    images: [image1, image2, image1, image2],
                    title: 'Xbox 360',
                    Subtitle: 'Mark 5',
                    price: '$100',
                    notifications: 6,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'Good',
                    distance: '10 miles',
                    isCollaped: true
                },],
                [{
                    images: [image2, image1, image2, image1,],
                    title: 'Unlocked iphone 8 Plus',
                    Subtitle: 'Mark 5',
                    price: '$650',
                    notifications: null,
                    description: 'This is the lorem ipsum detail and description about this product that describes the specs',
                    condition: 'Poor',
                    distance: '21 miles',
                    isCollaped: true
                },]
            ],
            detailed_product_index: null,
            selected_product_index: null
        };
    }
    setProductIndex = () => {
        const { selected_product_index } = this.state
        selected_product_index === null ?
            this.setState({ selected_product_index: 0 })
            :
            this.setState({ selected_product_index: null })
    }
    onPressArrow = (index, i) => {
        const { products_list_tinder } = this.state

        //console.warn('previos selected index is', this.state.detailed_product_index + ' index is', index)
        // if (index === this.state.detailed_product_index) {
        //     this.setState({ detailed_product_index: null, selected_product_index: null })
        // }
        // else {
        //     this.setState({ detailed_product_index: index, selected_product_index: index })
        // }
        if (products_list_tinder[index][i].isCollaped) {
            for (const iterator of products_list_tinder) {
                iterator[i].isCollaped = true
            }
            products_list_tinder[index][i].isCollaped = false
            this.setProductIndex()
            console.warn(products_list_tinder[index][i].isCollaped)
        } else {
            products_list_tinder[index][i].isCollaped = true
            this.setProductIndex()
            console.warn(products_list_tinder[index][i].isCollaped)
        }


    }

    LineHorizontal = ({ style }) => {
        return (
            <View style={[styles.lineHorizontal, style]}></View>
        )
    }

    renderCard = ({ item, index, detailed_index, onPressArrow }) => {
        return (
            <View activeOpacity={1} style={[{ marginHorizontal: width(2.5), backgroundColor: Colors.white, borderRadius: 10, padding: totalSize(1) }, styles.shadow]}>
                <View style={{ height: height(30) }}>
                    <Swiper
                        paginationStyle={
                            index === detailed_index ?
                                { bottom: 5 }
                                :
                                { bottom: -totalSize(7.7) }
                        }
                        showsButtons={true}

                        nextButton={<Icon name="ios-arrow-forward" type="ionicon" size={totalSize(3)} color={Colors.white} />}
                        prevButton={<Icon name="ios-arrow-back" type="ionicon" size={totalSize(3)} color={Colors.white} />}
                        activeDotColor={Colors.orange}
                        dotStyle={{ borderWidth: 0.5, borderColor: Colors.orange, backgroundColor: 'transparent' }}
                        style={{}}>
                        {
                            item.images.map((item, key) => {
                                return (
                                    <Image
                                        source={item}
                                        style={{ width: null, height: height(30), borderRadius: 10 }}
                                    />
                                )
                            })
                        }
                    </Swiper>
                </View>
                <View style={[styles.rowView, { justifyContent: 'space-between', alignItems: 'flex-start', marginVertical: height(1) }]}>
                    <View>
                        <Text style={[styles.title]}>{item.title}</Text>
                        <Text style={[styles.detail]}>{item.Subtitle}</Text>
                    </View>
                    <Text style={[styles.detail]}>{item.price}</Text>
                </View>
                <Collapsible collapsed={index === detailed_index ? false : true}>
                    <View style={{ marginBottom: 5 }}>
                        <View style={styles.lineHorizontal} />
                        <Text style={[styles.detail]}>{item.description.repeat(2)}</Text>
                        <View style={styles.lineHorizontal} />
                        <Text style={[styles.detail]}>Condition: {item.condition}</Text>
                        <View style={styles.lineHorizontal} />
                        <Text style={[styles.detail]}>{item.distance} away</Text>
                    </View>
                </Collapsible>
                <View style={{ marginTop: height(2.5) }}>
                    {
                        index === detailed_index ?
                            <TouchableOpacity
                                style={[{ position: 'absolute', bottom: -totalSize(1), left: -totalSize(1), backgroundColor: Colors.purple, borderRadius: 5, borderBottomLeftRadius: 10, paddingHorizontal: 10, paddingVertical: 5 }]}>
                                <Text style={[styles.buttonText]}>Report Item</Text>
                            </TouchableOpacity>
                            :
                            null
                    }
                    <TouchableOpacity
                        onPress={() => onPressArrow(index)}
                        style={[{ position: 'absolute', bottom: -totalSize(1), right: -totalSize(1), height: totalSize(4), width: totalSize(4), backgroundColor: Colors.purple, borderTopLeftRadius: 100, borderBottomRightRadius: 10, alignItems: 'flex-end', justifyContent: 'flex-end', padding: 5 }]}>
                        <Icon
                            name={index === detailed_index ? "arrow-up" : "arrow-down"}
                            type="font-awesome"
                            color={Colors.white}
                            size={totalSize(2)}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    renderproducts = ({ data, detailed_index, onPressArrow, }) => {
        return (
            <View style={{ flex: 1 }}>
                
                <DeckSwiper
                    cards={data}
                    verticalSwipe={false}
                    backgroundColor={'transparent'}
                    showSecondCard={true}
                    style={{ marginTop: 0, marginRight: 0, marginLeft: 0, marginRight: 0 }}
                    stackSize={3}
                    renderCard={(item, index) => {
                        return (
                            <View activeOpacity={1} style={[{ marginHorizontal: width(2.5), backgroundColor: Colors.white, borderRadius: 10, padding: totalSize(1) }, styles.shadow]}>
                                <View style={{ height: height(30) }}>
                                    <Swiper
                                        paginationStyle={
                                            index === detailed_index ?
                                                { bottom: 5 }
                                                :
                                                { bottom: -totalSize(7.7) }
                                        }
                                        activeDotColor={Colors.orange}
                                        dotStyle={{ borderWidth: 0.5, borderColor: Colors.orange, backgroundColor: 'transparent' }}
                                        style={{}}>
                                        {
                                            item.images.map((item, key) => {
                                                return (
                                                    <Image
                                                        source={item}
                                                        style={{ width: null, height: height(30), borderRadius: 10 }}
                                                    />
                                                )
                                            })
                                        }
                                    </Swiper>
                                </View>
                                <View style={[styles.rowView, { justifyContent: 'space-between', alignItems: 'flex-start', marginVertical: height(1) }]}>
                                    <View>
                                        <Text style={[styles.title]}>{item.title}</Text>
                                        <Text style={[styles.detail]}>{item.Subtitle}</Text>
                                    </View>
                                    <Text style={[styles.detail]}>{item.price}</Text>
                                </View>
                                <Collapsible collapsed={index === detailed_index ? false : true}>
                                    <View style={{ marginBottom: 5 }}>
                                        <View style={styles.lineHorizontal} />
                                        <Text style={[styles.detail]}>{item.description.repeat(2)}</Text>
                                        <View style={styles.lineHorizontal} />
                                        <Text style={[styles.detail]}>Condition: {item.condition}</Text>
                                        <View style={styles.lineHorizontal} />
                                        <Text style={[styles.detail]}>{item.distance} away</Text>
                                    </View>
                                </Collapsible>
                                <View style={{ marginTop: height(2.5) }}>
                                    {
                                        index === detailed_index ?
                                            <TouchableOpacity
                                                style={[{ position: 'absolute', bottom: -totalSize(1), left: -totalSize(1), backgroundColor: Colors.purple, borderRadius: 5, borderBottomLeftRadius: 10, paddingHorizontal: 10, paddingVertical: 5 }]}>
                                                <Text style={[styles.buttonText]}>Report Item</Text>
                                            </TouchableOpacity>
                                            :
                                            null
                                    }
                                    <TouchableOpacity
                                        onPress={() => onPressArrow(index)}
                                        style={[{ position: 'absolute', bottom: -totalSize(1), right: -totalSize(1), height: totalSize(4), width: totalSize(4), backgroundColor: Colors.purple, borderTopLeftRadius: 100, borderBottomRightRadius: 10, alignItems: 'flex-end', justifyContent: 'flex-end', padding: 5 }]}>
                                        <Icon
                                            name={index === detailed_index ? "arrow-up" : "arrow-down"}
                                            type="font-awesome"
                                            color={Colors.white}
                                            size={totalSize(2)}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                >

                </DeckSwiper>
            </View>
        )
    }

    renderCardVertical = ({ item, index, detailed_index, onPressArrow }) => {
        return (
            <View activeOpacity={1} style={[{ marginHorizontal: width(1), backgroundColor: Colors.white, borderRadius: 10, padding: totalSize(1) }, styles.shadow]}>
                {/* if you change the height it will move the placement of the clickable portion of the arrow */}
                <View style={{ height: height(35) }}>
                    <Swiper
                        paginationStyle={
                            !item.isCollaped ?
                                { bottom: 5 }
                                :
                                { bottom: -totalSize(7.7) }
                        }
                        showsButtons={true}

                        nextButton={<Icon name="ios-arrow-forward" type="ionicon" size={totalSize(3)} color={Colors.white} />}
                        prevButton={<Icon name="ios-arrow-back" type="ionicon" size={totalSize(3)} color={Colors.white} />}
                        activeDotColor={Colors.orange}
                        dotStyle={{ borderWidth: 0.5, borderColor: Colors.orange, backgroundColor: 'transparent' }}
                        style={{}}>
                        {
                            item.images.map((item, key) => {
                                return (
                                    <Image
                                        source={item}
                                        style={{ width: null, height: height(37), borderRadius: 10 }}
                                    />
                                )
                            })
                        }
                    </Swiper>
                </View>
                <View style={[styles.rowView, { justifyContent: 'space-between', alignItems: 'flex-start', marginVertical: height(1) }]}>
                    <View>
                        <Text style={[styles.title]}>{item.title}</Text>
                        <Text style={[styles.detail]}>{item.Subtitle}</Text>
                    </View>
                    <Text style={[styles.detail]}>{item.price}</Text>
                </View>
                <Collapsible collapsed={item.isCollaped}>
                    <View style={{ marginBottom: 5 }}>
                        <View style={styles.lineHorizontal} />
                        <Text style={[styles.detail]}>{item.description.repeat(2)}</Text>
                        <View style={styles.lineHorizontal} />
                        <Text style={[styles.detail]}>Condition: {item.condition}</Text>
                        <View style={styles.lineHorizontal} />
                        <Text style={[styles.detail]}>{item.distance} away</Text>
                    </View>
                </Collapsible>
                <View style={{ marginTop: height(2.5) }}>
                    {
                        !item.isCollaped ?
                            <TouchableOpacity
                                style={[{ position: 'absolute', bottom: -totalSize(1), left: -totalSize(1), backgroundColor: Colors.purple, borderRadius: 5, borderBottomLeftRadius: 10, paddingHorizontal: 10, paddingVertical: 5 }]}>
                                <Text style={[styles.buttonText]}>Report Item</Text>
                            </TouchableOpacity>
                            :
                            null
                    }
                    <TouchableOpacity
                        onPress={() => onPressArrow(index)}
                        style={[{ position: 'absolute', bottom: -totalSize(1), right: -totalSize(1), height: totalSize(4), width: totalSize(4), backgroundColor: Colors.purple, borderTopLeftRadius: 100, borderBottomRightRadius: 10, alignItems: 'flex-end', justifyContent: 'flex-end', padding: 5 }]}>
                        <Icon
                            name={!item.isCollaped ? "arrow-up" : "arrow-down"}
                            type="font-awesome"
                            color={Colors.white}
                            size={totalSize(2)}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        const { detailed_product_index, products_list, selected_product_index, products_list_tinder } = this.state
        return (
            <View style={[styles.mainContainer]}>
                <View style={styles.headerMainContainer}>
                     <ImageBackground source={require('../../../Assets/Images/WishlistHeader.jpg')} style={styles.backgroundImage}>
                        {this.props.children}  

                        <TouchableOpacity onPress={()=> this.props.navigation.navigate(routes.myWishlist)} style={styles.treviIcon}>
                        <IonIcon name={'cheveron-back-outline'} size={35} color={'white'} />
                        </TouchableOpacity>   

                        <TouchableOpacity style={styles.wishlistIcon} onPress={() => this.props.navigation.navigate(routes.trending)}>
                        <Image source={require('../../../Assets/Images/TreviLogo.jpg')}/>
                        </TouchableOpacity> 

                     </ImageBackground>
                     
                </View>
                {/* <this.renderproducts
                    data={products_list}
                    detailed_index={detailed_product_index}
                    onPressArrow={(i) => this.onPressArrow(i)}
                /> */}

                {/* <DeckSwiper
                    cards={products_list}
                    //verticalSwipe={false}
                    //horizontalSwipe={false}
                    infinite={true}
                    cardIndex={selected_product_index}
                    backgroundColor={'transparent'}
                    stackSize={3}
                    renderCard={(card, cardIndex) => {
                        return (
                            <this.renderCard
                                item={card}
                                index={cardIndex}
                                detailed_index={detailed_product_index}
                                onPressArrow={(i) => this.onPressArrow(i)}
                            />
                        )

                    }}
                >
                </DeckSwiper> */}

                <FlatList
                    data={products_list_tinder}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ height: item[index, 0].isCollaped ? height(50) : height(70) }}>
                                <DeckSwiper
                                    cards={item}
                                    verticalSwipe={false}
                                    cardStyle={{ position: 'relative' }}
                                    useViewOverflow={false}
                                    overlayLabelWrapperStyle={{ position: 'relative' }}
                                    //horizontalSwipe={false}
                                    //infinite={true}
                                    cardIndex={selected_product_index}
                                    backgroundColor={'transparent'}
                                    stackSize={3}
                                    renderCard={(card, cardIndex) => {
                                        return (
                                            <this.renderCardVertical
                                                item={card}
                                                index={cardIndex}
                                                detailed_index={detailed_product_index}
                                                onPressArrow={(i) => this.onPressArrow(index, i)}
                                            />
                                        )

                                    }}
                                >
                                </DeckSwiper>
                            </View>
                        )
                    }}
                />
            </View>
        );
    }
}

export default OffersTinderList;

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
        borderBottomWidth: 0.3,
        borderBottomColor: Colors.gray,
        marginVertical: height(1)
    },
    buttonText: {
        fontSize: totalSize(1.25),
        // fontWeight: 'bold',
        color: Colors.white
    },
    title: {
        fontSize: totalSize(1.75),
        fontWeight: 'bold',
        color: Colors.purple
    },
    detail: {
        fontSize: totalSize(1.25),
        color: Colors.gray
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
    treviIcon: {
        flexDirection: 'row',
        position: 'absolute',
        marginVertical: 60,
        right: 15
    },
    wishlistIcon: {
        flexDirection: 'row',
        position: 'absolute',
        marginVertical: 60,
        left: 10
    },
})