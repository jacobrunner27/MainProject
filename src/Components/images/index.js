import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ViewPropTypes } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { Colors, AppStyles } from '../../Themes';
import { Wrapper, AbsoluteWrapper } from '../wrappers';
import LinearGradient from 'react-native-linear-gradient';

export const ImageRound = props => {
    const { style, size, source } = props
    const defaultSize = totalSize(5)
    return (
        <Image
            source={source}
            style={[{ height: size ? size : defaultSize, width: size ? size : defaultSize, borderRadius: 150 }, style]}
        />
    );
}

export const ImageSqareRound = props => {
    const { style, size, source } = props
    const defaultSize = totalSize(5)
    return (
        <Image
            source={source}
            style={[{ height: size ? size : defaultSize, width: size ? size : defaultSize, borderRadius: 15 }, style]}
        />
    );
}

export const ImageProfile = props => {
    const { imageStyle,size, source, containerStyle, animation, onPress } = props
    const defaultSize = totalSize(10)

    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress}>
            <Wrapper animation={animation ? animation : 'zoomIn'} style={[styles.ImageProfileContainer, containerStyle]}>
                <Image
                    source={source}
                    style={[styles.ImageProfile,{height: size ? size : defaultSize, width: size ? size : defaultSize,}, imageStyle]}
                />
            </Wrapper>
        </TouchableOpacity>
    );
}
export const ImageCollectionItem = props => {
    const { imageStyle, source, containerStyle } = props
    return (
        <Wrapper style={containerStyle}>
            <Image
                source={source}
                style={[styles.ImageCollectionItem, imageStyle]}
            />
        </Wrapper>
    );
}


const styles = StyleSheet.create({
    ImageProfileContainer: {
        ...AppStyles.shadow,
        // backgroundColor:'transparent',
        borderRadius: 100,
        backgroundColor: Colors.appBgColor1
    },
    ImageProfile: {
        width: totalSize(15),
        height: totalSize(15),
        borderRadius: 100,
        borderWidth: 7.5,
        borderColor: Colors.appBgColor1,

    },
    ImageProfileOverlay: {
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    },
    ImageCollectionItem: {
        width: width(32.5),
        height: height(20),
        borderRadius: 15,
    }
})
