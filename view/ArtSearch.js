import React, { useState, useRef, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import fetchQuery from '../controller/FetchData';
import ListItem from './components/ListItem';

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
    // use effect hook will call fetchArtwork only when the state of currPage changes
    // this occurs when the user clicks next or previous page buttons 
    useEffect(() => { fetchArtwork(); }, [currPage]) 
   
    const fetchArtwork = () => {
        setIsLoading(true);
        fetchQuery(searchQuery, updateArtwork, updatePagination, updateLoading, currPage);
    };

    return (
        <View style={styles.container}>
            <Searchbar
                style={styles.searchbar}
                placeholder="Search"
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
            {isLoading === true ? <ActivityIndicator style={{ margin: 5 }} size="large" color="#0000ff" /> : <Text>{pagination.total ? "Displaying items " + (pagination.offset + 1) + "-" + (pagination.offset + 10) + " of " + pagination.total + "." : null}</Text>}
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
                    <Button style={styles.navButtons} onPress={() => setCurrPage(currPage-1)}>Previous</Button>
                ) : null}
                {pagination !== null && pagination.current_page < pagination.total_pages ? (
                    <Button style={styles.navButtons} onPress={() => setCurrPage(currPage+1)}>Next</Button>
                ) : null}
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'hsl(197, 37%, 41%)',
        padding: 10,
        alignItems: 'center',
        textAlign: 'center',
    },
    searchbar: {
        marginTop: 50
    },
    text: {
        color: '#000',
        fontSize: 26,
    },
    flatlist: {
        width: '100%',
    },
    navButtons: {
        padding: 2,
        marginHorizontal: 50,
        backgroundColor: '#000'
    },
});

export default ArtSearch;