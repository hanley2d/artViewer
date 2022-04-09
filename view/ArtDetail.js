/**
 * File: ArtDetail.js
 * Author: David Hanley
 * Last modified: 2022-04-09
 * 
 * Description: This screen is displayed when the user presses the "more details" button on one of the flatlist items in ArtSearch.js and BrowseCellections.js.
 * 
 */

import React, { useRef, useEffect } from 'react';
import { Dimensions, View, Text, Image, StyleSheet, Animated } from 'react-native';
import { colors } from './components/colors';

// window size is used for the maximum width of the image in order to maintain the proper aspect ratio
const window = Dimensions.get("window");
const ArtDetail = ({ route, navigation }) => {
    // item is passed to this page from ListItem.js using the useNavigation hook from @react-navigation/native
    const { item } = route.params;
    // image is faded in upon page render to make it a bit less abrupt.
    // perhaps not necessary but I wanted to encorporate some animation in my project
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => fadeIn(), []);

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };

    return (
        <View style={styles.container}>
            <Animated.View style={{ opacity: fadeAnim }}>
                <Image 
                    style={styles.image}
                    source={{
                        uri: `https://www.artic.edu/iiif/2/${item.item.image_id}/full/843,/0/default.jpg`,
                        headers: {
                            Accept: '*/*',
                        },
                    }}>
                </Image>
                <View style={{ marginHorizontal: 20, }}>
                    <Text style={styles.title}>{item.item.title}</Text>
                    <Text style={styles.artist_display}>{item.item.artist_display}</Text>
                    <Text style={styles.artist_display}>{item.item.medium_display}</Text>
                    <Text style={styles.artist_display}>{item.item.date_display}</Text>
                    <Text style={styles.artist_display}>The Art Institute of Chicago</Text>
                </View>
            </Animated.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.olive,
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

export default ArtDetail;