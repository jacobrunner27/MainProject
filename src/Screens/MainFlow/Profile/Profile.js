import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, AsyncStorage, ActivityIndicator } from 'react-native';
import { MainWrapper, HeaderPrimary, BackIcon, LogoMain, MainWrapperPrimary, Wrapper, SmallTitle, TinyTitle, SmallText, Spacer, ImageRound, TitleInfoCard } from '../../../Components';
import { CardWrapper, AbsoluteWrapper } from '../../../Components/wrappers';
import { Colors, AppStyles, Sizes, appImages } from '../../../Themes';
import { totalSize } from 'react-native-dimension';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PhotoUpload from 'react-native-photo-upload';

const Profile = ({navigation}) => {

    const [token, setToken] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const [message, setMessage] = useState('');

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

            await fetch('http://trevi-server.us-west-2.elasticbeanstalk.com/display-account/', {
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

        useEffect(() => {
            displayData();
            retrieveImage();
            }, [true]);

        const uploadImage = async (data) => {
            await fetch('http://trevi-server.us-west-2.elasticbeanstalk.com/account-upload/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + token
                },
                body: JSON.stringify({
                    image: data
                })
                })
              .then((response) => response.json())
              .then((json) => (json.response == 'valid') ? setMessage('Photo uploaded') : setMessage('Error uploading'))
              .finally(() => retrieveImage())
          }

          const [image, setImage] = useState(null);
          const [imageLoading, setImageLoading] = useState(true);

          const retrieveImage = async () => {
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

                  let imageUri = null;

              await fetch('http://trevi-server.us-west-2.elasticbeanstalk.com/account-images/', {
                  method: 'POST',
                  headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                      'Authorization': 'Token ' + tokenData
                  },
                  })
                .then((response) => response.json())
                .then((json) => {
                    if (json.image == 'none')
                    {
                        setImage('../../../Assets/Images/littleTreviLogo.png');
                        console.log('no image');
                    }
                    else
                    {
                        let imageData = json.image.toString();
                        console.log(imageData);
                        imageUri = 'data:image/jpg;base64,' + imageData;
                        setImage(imageUri);
                    }
                })
                .finally(() => setImageLoading(false))
            }
            catch (error)
            {
                console.log(error);
            }
        }


        return (
            <View style={styles.container}>

                <View>
                    <Text>{firstName}</Text>
                    <Text>{lastName}</Text>
                    <Text>{bio}</Text>
                </View>

                {imageLoading ? <ActivityIndicator/> : (

                    <Image
                    source={{uri: image}}
                    style={styles.image}/>
                )}

                <PhotoUpload
                    onPhotoSelect={data => uploadImage(data)}>
                    <Text>Upload</Text>
                    </PhotoUpload>


            </View>
        );
    }

export default Profile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100
    },
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
