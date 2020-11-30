import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { Colors, Sizes, AppStyles } from '../../Themes';
import { IconWithText } from '../icons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { RowWrapperBasic } from '../wrappers';
import { TinyTitle } from '../text';
import { Spacer } from '../spacers';

export const LogoMain = props => {
  const {size,color } = props
  return (
   <Icon
   name="alpha-t"
   type="material-community"
   size={size?size:Sizes.icons.xxl}
   color={color?color:Colors.appTextColor6}
   />
  );
}
