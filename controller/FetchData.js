import { api_query, image_api } from "../model/API_data";

export const fetchQuery = async (query) => {
    try {
        const response = await fetch(api_query);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}
