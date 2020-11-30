import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { Colors, AppStyles, Sizes } from '../../Themes';
import * as Animatable from 'react-native-animatable'

export const MainWrapper = props => {
    const { children, style, animation } = props
    return (
        <Animatable.View animation={animation} style={[AppStyles.mainContainer, style]}>
            {children}
        </Animatable.View>
    );
}
export const MainWrapperPrimary = props => {
    const { children, style, animation,ref } = props
    return (
        <Animatable.View ref={ref} animation={animation} style={[styles.mainWrapperPrimary, style]}>
            {children}
        </Animatable.View>
    );
}
export const ImageBackgroundWrapper = props => {
    const { children, style, source } = props
    return (
        <ImageBackground source={source} style={[AppStyles.bgContainer, style]}>
            {children}
        </ImageBackground>
    );
}
export const MaterialBackgroundWrapper = props => {
    const { children, style, source } = props
    return (
        <ImageBackgroundWrapper source={source} >
            <MainWrapper style={[{ backgroundColor: Colors.appColor1Transparent }, style]}>
                {children}
            </MainWrapper>
        </ImageBackgroundWrapper>
    );
}


export const MainWrapperMatrial = props => {
    const { children, style, animation, primaryColor, secondryColor, flex } = props
    const defaultWrapperRadius = Sizes.wrapperRadius
    return (
        <Animatable.View animation={animation} style={[AppStyles.mainContainer, { flex: flex ? flex : 1, backgroundColor: primaryColor ? primaryColor : Colors.appColor1 }, style]}>
            <View style={[AppStyles.mainContainer, { backgroundColor: secondryColor ? secondryColor : Colors.appBgColor1, borderBottomLeftRadius: defaultWrapperRadius, borderBottomRightRadius: defaultWrapperRadius },]}>
                {children}
            </View>
        </Animatable.View>
    );
}
export const Wrapper = props => {
    const { children, style, animation, flex } = props
    return (
        <Animatable.View animation={animation} style={[{ flex: flex }, style]}>
            {children}
        </Animatable.View>
    );
}
export const ShadowWrapper = props => {
    const { children, style, animation, flex } = props
    return (
        <Animatable.View animation={animation} style={[styles.shadowWrapper,{ flex: flex }, style]}>
            {children}
        </Animatable.View>
    );
}
export const ComponentWrapper = props => {
    const { children, style, animation } = props
    return (
        <Animatable.View animation={animation} style={[AppStyles.compContainer, styles.removerMarginVertical, style]}>
            {children}
        </Animatable.View>
    );
}

export const RowWrapper = props => {
    const { children, style, animation } = props
    return (
        <Animatable.View animation={animation} style={[AppStyles.rowCompContainer, styles.removerMarginVertical, style]}>
            {children}
        </Animatable.View>
    );
}
export const RowWrapperBasic = props => {
    const { children, style, animation } = props
    return (
        <Animatable.View animation={animation} style={[AppStyles.rowView, style]}>
            {children}
        </Animatable.View>
    );
}
export const CardWrapper = props => {
    const { children, style, animation } = props
    return (
        <Animatable.View animation={animation} style={[AppStyles.cardView, { borderRadius: Sizes.cardRadius }, style]}>
            {children}
        </Animatable.View>
    );
}
export const AbsoluteWrapper = props => {
    const { children, style, animation } = props
    return (
        <Animatable.View animation={animation} style={[{ position: 'absolute', }, style]}>
            {children}
        </Animatable.View>
    );
}
export const FooterWrapperPrimary = props => {
    const { children, style, animation } = props
    return (
        <Animatable.View animation={animation ? animation : 'fadeInUpBig'} style={[styles.footerWrapperPrimary, style]}>
            {children}
        </Animatable.View>
    );
}
export const HeaderWrapperPrimary = props => {
    const { children, style, animation } = props
    return (
        <Animatable.View animation={animation ? animation : 'fadeInDown'} style={[styles.headerWrapperPrimary, style]}>
            {children}
        </Animatable.View>
    );
}

const styles = StyleSheet.create({
    mainWrapperPrimary: {
        ...AppStyles.mainContainer,
        backgroundColor: Colors.appBgColorPrimary
    },
    removerMarginVertical: {
        marginVertical: null
    },
    footerWrapperPrimary: {
        ...AppStyles.mainContainer,
        borderTopLeftRadius: Sizes.wrapperRadius,
        borderTopRightRadius: Sizes.wrapperRadius
    },
    headerWrapperPrimary: {
        // ...AppStyles.mainContainer,
        // borderTopLeftRadius:Sizes.wrapperRadius,
        // borderTopRightRadius:Sizes.wrapperRadius
    },
    shadowWrapper:{
        backgroundColor:Colors.appBgColor1,
        ...AppStyles.shadowStrong
    }
})