import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, FlatList, ListItem, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import { render } from 'react-dom';
const DATA = [
  {
    id: '1',
    title: '90 Easy Chicken Dinner Ideas and Recipes - Best Chicken Recipes',
    image: require('../assets/recipe/1.jpeg'),
  },
  {
    id: '2',
    title: 'Delicious and Quick Recipes | HelloFresh',
    image: require('../assets/recipe/2.jpeg'),
  },
  {
    id: '3',
    title: 'Cajun Blackened Chicken and Rice Bowls with Spicy Crema',
    image: require('../assets/recipe/3.jpeg'),
  },
  {
    id: '4',
    title: 'Quick vegetarian recipes | BBC Good Food',
    image: require('../assets/recipe/4.jpeg'),
  },
  {
    id: '5',
    title: 'Chicken Dinner Ideas and Recipes - Best Chicken Recipes',
    image: require('../assets/recipe/1.jpeg'),
  },
  {
    id: '6',
    title: 'Delicious HelloFresh',
    image: require('../assets/recipe/2.jpeg'),
  },
  {
    id: '7',
    title: 'Cajun Blackened Chicken and Rice Bowls with Spicy Crema',
    image: require('../assets/recipe/3.jpeg'),
  }
];
function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
export default class FlatLists extends Component {
  render() {
    return (<ScrollView style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={({ item }) => {
            return <View style={styles.boxContainer}>
              <Image flax='1' source={item.image} style={styles.imageRadius} />
              <TouchableWithoutFeedback>
                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
              </TouchableWithoutFeedback>
            </View>
          }}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  boxContainer: {
    margin: 10,
    backgroundColor: 'rgba(240,53,224,0.4)',
    height: 180,
    padding: 20,
    width: ((Dimensions.get('window').width - 40) / 2),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageRadius: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 16,
    marginTop: 8,
    color: '#ffffff',
  }
});