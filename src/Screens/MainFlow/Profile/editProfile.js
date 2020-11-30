import React, { Component } from 'react';
import { View, Text, findNodeHandle, Modal, StyleSheet } from 'react-native';
import { MainWrapper, HeaderPrimary, BackIcon, Spacer, ImageProfile, ButtonColoredSmall, LineHorizontal, TextInputColored, KeyboardAvoidingScrollView, MainWrapperMatrial, MainWrapperPrimary, ComponentWrapper, Wrapper, ShadowWrapper, BlurModal, MediumTitle, AbsoluteWrapper, CloseIcon } from '../../../Components';
import { AppStyles, Sizes, appImages, Colors } from '../../../Themes';
import { totalSize } from 'react-native-dimension';
import sizes from '../../../Themes/Sizes';
import { BlurView } from 'react-native-blur';
import { CardWrapper } from '../../../Components/wrappers';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Max Lee",
            username: 'maxLee223',
            bio: "Denver, born and raised!\nI'am always looking for some new used clothes. Mostly here to wish but i'll sell thigs here occasionally.",
            isEditPhotoModalVisible: false,
            blurViewRef: null

        };
    }
    componentDidMount = () => { this.ViewLoaded() }

    ViewLoaded = async () => {
        await this.setState({ blurViewRef: findNodeHandle(this.mapView) });
        console.log(this.state.blurViewRef)

    }
    toggleEditPhotoModal = () => this.setState({ isEditPhotoModalVisible: !this.state.isEditPhotoModalVisible })
    whiteLine = () => {
        return (
            <Wrapper>
                <Spacer height={Sizes.baseMargin} />
                <LineHorizontal
                    height={2}
                    color={Colors.appBgColor1}
                />
                <Spacer height={Sizes.baseMargin} />
            </Wrapper>
        )
    }
    editPhotoModal = () => {
        const { isEditPhotoModalVisible, blurViewRef } = this.state
        return (
            <BlurModal
                visible={isEditPhotoModalVisible}
                transparent
                toggleModal={this.toggleEditPhotoModal}
                blurViewRef={blurViewRef}
            >
                <Wrapper flex={1} style={[styles.editePhotoModalContainer]}>
                    <AbsoluteWrapper style={{ top: Sizes.doubleBaseMargin, left: Sizes.baseMargin }}>
                        <CloseIcon
                            onPress={() => this.toggleEditPhotoModal()}
                            size={sizes.icons.xxl}
                        />
                    </AbsoluteWrapper>
                    <CardWrapper style={[AppStyles.center, { backgroundColor: Colors.appTextColor5 }]} >
                        <Spacer height={Sizes.baseMargin*2} />
                        <ButtonColoredSmall
                            text="Take Photo"
                            buttonColor={Colors.appBgColor1}
                            textColor={Colors.appTextColor4}
                            onPress={this.toggleEditPhotoModal}
                        />
                        <Spacer height={Sizes.smallMargin} />
                        <ButtonColoredSmall
                            text="Select Photo"
                            buttonColor={Colors.appBgColor1}
                            textColor={Colors.appTextColor4}
                            onPress={this.toggleEditPhotoModal}
                        />
                        <Spacer height={Sizes.baseMargin*2} />
                    </CardWrapper>
                </Wrapper>
            </BlurModal>
        )
    }
    render() {
        const { navigation } = this.props
        const { name, username, bio } = this.state
        const textinputAnimation = "fadeInRight"
        return (
            <View style={{ flex: 1 }} >
                <View style={AppStyles.mainContainer} ref={(ref) => { this.mapView = ref; }}>
                    <MainWrapperPrimary >
                        <HeaderPrimary
                            headerLeft={<BackIcon onPress={() => navigation.goBack()} />}
                            title="Edit Profile"
                        />
                        <KeyboardAvoidingScrollView>
                            <Spacer height={Sizes.baseMargin} />
                            <ComponentWrapper style={[AppStyles.center]}>
                                <ImageProfile
                                    source={{ uri: appImages.user3Url }}
                                    size={totalSize(15)}
                                />
                                <Spacer height={Sizes.smallMargin} />
                                <ButtonColoredSmall
                                    text="Edit Photo"
                                    buttonColor={Colors.appBgColor1}
                                    textColor={Colors.appColor1}
                                    onPress={this.toggleEditPhotoModal}
                                />
                            </ComponentWrapper>
                            <this.whiteLine />
                            <TextInputColored
                                title="Name"
                                value={name}
                                onChangeText={(text) => this.setState({ name: text })}
                                animation={textinputAnimation}
                            />
                            <this.whiteLine />
                            <TextInputColored
                                title="Username"
                                value={username}
                                onChangeText={(text) => this.setState({ username: text })}
                                animation={textinputAnimation}
                            />
                            <this.whiteLine />
                            <TextInputColored
                                title="Bio"
                                value={bio}
                                multiline
                                animation={textinputAnimation}
                                onChangeText={(text) => this.setState({ bio: text })}
                                inputStyle={{ height: null, paddingVertical: sizes.smallMargin }}
                            />
                            <Spacer height={Sizes.baseMargin} />
                            <ShadowWrapper style={[AppStyles.center]}>
                                <Spacer height={Sizes.baseMargin} />
                                <ButtonColoredSmall
                                    text="Save"
                                    buttonColor={Colors.appColor3}
                                    //textColor={Colors.appColor1}
                                    textStyle={[AppStyles.h4, AppStyles.textWhite]}
                                />
                                <Spacer height={Sizes.doubleBaseMargin} />
                            </ShadowWrapper>
                        </KeyboardAvoidingScrollView>
                    </MainWrapperPrimary>
                </View>
                <this.editPhotoModal />
            </View>
        );
    }
}

export default EditProfile;


const styles = StyleSheet.create({
    placeItemBlur: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
    },
    editePhotoModalContainer:{
        justifyContent: 'center',
        paddingHorizontal:Sizes.marginHorizontal*2
    }
})