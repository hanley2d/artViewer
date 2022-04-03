import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const ListItem = (item) => {    
    //console.log(item);
    return (
        <Card>
            <Card.Content>
                <Card.Cover source={{ uri: `https://www.artic.edu/iiif/2/${item.item.image_id}/full/843,/0/default.jpg` }} />
                <Title>{item.item.title}</Title>
                <Paragraph>{item.item.artist_display}</Paragraph>
                <Card.Actions>
                    <Button>More detail</Button>
                </Card.Actions>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({

})

export default ListItem;