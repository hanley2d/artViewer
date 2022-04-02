export const fetchQuery = async (query) => {
    const api_query = `https://api.artic.edu/api/v1/artworks/search?q=${query}&page=1&limit=10&fields=id,title,image_id,date_display,artist_display,place_of_origin,medium_display,color`
    try {
        const response = await fetch(api_query);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.log(error);
    }
}

export const getImage = (image_id) => {
    image_id;
    return image_api;
}