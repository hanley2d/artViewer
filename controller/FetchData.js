import React, { useEffect } from 'react';

export const fetchQuery = async (query, setArtwork, artwork) => {
    const api_query = `https://api.artic.edu/api/v1/artworks/search?q=${query}&limit=10&fields=id,title,image_id,date_display,artist_display,place_of_origin,medium_display,color`

    try {
        const response = await fetch(api_query);
        const json_data = await response.json();
        //console.log(json_data.data);
        setArtwork(json_data.data);
        console.log(artwork);
    } catch (error) {
        console.log(error);
    }
}

export const getImage = (image_id) => {
    image_id;
    return image_api;
}