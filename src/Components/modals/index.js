import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, Modal, SafeAreaView, StatusBar } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { Colors } from '../../Themes';
import { BlurView } from 'react-native-blur';
import { Wrapper } from '../wrappers';
export const BlurModal = props => {
    const { visible, toggleModal, blurViewRef, children } = props
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >
            <Wrapper flex={1}>
                <BlurView
                    blurType="light"
                    blurAmount={8}
                    blurRadius={15}
                    downsampleFactor={7.5}
                    overlayColor={'rgba(255, 255, 255, .5)'}
                    viewRef={blurViewRef}
                    style={styles.placeItemBlur} />
                {children}
            </Wrapper>
        </Modal>
    );
}

const styles = StyleSheet.create({
    placeItemBlur: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,

    },
})