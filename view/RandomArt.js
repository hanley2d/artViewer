/**
 * File: RandomArt.js
 * Author: David Hanley
 * Last modified: 2022-04-09
 * 
 * Description: This file is the screen for displaying random artwork. It is fairly similar in function to the ArtDetail page. 
 * This page uses a separate fetch request from the other pages which is located at fetchRandom.js
 */

import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, Image, StyleSheet, Animated, ActivityIndicator, ScrollView } from 'react-native';
import { colors } from './components/colors';
import RandomButton from './components/RandomButton';
import fetchRandom from '../controller/fetchRandom';

const window = Dimensions.get("window");

// function to generate a random integer between min and max inclusive. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const RandomArt = () => {

    const [isLoading, setIsLoading] = useState(false);
    function updateLoading(data) {
        setIsLoading(data);
    }
    const [artwork, setArtwork] = useState([]);
    function updateArtwork(data) {
        setArtwork(data);
    }
    const [random, setRandom] = useState(-1);
    // function to call the fetch request.
    const fetchArtwork = () => {
        updateLoading(true);
        fetchRandom(random, updateArtwork, updateLoading);
    };
    // fetchArtork is called when the state of the random hook is changed.
    useEffect(() => fetchArtwork(), [random]);

    return (
        <View style={styles.container}>
            <RandomButton subject={'Randomize!'}
                onPress={() => {
                    setRandom(randomNumber(0, 55600));
                    console.log(random);
                }}
            />
            {/* Display activity indicator while fetch request is performed. Then display the scrollview with the image and info. */}
            {isLoading === true ? <ActivityIndicator style={{ margin: 5 }} size="small" color="darkorange" /> :
                (
                    <ScrollView>
                        <Image
                            style={styles.image}
                            source={{
                                uri: artwork[0] ? `https://www.artic.edu/iiif/2/${artwork[0].image_id}/full/843,/0/default.jpg` : null,
                                headers: {
                                    Accept: '*/*',
                                },
                            }}>
                        </Image>
                        <View style={{ marginHorizontal: 20, margin: 10 }}>
                            <Text style={styles.title}>{artwork[0] ? artwork[0].title : null}</Text>
                            <Text style={styles.artist_display}>{artwork[0] ? artwork[0].artist_display : null}</Text>
                            <Text style={styles.artist_display}>{artwork[0] ? artwork[0].medium_display : null}</Text>
                            <Text style={styles.artist_display}>{artwork[0] ? artwork[0].date_display : null}</Text>
                            <Text style={styles.artist_display}>{artwork[0] ? "The Art Institute of Chicago" : null}</Text>
                        </View>
                    </ScrollView>
                )}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.olive,
        alignItems: 'center',
    },
    button: {
        height: 50,
        width: 200,
    },
    image: {
        resizeMode: 'contain',
        aspectRatio: 1,
        width: window.width,
    },
    title: {
        color: colors.offwhite,
        fontSize: 20,
        fontFamily: 'Roboto',
        marginVertical: 5,
    },
    artist_display: {
        color: colors.offwhite,
        fontSize: 18,
    },
});
export default RandomArt;