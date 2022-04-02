import React, { useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, Button, Animated } from 'react-native';
import { Searchbar } from 'react-native-paper';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const ArtSearch = () => {
    return (
        <View>
        <Searchbar/>
        
        <View style={styles.container}>            
            <Text>{'Claude Monet\nFrench, 1840-1926'}</Text>
        </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'hsl(197, 37%, 41%)',
        padding: 80,
        alignItems: 'center',
        textAlign: 'center',
    },
    text: {
        color: '#000',
        fontSize: 26,
    },
    image: {
        resizeMode: 'contain',
        aspectRatio: 1,
        width: window.width * 0.99,
    },
    buttons: {
        flexBasis: 100,
        justifyContent: 'space-evenly',
        marginVertical: 20,
    },
});

export default ArtSearch;