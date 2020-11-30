import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { AppStyles } from '../../Themes';

// Title Texts
export const LargeTitle = props => {
    return (
        <Text 
            style={[styles.largeTitleStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}
export const MediumTitle = props => {
    return (
        <Text 
            style={[styles.mediumTitleStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}
export const SmallTitle = props => {
    return (
        <Text 
            style={[styles.smallTitleStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}
export const TinyTitle = props => {
    return (
        <Text 
            style={[styles.tinyTitleStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}
// Normal Texts
export const LargeText = props => {
    return (
        <Text 
            style={[styles.largeTextStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}
export const MediumText = props => {
    return (
        <Text 
            style={[styles.mediumTextStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}
export const RegularText = props => {
    return (
        <Text 
            style={[styles.regularTextStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}
export const SmallText = props => {
    return (
        <Text 
            style={[styles.smallTextStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}
export const TinyText = props => {
    return (
        <Text 
            style={[styles.tinyTextStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}
export const InputTitle = props => {
    return (
        <Text 
            style={[styles.inputTitleStyle, props.style]}
            >
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    largeTitleStyle: {
        ...AppStyles.h3
    },
    mediumTitleStyle: {
        ...AppStyles.h4
    },
    smallTitleStyle: {
        ...AppStyles.h5
    },
    tinyTitleStyle: {
        ...AppStyles.h6
    },
    largeTextStyle: {
        ...AppStyles.textLarge
    },
    mediumTextStyle: {
        ...AppStyles.textMedium
    },
    regularTextStyle: {
        ...AppStyles.textRegular
    },
    smallTextStyle: {
        ...AppStyles.textSmall
    },
    tinyTextStyle: {
        ...AppStyles.textTiny
    },
    inputTitleStyle: {
        ...AppStyles.h4,
        ...AppStyles.textColorPrimary
    },

});

