import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import * as Permission from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

export default class SettingsComponent extends Component {
  constructor() {
    super()
    this.state = { }
    Permission.askAsync(Permission.CAMERA)
    Permission.askAsync(Permission.CAMERA_ROLL)
  }

  render() {
    return <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: this.state.image ? this.state.image : 'https://bootdey.com/img/Content/avatar/avatar6.png'}} />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Dinesh Vaghasia</Text>
              <Text style={styles.info}>Front End Developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
              <TouchableOpacity style={styles.buttonContainer} onPress={this.onGallery}>
                <Text style={styles.loginButtonText}>Set Profile Icon</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonContainer} onPress={this.onLogout}>
                <Text style={styles.loginButtonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  }
  onLogout = () => {
    this.props.navigation.navigate('Login')
  }
  onGallery = () => {
    alert('hii')
    ImagePicker.launchImageLibraryAsync().then((result) => {
      this.setState({ image: result.uri })
      console.log(result);
    })
  }
}

const styles = StyleSheet.create({
  header: {
    //   backgroundColor: "#00BFFF",
    backgroundColor: '#F035E0',
    height: 200.
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#F035E0",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 40,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#F035E0',
    color: 'white'
  },
  loginButtonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold'
  },
});