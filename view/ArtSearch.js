import React, { useState, useRef, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import fetchQuery from '../controller/FetchData';
import ListItem from './components/ListItem';
import { colors } from './components/colors';

const ArtSearch = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    function updateLoading(data) {
        setIsLoading(data);
    }
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const flatListRef = useRef();
    function moveToTop() {
        if (artwork.length > 0) {
            flatListRef.current.scrollToIndex({ index: 0 })
        }
    };

    const [artwork, setArtwork] = useState([]);
    function updateArtwork(data) {
        setArtwork(data);
    }
    const [pagination, setPagination] = useState({});
    function updatePagination(data) {
        setPagination(data);
    }
    // state to manage the current page
    const [currPage, setCurrPage] = useState(1);
    // use effect hook will call fetchArtwork only when the state of currPage changes.
    // this occurs when the user clicks next or previous page buttons and also on initial page render.
    // because the query data is empty on initial render, no data is actually fetched so no artwork is loaded.
    useEffect(() => { fetchArtwork(); }, [currPage]);

    const fetchArtwork = () => {
        updateLoading(true);
        fetchQuery(searchQuery, updateArtwork, updatePagination, updateLoading, currPage);
    };

    return (        
        <View style={styles.container}>
            <Searchbar
                style={styles.searchbar}
                theme={{ colors: { text: colors.dark_green } }}
                placeholder="Artwork Search"
                placeholderTextColor={'gray'}
                onChangeText={onChangeSearch}
                value={searchQuery}
                onIconPress={() => {
                    setCurrPage(1);
                    fetchArtwork();
                    moveToTop();
                }}
                onSubmitEditing={() => {
                    setCurrPage(1);
                    fetchArtwork();
                    moveToTop();
                }}
            />
            {isLoading === true  ? <ActivityIndicator style={{ margin: 5 }} size="small" color="darkorange" /> : null}
            <FlatList
                ref={flatListRef}
                style={styles.flatlist}
                data={artwork}
                renderItem={({ item }) => (
                    <ListItem item={item} />
                )}
                keyExtractor={item => item.id}
            />
            <View style={{ flexDirection: "row" }}>
                {pagination !== null && pagination.current_page > 1 ? (
                    <Button 
                        style={styles.navButtons} 
                        onPress={() => { setCurrPage(currPage - 1); moveToTop(); }}
                        labelStyle={{ color: colors.teal, fontSize: 16 }}    
                    >Prev</Button>
                ) : null}
                {<Text style={styles.itemsDisplayText}>
                {pagination.total ? "Items " + (pagination.offset + 1) + "-" + (pagination.total > 10? pagination.offset + 10 : pagination.total) + " of " + pagination.total : null}
                </Text>}
                {pagination !== null && pagination.current_page < pagination.total_pages ? (
                    <Button 
                        style={styles.navButtons} 
                        onPress={() => { setCurrPage(currPage + 1); moveToTop(); }}
                        labelStyle={{ color: colors.bright_blue, fontSize: 16,}}
                        mode="text"
                        >Next</Button>
                ) : null}
            </View>
                
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.olive,
        paddingHorizontal: 20,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },
    searchbar: {
        marginTop: 10,
        backgroundColor: colors.green_beige,
        borderRadius: 10,
        marginBottom: 10,
    },
    text: {
        color: colors.offwhite,
        fontSize: 16,
    },
    itemsDisplayText: {
        color: colors.offwhite,
        fontSize: 16,
        alignSelf: 'center',
    },
    flatlist: {
        width: '100%',
        margin: 0,
    },
    navButtons: {
        marginHorizontal: 20,
        height: 40,
    },
});

export default ArtSearch;