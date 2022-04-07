import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { colors } from './colors.js';

const ListItem = (item) => {

    const navigation = useNavigation();

    var item_color = "";
    if (item.item.color !== null) {
        item_color = `hsl(${item.item.color.h}, ${item.item.color.s}%, ${item.item.color.l}%)`;
    }

    return (
        <Card style={styles.card}>
            <Card.Content style={styles.content}>
                <Card.Cover source={{ uri: `https://www.artic.edu/iiif/2/${item.item.image_id}/full/843,/0/default.jpg` }} />
                <Text style={styles.title}>{item.item.title}</Text>
                <Text style={styles.artist_display}>{item.item.artist_display}</Text>
            </Card.Content>
            <Button
                style={styles.button}
                labelStyle={{ color: item_color !== "" ? item_color : colors.bright_blue, fontSize: 16 }}
                onPress={() => {
                    navigation.navigate('ArtDetail', {
                        item: item,
                    });
                }}>More detail
            </Button>

        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    content: {
        margin: 0,
        padding: 0,
    },
    title: {
        fontSize: 18,
        color: colors.dark_green,
        marginTop: 5,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },
    artist_display: {
        fontSize: 16,
        color: colors.dark_green
    },
    button: {
        alignSelf: 'flex-start'
    }
})

export default ListItem;