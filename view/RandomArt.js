import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {colors} from './components/colors';

const RandomArt = () => {

    return (
        <View style={styles.container}>
            <Text>RandomArt</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.olive,
    }
})
export default RandomArt;