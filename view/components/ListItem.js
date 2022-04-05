import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import ItemDetail from './ItemDetail';

const ListItem = (item) => {
    //console.log(item);  
    if (item.item.color !== null) { 
        const item_color = `hsl(${item.item.color.h}, ${item.item.color.s}%, ${item.item.color.l}%)`;
    }
    const navigation = useNavigation();
    return (
        <Card style={styles.card}>
            <Card.Content >
                <Card.Cover source={{ uri: `https://www.artic.edu/iiif/2/${item.item.image_id}/full/843,/0/default.jpg` }} />
                <Title>{item.item.title}</Title>
                <Paragraph>{item.item.artist_display}</Paragraph>
                <Card.Actions style={styles.actions}>
                    <Button
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('ArtDetail', {
                                item: item,
                            });
                        }}>More detail</Button>
                </Card.Actions>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginTop: 10,
    },
    actions: {
        flex: 1,
        padding: 0,
    },
    button: {
        margin: 0,
    }
})

export default ListItem;