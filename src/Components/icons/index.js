import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { Colors, AppStyles } from '../../Themes';
import * as Animatable from 'react-native-animatable';
import { SmallText } from '../text';
import sizes from '../../Themes/Sizes';

export const BackIcon = props => {
    const { style, onPress, size } = props
    return (
        <Icon
            name="ios-arrow-back"
            type="ionicon"
            size={size ? size : sizes.icons.large}
            //raised
            //reverse
            //reverseColor={Colors.appTextColor6}
            color={Colors.appTextColor6}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const CloseIcon = props => {
    const { style, onPress, size } = props
    return (
        <Icon
            name="ios-close"
            type="ionicon"
            size={size ? size : sizes.icons.large}
            //raised
            //reverse
            //reverseColor={Colors.appTextColor6}
            color={Colors.appTextColor6}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const IconButton = props => {
    const { style, onPress, iconSize, iconColor, iconName, iconType } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.heartIconContainer, style]}
        >
            <Icon
                name={iconName ? iconName : "heart"}
                type={iconType ? iconType : "material-community"}
                size={iconSize ? iconSize : totalSize(2)}
                color={iconColor ? iconColor : Colors.appTextColor5}
            />
        </TouchableOpacity>
    );
}
export const MenuIcon = props => {
    const { style, onPress, color, size } = props
    return (
        <Icon
            name="menu"
            type="entypo"
            size={size ? size : totalSize(2.5)}
            //raised
            // reverse
            // reverseColor={Colors.appTextColor6}
            color={color ? color : Colors.appTextColor3}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const FilterIcon = props => {
    const { style, onPress, color, size } = props
    return (
        <Icon
            name="options"
            type="ionicon"
            size={size ? size : totalSize(2.5)}
            //raised
            // reverse
            // reverseColor={Colors.appTextColor6}
            color={color ? color : Colors.appTextColor3}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const CustomIcon = props => {
    const { icon, size, animation, duration, color } = props
    const defaulSize = totalSize(5)
    return (
        <Animatable.View animation={animation} duration={duration}>
            <Image
                source={icon}
                resizeMode="contain"
                style={{ height: size ? size : defaulSize, width: size ? size : defaulSize, tintColor: color }}
            />
        </Animatable.View>
    );
}

export const TouchableCustomIcon = props => {
    const { icon, size, animation, duration, color,onPress } = props
    return (
        <TouchableOpacity onPress={onPress}>
            <CustomIcon
                icon={icon}
                size={size}
                animation={animation}
                duration={duration}
                color={color}
            />
        </TouchableOpacity>
    );
}

export const IconWithText = props => {
    const { text, containerStyle, title, customIcon, onPress, tintColor, iconName, iconType, iconSize, textStyle, titleStyle, direction } = props
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={[{ flexDirection: direction ? direction : 'row', alignItems: 'center', }, containerStyle]}>
            {
                customIcon ?
                    <CustomIcon icon={customIcon} size={iconSize ? iconSize : totalSize(2)} color={tintColor ? tintColor : Colors.appColor1} />
                    :
                    <Icon name={iconName ? iconName : 'email'} type={iconType ? iconType : 'material-community'} size={iconSize ? iconSize : totalSize(2)} color={tintColor ? tintColor : Colors.appTextColor1} />
            }
            <View style={direction === 'column' ? { marginVertical: height(1.5) } : { marginHorizontal: width(2) }}>
                {
                    title ?
                        <Text style={[AppStyles.textRegular, { color: tintColor ? tintColor : Colors.appTextColor1, fontFamily: FontFamily.appTextBold, marginBottom: 5 }, titleStyle]}>{title}</Text>
                        :
                        null
                }
                <SmallText style={[{ color: tintColor ? tintColor : Colors.appTextColor1, }, textStyle]}>{text}</SmallText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    heartIconContainer: {
        height: totalSize(4),
        width: totalSize(4),
        backgroundColor: Colors.appBgColor1,
        borderRadius: 100,
        ...AppStyles.center,
        ...AppStyles.shadow
    }
})