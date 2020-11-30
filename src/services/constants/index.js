import React, { Component } from 'react';
import { AppStyles, Colors } from "../../Themes"
import { BackIcon } from "../../Components"

const header = {
    screenOptions: {
        //  headerShown: false,
        title: 'Title',
        headerTitleAlign: 'left',
        headerStyle: [AppStyles.headerStyle],
        headerTitleStyle: AppStyles.headerTitleStyle,
        headerTintColor: Colors.appTextColor4,
        headerBackImage: () => <BackIcon />,
        headerBackTitle: ' '

    }
}
const routes = {
    chats: 'chats',
    chatScreen: 'chatScreen',
    profile: 'profile',
    editProfile: 'editProfile',
    accountSettings: 'accountSettings',
    trending: 'trending',
    wish: 'wish',
    wish1: 'wish1',
    offers: 'offers',
    offersTinder: 'offersTinder',
    offersTinderList: 'offersTinderList',
    myWishlist: 'myWishlist',
    aboutTrevi: 'aboutTrevi',
    loginScreen: 'loginScreen',
}

const tab = {
    tabBarOptions: {
        //showLabel: false,
        activeTintColor: Colors.appTextColor6,
        inactiveTintColor: Colors.appTextColor6,
        allowFontScaling: true,
        style: AppStyles.tabBarStyle,
        activeBackgroundColor: '#FFFFFF40',
        tabStyle: { borderRadius: 20, marginHorizontal: 7.5, marginVertical: 2 }
    },
}


export { header, routes, tab }