import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { Colors, Sizes, AppStyles } from '../../Themes';
import { Wrapper, ComponentWrapper, AbsoluteWrapper } from '../wrappers'
import { TouchableCustomIcon } from '../icons'
import LinearGradient from 'react-native-linear-gradient';
import { SmallTitle, MediumTitle } from '../text';


export const HeaderPrimary = props => {
    const { containerStyle,title, leftIcon, leftIconType, leftCustomIcon, headerLeft, rightIcon, rightIconType, rightCustomIcon, headerRight ,shadowOff} = props
    return (
        <Wrapper style={[styles.container,shadowOff?styles.shadowOff:null,containerStyle]}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={Colors.appGradiantColorsHeader} style={styles.linearGradient}>
                <Wrapper style={[AppStyles.HeaderPrimaryStyle, containerStyle]}>
                    <ComponentWrapper style={[AppStyles.center]}>
                        <AbsoluteWrapper style={{ left: 0 }}>
                            {
                                leftIcon ?
                                    <Icon
                                        name={leftIcon}
                                        type={leftIconType ? leftIconType : defaultIconType}
                                        size={iconSize}
                                        color={iconColor}
                                        onPress={onPressLeftIcon}
                                    />
                                    :
                                    leftCustomIcon ?
                                        <TouchableCustomIcon
                                            icon={leftCustomIcon}
                                            size={iconSize}
                                            color={iconColor}
                                            onPress={onPressLeftIcon}
                                        />
                                        :

                                        headerLeft ?
                                            headerLeft
                                            :
                                            null
                            }
                        </AbsoluteWrapper>
                        <MediumTitle style={[AppStyles.HeaderPrimaryTitleStyle]}>{title}</MediumTitle>
                        <AbsoluteWrapper style={{ right: 0 }}>
                            {
                                rightIcon ?
                                    <Icon
                                        name={rightIcon}
                                        type={rightIconType ? rightIconType : defaultIconType}
                                        size={iconSize}
                                        color={iconColor}
                                    />
                                    :
                                    rightCustomIcon ?
                                        <TouchableCustomIcon
                                            icon={rightCustomIcon}
                                            size={iconSize}
                                            color={iconColor}
                                            onPress={onPressLeftIcon}
                                        />
                                        :

                                        headerRight ?
                                            headerRight
                                            :
                                            null
                            }
                        </AbsoluteWrapper>
                    </ComponentWrapper>
                </Wrapper>
            </LinearGradient>
        </Wrapper>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        //  flexDirection: 'row',
        // justifyContent: 'space-evenly',
        //alignItems: 'center',
        //height:totalSize(12),
        //paddingTop:Sizes.statusBarHeight,
       // ...AppStyles.shadowStrong
    },
    container:{
        backgroundColor:Colors.appBgColor1,
        ...AppStyles.shadowStrong
    },
    shadowOff:{
        elevation:0,
    }
})