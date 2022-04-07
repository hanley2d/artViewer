import React, {useState, useRef, useEffect} from 'react';
import { View, ScrollView, StyleSheet, FlatList, Text, Button } from 'react-native';
import fetchQuery from '../controller/FetchData';
import ListItem from './components/ListItem';
import { colors } from './components/colors';

const BrowseCollections = () => {

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
            <View>
                
            <ScrollView style={{height:50}} horizontal={true}>
                <Button color="orange" style={styles.button} title="impressionism"/>
                <Button style={styles.button} title="essentials"/>
                <Button style={styles.button} title="impressionism"/>
                <Button style={styles.button} title="impressionism"/>
            </ScrollView>
            </View>
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
                    {pagination.total ? "Items " + (pagination.offset + 1) + "-" + (pagination.offset + 10) + " of " + pagination.total : null}
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.olive,
    },
    button: {
        height: 100,
        color: 'orange'
    }
})

export default BrowseCollections;