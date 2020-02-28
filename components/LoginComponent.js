import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image, ImageBackground, AlertIOS } from 'react-native'

import bgSrc from '../assets/wallpaper.png';
import logo from '../assets/logo.png';
import usernameImg from '../assets/username.png';
import passwordImg from '../assets/password.png';

export default class LoginComponent extends Component {
  constructor() {
    super()
    this.state = { email: 'jm1@example.com', password: 'jay@123' }
  }

  render() {
    return <ImageBackground style={styles.picture} source={bgSrc}>
      <View style={styles.container}>

        <View style={styles.topView}>
          <Image source={logo} style={styles.image} />
          <Text style={styles.text}>REACT NATIVE</Text>
        </View>
        {/* <LoadingIndicator isLoading={this.state.isLoading}></LoadingIndicator> */}
        <View style={styles.middleView}>
          <View style={styles.middleView1}>
            <Image source={usernameImg} style={styles.inlineImg} />
            <TextInput
              keyboardType='email-address'
              placeholder='Email'
              style={[styles.commonInput, styles.emailInput]}
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              placeholderTextColor="white"
              underlineColorAndroid="transparent"
            ></TextInput>
          </View>
          <View style={styles.middleView1}>
            <Image source={passwordImg} style={[styles.inlineImg, styles.inlineImgPass]} />
            <TextInput
              placeholder='Password'
              style={styles.commonInput}
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholderTextColor="white"
              underlineColorAndroid="transparent"
            ></TextInput>
          </View>
          <TouchableOpacity style={styles.loginButtonContainer} onPress={this.onLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  }

  onLogin = () => {
    // Alert.alert("DInesh")
    fetch('http://35.160.197.175:3006/api/v1/user/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'email': this.state.email,
          'password': this.state.password
        })
      }).then((response) => {
        if (response.status == 200) {
          return response.json()
        } else {
          Alert.alert('Please enter valid email ID');
        }
      })
      .then((responseJSON) => {
        
        this.props.navigation.navigate('HomeComponent')
      }).catch((error) => {
        // this.setState({ isLoading: false })
      })
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 30,
    height: 30,
    left: 45,
    top: 2,
  },
  inlineImgPass: {
    position: 'absolute',
    zIndex: 99,
    width: 30,
    height: 30,
    left: 45,
    top: 10,
  },
  middleView1: {
    width: '100%',
    position: "relative",
    left: 0,
    right: 0,
  },



  loginButtonContainer: {
    top: 20,
    backgroundColor: '#F035E0',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  loginButtonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold'
  },
  commonInput: {
    // backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '80%',
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    padding: 10,
    color: 'white',
    borderColor: 'white',
    fontSize: 17,
    marginStart: 35,
    paddingStart: 50,
  },
  emailInput: {
    bottom: 10
  },
  passwordInput: {

  },
  loginTitle: {
    fontSize: 30,
    fontWeight: '500'
  },
  container: {
    flex: 1
  },
  topView: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    top: 50,
  },
  middleView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})