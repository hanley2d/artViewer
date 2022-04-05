const fetchQuery = async (query, updateArtwork, updatePagination, updateLoading, currPage, updateCurrPage) => {
    const api_query = `https://api.artic.edu/api/v1/artworks/search?q=${query}&limit=10&fields=id,title,image_id,date_display,artist_display,place_of_origin,medium_display,color&page=${currPage}`
    
    try {
        const response = await fetch(api_query);
        const json_data = await response.json();
        console.log(json_data.pagination);
        updateArtwork(json_data.data);
        updatePagination(json_data.pagination);
        updateLoading(false);

    } catch (error) {
        console.log(error);
    }
}

export default fetchQuery;