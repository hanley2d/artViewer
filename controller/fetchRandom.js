// random image fetch
// There are 116019 items in the data so need to choose a random number from 0 to 116019.
//  export const random_image = `https://api.artic.edu/api/v1/artworks?page=${random_number}&limit=1&fields=id,title,image_id,date_display,artist_display,place_of_origin,medium_display,color`

const fetchRandom = async (random, updateArtwork, updateLoading) => {
    const random_image = `https://api.artic.edu/api/v1/artworks?limit=1&fields=id,title,image_id,date_display,artist_display,medium_display&page=${random}`;
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