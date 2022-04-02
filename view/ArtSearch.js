import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, Button, Animated } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { fetchQuery } from '../controller/FetchData';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const ArtSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    var json_data;
    return (
        <View style={styles.container}>
            <Searchbar
                style={styles.searchbar}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                onIconPress={() => {json_data = fetchQuery(searchQuery);}}
                onSubmitEditing={() => {json_data = fetchQuery(searchQuery);}}
            />
            <FlatList
            data={json_data}
            renderItem={({item}) => (
                <View></View>
            )}
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