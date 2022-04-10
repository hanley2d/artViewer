/**
 * File: FetchData.js
 * Author: David Hanley
 * Last modified: 2022-04-09
 * 
 * Description: this file contains the main fetch request for both the ArtSearch.js and BrowseCollection.js files. 
 * It fetches the requested data (from query and currPage) from the API and updates the artwork, pagination, and loading states.
 * 
 * @param {*} query 
 * @param {*} updateArtwork 
 * @param {*} updatePagination 
 * @param {*} updateLoading 
 * @param {*} currPage 
 * 
 */

const fetchQuery = async (query, updateArtwork, updatePagination, updateLoading, currPage) => {
    const api_query = `https://api.artic.edu/api/v1/artworks/search?q=${query}&limit=10&fields=id,title,image_id,date_display,artist_display,medium_display,color&page=${currPage}`
    // the useEffect hook is used to call this function so this if statement is used to return nothing if the fetch query is empty which will happen when the page initially renders.
    if (query === "") {
        updateLoading(false);
        return;
    }
    try {
        // if successful, set artwork and pagination states with response data and turn off activity indicator.
        const response = await fetch(api_query);
        const json_data = await response.json();
        //console.log(json_data);
        updateArtwork(json_data.data);
        updatePagination(json_data.pagination);
        updateLoading(false);
    // catches and logs the error if one occurs
    } catch (error) {
        console.log(error);
    }
}
export default fetchQuery;