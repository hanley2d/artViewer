import React, { useRef, useEffect } from 'react';
import { Dimensions, View, Text, Image, StyleSheet, Animated, Button } from 'react-native';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const ArtDetail = ({ route, navigation }) => {

    const { item } = route.params;

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
        <View>
            <Animated.View style={{ opacity: fadeAnim }}>
                <Image
                    style={styles.image}
                    source={{
                        uri: `https://www.artic.edu/iiif/2/${item.item.image_id}/full/843,/0/default.jpg`,
                        headers: {
                            Accept: '*/*',
                        },
                    }}></Image>
                <Text style={{ fontSize: 30, color: '#fff' }}>{item.item.title}</Text>
                <Text style={{color: '#fff'}}>{item.item.artist_display}</Text>
            </Animated.View>            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'hsl(197, 37%, 41%)',
        padding: 8,
        alignItems: 'center',
        textAlign: 'center',
    },
    image: {
        resizeMode: 'contain',
        aspectRatio: 1,
        width: window.width,
    },
    buttons: {
        flexBasis: 100,
        justifyContent: 'space-evenly',
        marginVertical: 20,
    },
});

export default ArtDetail;