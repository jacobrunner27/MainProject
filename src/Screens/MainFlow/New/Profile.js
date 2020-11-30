import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, AsyncStorage } from 'react-native';
import { MainWrapper, HeaderPrimary, BackIcon, LogoMain, MainWrapperPrimary, Wrapper, SmallTitle, TinyTitle, SmallText, Spacer, ImageRound, TitleInfoCard } from '../../../Components';
import { CardWrapper, AbsoluteWrapper } from '../../../Components/wrappers';
import { Colors, AppStyles, Sizes, appImages } from '../../../Themes';
import { totalSize } from 'react-native-dimension';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = ({navigation}) => {

    const [token, setToken] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');

    const displayData = async () => {
        try
        {
            let tokenData = null;

            if (!token)
            {
                const getToken = await AsyncStorage.getItem('token');
                setToken(getToken);
                tokenData = getToken;
            }
            else
            {
                tokenData = token;
            }

            await fetch('http://192.168.0.8:8000/display-profile/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + tokenData
                }
            }).then((response) => response.json())
              .then((json) => {
                  setFirstName(json.first_name);
                  setLastName(json.last_name);
                  setBio(json.bio);
              })
        }
        catch (error)
        {
            console.log(error);
        }
    }

        useEffect(() => displayData(), [true]);

        return (
            <MainWrapperPrimary style={[{ justifyContent: 'space-between', }]}>
                <Wrapper>
                    <HeaderPrimary
                        headerLeft={
                            <TouchableOpacity  onPress={() => navigate(routes.trending)}>
                              <Image source={require('../../../Assets/Images/littleTreviLogo.png')} />
                            </TouchableOpacity>
                        }
                        shadowOff
                    //  title="Profile"
                    />
                    <Spacer height={Sizes.baseMargin*2} />
                    <CardWrapper style={[styles.infoCard]}>
                        <AbsoluteWrapper style={[styles.imageContainer]}>
                            <ImageRound
                                source={{ uri: appImages.user3Url }}
                                size={totalSize(10)}
                            />
                        </AbsoluteWrapper>
                        <Spacer height={Sizes.baseMargin} />
                        <SmallTitle style={[styles.name]}>Alex Will</SmallTitle>
                        <TinyTitle style={[styles.profession]}>Denver, CO</TinyTitle>
                        <Spacer height={Sizes.smallMargin} />
                        <SmallText style={[styles.info]}>{info}</SmallText>
                    </CardWrapper>
                </Wrapper>
                <Wrapper animation="fadeInUpBig">
                    <TitleInfoCard
                        title="Edit Profile"
                        shadow
                        onPress={() => navigate(routes.accountSettings)}
                    />
                    <TitleInfoCard
                        title="About Trevi"
                        onPress={() => navigate(routes.aboutTrevi)}
                    />
                    <TitleInfoCard
                        title="Transection History"
                    />
                    <TitleInfoCard
                        title="Recomandations"
                        onPress={() => navigate(routes.createAccountOrLoginScreen)}
                    />
                    <TitleInfoCard
                        title="Account Settings"
                        onPress={() => navigate(routes.accountSettings)}
                    />
                </Wrapper>
            </MainWrapperPrimary>
        );
    }

export default Profile;

const styles = StyleSheet.create({
    name: {
        ...AppStyles.textColorPrimary,
        ...AppStyles.textCenter,
        ...AppStyles.textBold
    },
    profession: {
        ...AppStyles.textColorPrimary,
        ...AppStyles.textCenter,
        //...AppStyles.textBold
    },
    info: {
        ...AppStyles.textGray,
        lineHeight: totalSize(1.5),
        borderRadius: Sizes.cardRadius
    },
    infoCard: {
        ...AppStyles.shadow,
        padding: Sizes.smallMargin
    },
    imageContainer: {
        top: -totalSize(9),
        alignSelf: 'center',
        padding: Sizes.tinyMargin,
        backgroundColor: Colors.appBgColor1,
        // borderTopRightRadius:100,
        // borderTopLeftRadius:100,
        // borderBottomLeftRadius:50,
        // borderBottomRightRadius:50,
        borderRadius: 100,
        elevation: 0
    },
    imageProfile: {

    },
    treviIcon: {
        flexDirection: 'row',
        position: 'absolute',
        marginVertical: 60,
        left: 18
    },
})
