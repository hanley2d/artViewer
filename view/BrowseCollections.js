/**
 * File: BrowseCollections.js
 * Author: David Hanley
 * Last modified: 2022-04-09
 * 
 * Description: This file is the screen for the Browsing Collection. It is very similar to the ArtSearch screen, 
 * the difference being that the search queries are predetermined as buttons with subjects.
 * When the user pushes a button, the data for that particular subject is fetched.
 * The buttons are customized pressables that are placed in a scrollview that the user can slide horizontally.
 */

import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-paper';
import fetchQuery from '../controller/FetchData';
import ListItem from './components/ListItem';
import ScrollViewButton from './components/ScrollViewButton';
import { colors } from './components/colors';

const BrowseCollections = () => {

    const [isLoading, setIsLoading] = useState(false);
    function updateLoading(data) {
        setIsLoading(data);
    }
    const [searchQuery, setSearchQuery] = useState('');
    function onChangeSearch(value) {
        setSearchQuery(value);
    }
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
    useEffect(() => { fetchArtwork(); }, [currPage, searchQuery]);

    const fetchArtwork = () => {
        updateLoading(true);
        fetchQuery(searchQuery, updateArtwork, updatePagination, updateLoading, currPage);
    };

    return (

        <View style={styles.container}>
            <View style={{ marginVertical: 10 }}>
                <ScrollView horizontal={true} contentContainerStyle={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <ScrollViewButton subject={'Impressionism'}
                        onPress={() => {
                            setCurrPage(1); 
                            onChangeSearch('impressionism');
                            moveToTop();
                        }}
                    />
                    <ScrollViewButton subject={'Essentials'}
                        onPress={() => { setCurrPage(1); onChangeSearch('essentials'); moveToTop(); }}
                    />
                    <ScrollViewButton subject={'Modernism'}
                        onPress={() => { setCurrPage(1); onChangeSearch('modernism'); moveToTop(); }}
                    />
                    <ScrollViewButton subject={'Landscapes'}
                        onPress={() => { setCurrPage(1); onChangeSearch('landscapes'); moveToTop(); }}
                    />
                    <ScrollViewButton subject={'Roman'}
                        onPress={() => { setCurrPage(1); onChangeSearch('roman'); moveToTop(); }}
                    />
                    <ScrollViewButton subject={'Woodblock'}
                        onPress={() => { setCurrPage(1); onChangeSearch('woodblock'); moveToTop(); }}
                    />
                </ScrollView>
            </View>
            {/* Display the activity indicator or not */}
            {isLoading === true ? <ActivityIndicator style={{ margin: 5 }} size="small" color="darkorange" /> : null}
            <FlatList
                ref={flatListRef}
                style={styles.flatlist}
                data={artwork}
                renderItem={({ item }) => (
                    <ListItem item={item} />
                )}
                keyExtractor={item => item.id}
            />
            {/* Pagination display logic */}
            <View style={{ flexDirection: "row", justifyContent: 'center', }}>
                {pagination !== null && pagination.current_page > 1 ? (
                    <Button
                        style={styles.navButtons}
                        onPress={() => { setCurrPage(currPage - 1); moveToTop(); }}
                        labelStyle={{ color: colors.bright_blue, fontSize: 16 }}
                    >Prev</Button>
                ) : null}
                {<Text style={styles.itemsDisplayText}>
                    {pagination.total ? "Items " + (pagination.offset + 1) + "-" + (pagination.total > 10? pagination.offset + 10 : pagination.total) + " of " + pagination.total : null}
                </Text>}
                {pagination !== null && pagination.current_page < pagination.total_pages ? (
                    <Button
                        style={styles.navButtons}
                        onPress={() => { setCurrPage(currPage + 1); moveToTop(); }}
                        labelStyle={{ color: colors.bright_blue, fontSize: 16, }}
                        mode="text"
                    >Next</Button>
                ) : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.olive,
        paddingHorizontal: 20,
    },
    scrollview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        alignItems: 'center',
        backgroundColor: colors.olive,
        padding: 10,
    },
    flatlist: {
        width: '100%',
        margin: 0,
    },
    itemsDisplayText: {
        color: colors.offwhite,
        fontSize: 16,
        alignSelf: 'center',
    },
    navButtons: {
        marginHorizontal: 20,
        height: 40,
    },
})

export default BrowseCollections;