import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, Animated } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { fetchQuery } from '../controller/FetchData';
import ListItem from './components/ListItem';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const ArtSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const [artwork, setArtwork] = useState([]);
    const [pagination, setPagination] = useState([]);

    return (
        <View style={styles.container}>
            <Searchbar
                style={styles.searchbar}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                onIconPress={() => { 
                    fetchQuery(searchQuery, setArtwork, artwork);
                }}
                onSubmitEditing={() => {
                    fetchQuery(searchQuery, setArtwork, artwork);
                }}
            />          
            <FlatList
                data={artwork}                
                renderItem={({ item }) => (
                    <ListItem item={item} />
                )}
                keyExtractor={item => item.id}
            />

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'hsl(197, 37%, 41%)',
        padding: 20,
        alignItems: 'center',
        textAlign: 'center',
    },
    searchbar: {
        marginTop: 100
    },
    text: {
        color: '#000',
        fontSize: 26,
    },
});

export default ArtSearch;