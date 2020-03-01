import React from 'react';
import LoginComponent from './components/LoginComponent';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import HomeComponent from './components/HomeComponent'
import FlatlistDetail from './components/FlatlistDetail'

export default createAppContainer(
  
  createSwitchNavigator(
    {
      Login: LoginComponent,
      HomeComponent: HomeComponent,
      FlatlistDetail: FlatlistDetail,
    },
  )
)
