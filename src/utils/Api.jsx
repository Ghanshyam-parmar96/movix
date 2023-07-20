import axios from 'axios'
const TOKEN = import.meta.env.VITE_APP_TMBD_TOKEN;
const baseUrl = import.meta.env.VITE_APP_BASE_URL;
const apiKey = import.meta.env.VITE_APP_TMBD_API_KEY

const headers = {
    Authorization : "bearer "+ TOKEN,    
}

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(baseUrl+url, {headers,params,})
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}