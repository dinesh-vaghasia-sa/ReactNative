import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'

export default class FlatlistDetail extends Component {
    constructor(props) {
        super(props)
        const recipeId = this.props.navigation.state.params.item.recipeId
        console.log('recipeId', recipeId)
        // this.getReceipeList(recipeId)
        this.state = {
            receipeDetail: []
        }
    }

    componentDidMount() {
        this.getReceipeDetail()
    }

    getReceipeDetail() {
        fetch('http://35.160.197.175:3006/api/v1/recipe/' + this.props.navigation.state.params.item.recipeId + '/details',
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s',
                    'Content-Type': 'application/json'
                },
            }).then((response) => {
                return response.json()
            }).then((responseJSON) => {
                console.log(responseJSON, "Dibnesh");
                this.setState({ receipeDetail: responseJSON })
            }).catch((error) => {
                console.log(error);
            })
    }

    onListing = () => {
        // console.log("Back")
        this.props.navigation.navigate('Home')
    }

    render() {
        var data = this.state.receipeDetail;
        return <SafeAreaView>
            <View style={styles.backArrows} >
                <TouchableOpacity onPress={this.onListing}>
                    <Image style={styles.backAvatar} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADZ2dn39/cqKiqIiIj09PT4+PglJSUwMDAtLS2EhISKiooiIiIuLi7m5uYcHBzMzMy4uLiYmJisrKy/v7+cnJxZWVl0dHTq6upiYmI6OjpRUVE0NDSRkZFWVlZISEh9UYmCAAACZElEQVR4nO3d2VbCQBCE4YzR4I47bqjv/5TqcRcyVx16qPq/J+g6gZ4hmTRdBwAAAAAAAAAAAAAAAAAAAAAA0I75xeXl1U52FdO5XpYPN9mVTGRRvp3Ns4uZQH9QftP7qPbL8teQXVGwlYDlNrukWLPD/wFLucsuKtJsdzWgVENdG7DcZ5cV518X/fKQXVeYkYDlILuwKLORgOUxu7Ig67+D746yS4sx2x8LWM6zawvRr1kHPy2zawsx1mRkLuHqVu3HU3ZxEdZt1aTaTKXJaATs5QOOroOl7GUXF2GodFGJgP2peMDxrZrKd/BEPaD6FRzUv4P6XVR9HaztZDQCqnfRQf0jOlR+LhFwG8gv9LUmo3EF1QPWuuhxdnER5AOyVdt2+k2mcgUlvoPyTaa2VZMIWOuiGgErTUYj4Nl4wMV8Z2MmO3xU66Ibdj/JA9daF9285/ijgG0FfBN9ZrW2VUvShwYcKk0mS+hJuaGyTOQJPHjcUBf9Le52UHNN5lPYKaRGr2CJ6zUv2UFGRa2JrX5IA9eLViMGngZs9JsYeWtdfj002NMY7EsbbDfx78O1FXGC34dNddRpfuMb3KcxuNdm8NTJ4J63wXMLg2dPBs8PDZ4B01Gzi4th0FEd2o1BRPWziQbnSz0i6q+L8mf1PTZw6m891d/BF4ko/+6axdJv0FHl3wO26Kjyb5Ja3NiQn4thMNvEYD6NwYwhgzlRBrO+DOa1GczcM5ibaDD70mB+qcEMWoM5wgazoA3meRvMZDeYq9/p/zdCZ/D/Fp3+f5QAAAAAAAAAAAAAAAAAAAAAAABFr9cJIuy5o0WVAAAAAElFTkSuQmCC' }} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground source={{ uri: (data.photo) }} style={{ width: '100%', height: 250 }}>
                        <View style={styles.header1}>
                        </View>
                        {/* <Image style={styles.avatar} source={{ uri: (data.photo) }} /> */}
                    </ImageBackground>
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <Text style={styles.name}>{data.name}</Text>
                            <Text style={styles.info}>Time: {data.preparationTime}</Text>
                            <Text style={styles.info}>Name: {data.firstName} {data.lastName}</Text>
                            <Text style={styles.description}>Complexity: {data.complexity}</Text>
                            <Text style={styles.description}>Serves: {data.serves}</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    }
}

const styles = StyleSheet.create({
    container: {
        top: 10,
    },
    backAvatar: {
        width: 30,
        height: 30,
        alignSelf: 'flex-start',
        // position: 'absolute',
        left: 15,
    },
    backArrows: {

    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
        alignSelf: 'center',
    },
    body: {
        marginTop: 20,
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