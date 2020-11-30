import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { Colors, AppStyles, Sizes, FontSize } from '../../Themes';
import { InputTitle, RegularText } from '../text';
import { ComponentWrapper } from '../wrappers';
import { Spacer } from '../spacers';
//import TextInputBordered from './textInputBordered'
import * as Animatable from 'react-native-animatable'
const TextInputColored = props => {
    var focused = false
    const { iconName, iconType, onPress, title, isButton, titleStyle, placeholder, editable, animation, multiline, onFocus, onBlur, onChangeText, secureTextEntry, value, iconColor, iconSize, containerStyle, inputContainerStyle, onPressIcon, inputStyle,right,keyboardType,iconStyle } = props
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={[containerStyle]}>
            {
                title ?
                    <ComponentWrapper style={{}}>
                        <InputTitle style={[{ marginLeft: width(2.5) }, titleStyle]}>{title}</InputTitle>
                        <Spacer height={Sizes.smallMargin} />
                    </ComponentWrapper>
                    :
                    null
            }
            <Animatable.View animation={animation ? animation : 'fadeInUp'} style={[AppStyles.inputContainerColored, {
                borderRadius: Sizes.inputRadius,
                backgroundColor: Colors.appBgColor1
            }, inputContainerStyle]}>

                <View style={{ flex: 8 }}>
                    {
                        isButton ?
                            <ComponentWrapper>
                                <Spacer height={Sizes.baseMargin} />
                                <RegularText style={value ? null : AppStyles.textGray}>{value ? value : placeholder}</RegularText>
                                <Spacer height={Sizes.baseMargin} />
                            </ComponentWrapper>
                            :
                            <TextInput
                                onChangeText={onChangeText}
                                value={value}
                                placeholder={placeholder}
                                editable={editable}
                                multiline={multiline}
                               // placeholderTextColor={'#21212180'}
                                keyboardType={keyboardType}
                                onFocus={() => focused = true, onFocus}
                                onBlur={() => focused = false, onBlur}
                                secureTextEntry={secureTextEntry}
                                style={[AppStyles.inputField, { width: null, height: height(6), paddingHorizontal: width(5),color:Colors.appTextColor4 }, inputStyle]}
                            />
                    }
                </View>
                {
                    right ?
                        right
                        :
                        iconName ?
                            <View style={{ flex: 2, alignItems: 'center' }}>
                                <Icon name={iconName} type={iconType} size={iconSize ? iconSize : Sizes.appIcons.medium} color={iconColor ? iconColor : Colors.appTextColor5} iconStyle={iconStyle} onPress={onPressIcon} />
                            </View>
                            :
                            null
                }
            </Animatable.View>
        </TouchableOpacity>
    );
}

const TextInputBordered = props => {
    var focused = false
    const { iconName, iconType, onPress, keyboardType, title, isButton, titleStyle, placeholder, editable, animation, multiline, onFocus, onBlur, onChangeText, secureTextEntry, value, iconColor, iconSize, containerStyle, inputContainerStyle, onPressIcon, inputStyle, right, iconStyle } = props
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={[containerStyle]}>
            {
                title ?
                    <ComponentWrapper style={{}}>
                        <InputTitle style={[{ marginLeft: width(2.5) }, titleStyle]}>{title}</InputTitle>
                        <Spacer height={Sizes.TinyMargin} />
                    </ComponentWrapper>
                    :
                    null
            }
            <Animatable.View animation={animation ? animation : 'fadeInUp'} style={[AppStyles.inputContainerBorderd, {
                borderRadius: Sizes.inputRadius,
                borderWidth: 1,
            }, inputContainerStyle]}>

                <View style={{ flex: 8 }}>
                    {
                        isButton ?
                            <ComponentWrapper>
                                <Spacer height={Sizes.baseMargin} />
                                <RegularText style={value ? null : AppStyles.textGray}>{value ? value : placeholder}</RegularText>
                                <Spacer height={Sizes.baseMargin} />
                            </ComponentWrapper>
                            :
                            <TextInput
                                onChangeText={onChangeText}
                                value={value}
                                placeholder={placeholder}
                                editable={editable}
                                keyboardType={keyboardType}
                                multiline={multiline}
                                placeholderTextColor={'#21212180'}
                                onFocus={() => focused = true, onFocus}
                                onBlur={() => focused = false, onBlur}
                                secureTextEntry={secureTextEntry}
                                style={[AppStyles.inputField, { width: null, height: height(6), paddingHorizontal: width(5) }, inputStyle]}
                            />
                    }
                </View>
                {
                    right ?
                        right
                        :
                        iconName ?
                            <View style={{ flex: 2, alignItems: 'center' }}>
                                <Icon name={iconName} type={iconType} size={iconSize ? iconSize : Sizes.appIcons.medium} color={iconColor ? iconColor : Colors.appTextColor5} iconStyle={iconStyle} onPress={onPressIcon} />
                            </View>
                            :
                            null
                }
            </Animatable.View>
        </TouchableOpacity>
    );
}

const TextInputChat = props => {
    const { onChangeText, onSend } = props
    return (
        <TextInputColored
            placeholder="Write a message"
            iconName="send"
            multiline
            iconType="font-awesome"
            iconColor={Colors.appColor1}
            inputStyle={{ height: null, backgroundColor: 'transparent', paddingVertical: Platform.OS === 'ios' ? height(2) : null,FontSize:FontSize.regular }}
            inputContainerStyle={[{ alignItems: 'flex-end', marginVertical: height(2) }]}
            iconStyle={{ marginVertical: height(2) }}
            onChangeText={onChangeText}
            onPressIcon={onSend}
        />
    )
}


export { TextInputColored, TextInputBordered, TextInputChat }