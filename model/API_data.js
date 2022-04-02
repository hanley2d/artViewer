/**
 * Search artwork with keyword.
 * Returns 10 items with their id, title, image_id, date, artist, origin, medium and color
 */

 export const api_query = `https://api.artic.edu/api/v1/artworks/search?q=${q}&page=1&limit=10&fields=id,title,image_id,date_display,artist_display,place_of_origin,medium_display,color`;

 // API used to display image
 export const image_api = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;

 // random image fetch
 // There are 116019 items in the data so need to choose a random number from 0 to 116019.
 export const random_image = `https://api.artic.edu/api/v1/artworks?page=${random_number}&limit=1&fields=id,title,image_id,date_display,artist_display,place_of_origin,medium_display,color`