import axios from "axios";



const base_url = "http://localhost:8000/api"


export const api = axios.create({
    baseURL: base_url
})