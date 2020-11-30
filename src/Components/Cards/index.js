import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { Colors, Sizes, AppStyles } from '../../Themes';
import { Wrapper, RowWrapper } from '../wrappers';
import { Spacer } from '../spacers';
import { LineHorizontal } from '../lines';
import { TinyTitle, SmallText } from '../text';

export const TitleInfoCard = props => {
    const { containerStyle, title, info, hideLine,shadow ,onPress} = props
    return (
       <TouchableOpacity activeOpacity={1} onPress={onPress}>
            <Wrapper  style={[styles.container,shadow?AppStyles.shadowStrong:null,containerStyle]}>
            <Spacer height={Sizes.baseMargin} />
            <RowWrapper>
                <TinyTitle style={[AppStyles.textColorPrimary]}>{title}</TinyTitle>
                {
                    info ?
                        <SmallText style={[AppStyles.textGray]}>{info}</SmallText>
                        :
                        null
                }
            </RowWrapper>
            <Spacer height={Sizes.baseMargin} />
            {
                hideLine?
                null
                :
                <LineHorizontal

            />
            }
        </Wrapper>
       </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:Colors.appBgColor1
    }
})