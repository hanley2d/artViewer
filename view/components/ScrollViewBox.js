import React, { useRef } from 'react';
import { Pressable, Text, StyleSheet, Animated } from 'react-native';

const ScrollViewBox = (props) => {

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
        <Animated.View style={{ backgroundColor: props.color, opacity: touchFeedback }}>
            <Pressable
                style={styles.container}
                onPressIn={fadeOut}
                onPressOut={fadeIn}
            >
                <Text>{props.subject}</Text>
            </Pressable>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center'
    }
})



export default ScrollViewBox;