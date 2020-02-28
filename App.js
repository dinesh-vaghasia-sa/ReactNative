import React from 'react';
import LoginComponent from './components/LoginComponent';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import HomeComponent from './components/HomeComponent'

export default createAppContainer(
  
  createSwitchNavigator(
    {
      Login: LoginComponent,
      HomeComponent: HomeComponent,
    },
  )
)
