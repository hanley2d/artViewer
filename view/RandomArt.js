import React, { useRef, useState, useEffect } from 'react';
import { Dimensions, View, Text, Image, StyleSheet, Animated, ActivityIndicator, ScrollView } from 'react-native';
import { colors } from './components/colors';
import RandomButton from './components/RandomButton';
import fetchRandom from '../controller/fetchRandom';

const window = Dimensions.get("window");

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
    const fetchArtwork = () => {
        updateLoading(true);
        fetchRandom(random, updateArtwork, updateLoading);
    };
    useEffect(() => fetchArtwork(), [random]);

    return (
        <View style={styles.container}>
            <RandomButton subject={'Randomize!'}
                onPress={() => {
                    setRandom(randomNumber(1, 116000));
                    console.log(random);
                    // onChangeSearch('modernism');
                }}
            />
            {isLoading === true ? <ActivityIndicator style={{ margin: 5 }} size="small" color="darkorange" /> :
                (
                    
                    <ScrollView>
                    <Animated.View >
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
                            </View>                       
                    </Animated.View>
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