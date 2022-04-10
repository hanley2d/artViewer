/**
 * File: FetchData.js
 * Author: David Hanley
 * Last modified: 2022-04-09
 * 
 * Description: this file contains the main fetch request for both the ArtSearch.js and BrowseCollection.js files. 
 * It fetches the requested data (from query and currPage) from the API and updates the artwork, pagination, and loading states. 
 */

/**
 * @function fetchQuery
 * @description - fetches the query data from the API for both the ArtSearch and BrowseCollections screens.
 * @param {*} query - the query that was entered by the user in the search bar or from one of the buttons in BrowseCollections.js
 * @param {*} updateArtwork - helper function to load response object into artwork object array to be put in flatlist
 * @param {*} updatePagination - helper function to load response of pagination that will keep track of total items and pages
 * @param {*} updateLoading - helper function to change loading state
 * @param {*} currPage - state of the current page that the user is accessing.
 * @returns nothing if the query is empty. else it updates the artwork, pagination and loading states. 
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