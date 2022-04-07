import React from 'react';
import { Pressable, Text, StyleSheet, Animated } from 'react-native';
import { colors } from './colors';

const RandomButton = ({ subject, onPress }) => {

    const touchFeedback = new Animated.Value(1);
    const fadeIn = () => {
        Animated.timing(touchFeedback, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };
    const fadeOut = () => {
        Animated.timing(touchFeedback, {
            toValue: 0.4,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Animated.View style={[styles.container, { opacity: touchFeedback, }]}>
            <Pressable
                onPressIn={fadeOut}
                onPressOut={fadeIn}
                onPress={onPress}
            >
                <Text style={{color: colors.dark_green, fontSize: 16,}}>{subject}</Text>
            </Pressable>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginHorizontal: 2,
        marginVertical: 10,
        backgroundColor: colors.green_beige,
        borderRadius: 10,

    }
})

export default RandomButton;