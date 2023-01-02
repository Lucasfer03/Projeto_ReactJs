import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-0k6t.onrender.com"
})