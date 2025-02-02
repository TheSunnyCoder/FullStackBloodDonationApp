import axios from "axios"
const BASE_RUL="http://localhost:8000/api/v1";

export const publicRequest=axios.create({
    baseURL:BASE_RUL
})