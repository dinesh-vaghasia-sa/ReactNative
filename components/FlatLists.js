import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, FlatList, Alert, Dimensions, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { render } from 'react-dom';
import { FlatlistDetail } from './FlatlistDetail'
// const DATA = [
//   {
//     id: '1',
//     title: '90 Easy Chicken Dinner Ideas and Recipes - Best Chicken Recipes',
//     image: require('../assets/recipe/1.jpeg'),
//   },
//   {
//     id: '2',
//     title: 'Delicious and Quick Recipes | HelloFresh',
//     image: require('../assets/recipe/2.jpeg'),
//   },
//   {
//     id: '3',
//     title: 'Cajun Blackened Chicken and Rice Bowls with Spicy Crema',
//     image: require('../assets/recipe/3.jpeg'),
//   },
//   {
//     id: '4',
//     title: 'Quick vegetarian recipes | BBC Good Food',
//     image: require('../assets/recipe/4.jpeg'),
//   },
//   {
//     id: '5',
//     title: 'Chicken Dinner Ideas and Recipes - Best Chicken Recipes',
//     image: require('../assets/recipe/1.jpeg'),
//   },
//   {
//     id: '6',
//     title: 'Delicious HelloFresh',
//     image: require('../assets/recipe/2.jpeg'),
//   },
//   {
//     id: '7',
//     title: 'Cajun Blackened Chicken and Rice Bowls with Spicy Crema',
//     image: require('../assets/recipe/3.jpeg'),
//   }
// ];
// function Item({ title }) {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );
// }
export default class FlatLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeList: []
    };
  }
  componentDidMount() {
    this.getReceipeList()
    // console.log(this.getReceipeList());
  }

  onItemClick = (item) => {
    this.props.navigation.navigate('FlatlistDetail', {item});
  }
  render() {
    return (<ScrollView style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={this.state.receipeList}
          extraData={this.state.receipeList}
          numColumns={2}
          renderItem={({ item, index }) => {
            return <View style={styles.boxContainer}>
              
              <ImageBackground onPress={() => this.onItemClick(item)} source={{ uri: item.photo ? item.photo : 'https://bootdey.com/img/Content/avatar/avatar6.png' }} style={{ width: '100%', height: 130 }}>
                {/* <Image style={{ flex: 1 }} source={{ uri: (item.photo) }} /> */}
              </ImageBackground>
              <TouchableWithoutFeedback onPress={() => this.onItemClick(item)}>
                <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
              </TouchableWithoutFeedback>
            </View>
          }}
          keyExtractor={(item, recipeId) => recipeId.toString()}
        />
      </SafeAreaView>
    </ScrollView>
    )
  }
  getReceipeList() {
    fetch('http://35.160.197.175:3006/api/v1/recipe/feeds',
      {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s',
          'Content-Type': 'application/json'
        },
      }).then((response) => {
        return response.json()
      }).then((responseJSON) => {
        // console.log(responseJSON);
        this.setState({ receipeList: responseJSON })
      }).catch((error) => {
        console.log(error);
        Alert.alert('React', "data", [
          {
            text: 'Ok',
            style: 'cancel'
          },
        ])
      })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  // item: {
  //   backgroundColor: '#f9c2ff',
  //   padding: 10,
  //   marginVertical: 8,
  //   marginHorizontal: 16,
  // },
  boxContainer: {
    margin: 10,
    backgroundColor: 'rgba(240,53,224,0.4)',
    height: 180,
    padding: 0,
    width: ((Dimensions.get('window').width - 40) / 2),
    borderRadius: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    top:0
  },
  imageRadius: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 17,
    marginTop: 8,
    color: '#ffffff',
    fontWeight: "bold",
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});