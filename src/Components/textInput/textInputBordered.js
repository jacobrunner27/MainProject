import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { totalSize, height } from 'react-native-dimension';
import { AppStyles, Colors } from '../../Themes';

class TextInputBordered extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false
        };
    }

    render() {
        const { iconName, iconType, placeholder, placeholderTextColor, onFocus, onChangeText, secureTextEntry, value, containerStyle, inputStyle } = this.props
        const { isFocused } = this.state
        return (
            <View style={[AppStyles.inputContainerBorderd, {
                borderRadius: 5,
                borderWidth: 1,
                borderColor: isFocused ? Colors.appColor1 : Colors.appTextColor5
            }, containerStyle]}>
                <View style={{ flex: 2, alignItems: 'center' }}>
                    <Icon name={iconName} type={iconType} size={totalSize(2.5)} color={isFocused ? Colors.appColor1 : Colors.appTextColor5} iconStyle={{}} />
                </View>
                <View style={{ flex: 8 }}>
                    <TextInput
                        onChangeText={onChangeText}
                        value={value}
                        placeholder={placeholder}
                        placeholderTextColor={placeholderTextColor}
                        onFocus={onFocus ? onFocus : () => { this.setState({ isFocused: true }); }}
                        onBlur={() => this.setState({ isFocused: false })}
                        secureTextEntry={secureTextEntry}
                        style={[AppStyles.inputField, { width: null, height: height(6) }, inputStyle]}
                    />
                </View>
            </View>
        );
    }
}

export default TextInputBordered;
