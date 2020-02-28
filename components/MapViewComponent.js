import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Permission from 'expo-permissions';

export default class MapViewComponent extends Component {
    constructor() {
        super()
        Permission.askAsync(Permission.LOCATION)
    }
    render() {
        return <View style={{ flex: 1 }}>
            <MapView style={{ flex: 1 }}
                initialRegion={{
                    latitude: 23.046021,
                    longitude: 72.655548,
                    latitudeDelta: 0.13,
                    longitudeDelta: 0.13
                }}
                style={{ flex: 1 }}
                showsUserLocation={true}>
                <Polyline
                    coordinates={[
                        {
                            latitude: 23.046021,
                            longitude: 72.655548
                        },
                        {
                            latitude: 23.038790,
                            longitude: 72.634060,
                        },
                        {
                            latitude: 23.028297,
                            longitude: 72.593681
                        }
                    ]}
                    strokeColor="#000"
                    strokeColors={[
                        '#7F0000',
                        '#00000000',
                        '#B24112',
                        '#E5845C',
                        '#238C23',
                        '#7F0000'
                    ]}
                    strokeWidth={6}
                >

                </Polyline>

                <Marker
                    coordinate={{
                        latitude: 23.046021,
                        longitude: 72.655548,
                    }}
                    title='Thakkar Nagar Approach'
                    identifier='1'
                >

                </Marker>
                <Marker
                    coordinate={{
                        latitude: 23.028297,
                        longitude: 72.593681
                    }}
                    title='India Colony, Bapunagar'
                    identifier='1'
                >

                </Marker>
            </MapView>
        </View>
    }
}

const styles = StyleSheet.create({

});