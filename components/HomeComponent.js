import React, { Component } from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FlatLists from './FlatLists';
import SettingsComponent from './SettingsComponent';
import MapViewComponent from './MapViewComponent'

export default createAppContainer(

  createBottomTabNavigator(
    {
      Home: FlatLists,
      MapView: MapViewComponent,
      Profile: SettingsComponent,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          if (routeName === 'Home') {
            if (focused) {
              return <Image source={require('../assets/active-home.png')} style={{ width: 25, height: 25, }} ></Image>
            } else {
              return <Image source={require('../assets/home.png')} style={{ width: 25, height: 25, }} ></Image>
            }
          }
          if (routeName === 'MapView') {
            if (focused) {
              return <Image source={require('../assets/active-address.png')} style={{ width: 30, height: 30, }} ></Image>
            } else {
              return <Image source={require('../assets/address.png')} style={{ width: 30, height: 30, }} ></Image>
            }
          }
          if (routeName === 'Profile') {
            if (focused) {
              return <Image source={require('../assets/active-profile.jpeg')} style={{ width: 25, height: 25, }} ></Image>
            } else {
              return <Image source={require('../assets/profile.jpeg')} style={{ width: 25, height: 25, }} ></Image>
            }
          }
        },
      }),
      tabBarOptions: {
        activeTintColor: '#F035E0',
        inactiveTintColor: '#263238',
      },
    }
  )
)