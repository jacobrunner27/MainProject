import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, AsyncStorage, ActivityIndicator } from 'react-native';
import PhotoUpload from 'react-native-photo-upload';

const GrantUpload = ({navigation, route}) => {

    const [token, setToken] = useState(null);
    const [message, setMessage] = useState('');

    const getToken = async () => {
        try
        {
            if (!token)
            {
                const getToken = await AsyncStorage.getItem('token');
                setToken(getToken);
            }
        }
        catch (error)
        {
            console.log(error);
        }
    };

    const uploadImage = async (data) => {

         await fetch('http://trevi-server.us-west-2.elasticbeanstalk.com/grant-upload/', {
             method: 'POST',
             headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json',
                 'Authorization': 'Token ' + token
             },
             body: JSON.stringify({
                 grant_id: route.params.grant_id,
                 image: data
             })
            })
           .then((response) => response.json())
           .then((json) => (json.response == 'valid') ? navigation.navigate('Grantlist') : setMessage('Error uploading'))
           .catch((error) => console.log(error));
    };

    return (
        <View onLayout={() => getToken()} style={{flex: 1}}>

            <View>
                <Text>Select an image for your grant</Text>
            </View>

            <PhotoUpload
                onPhotoSelect={data => uploadImage(data)}>
                <Text>Upload</Text>
                </PhotoUpload>

            <View>
                <Text>{message}</Text>
            </View>

        </View>
    );
};

export default GrantUpload;
