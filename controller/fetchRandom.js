/**
 * File: fetchRandom.js
 * Author: David Hanley
 * Last modified: 2022-04-09
 * 
 * Description: this file fetches a random image from the API. 
 * There are 116019 items in the data so a random number from 0 to 116019 is chosen and the fields are set to a limit of one item.
 * Then the random number can be inserted into the page parameter to return only one item.
 * 
 * @param {*} random 
 * @param {*} updateArtwork 
 * @param {*} updateLoading 
 */

const fetchRandom = async (random, updateArtwork, updateLoading) => {
    const random_image = `https://api.artic.edu/api/v1/artworks?limit=1&fields=id,title,image_id,date_display,artist_display,medium_display&page=${random}`;
    // similar to the FetchData request, this functon is called with useEffect when the random number state is changed.
    // the random number is initialized to -1 so this function returns nothing on the initial page render.
    if (random === -1) {
        updateLoading(false);
        return;
    }
    try {
        const response = await fetch(random_image);
        const json_data = await response.json();
        updateArtwork(json_data.data);        
        console.log(json_data.data);
        updateLoading(false);

    } catch (error) {
        console.log(error);
    }
}
export default fetchRandom;