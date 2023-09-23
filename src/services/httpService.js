import axios from "axios"

axios.interceptors.request.use(
    function (config) {

        config.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`
        config.baseURL = process.env.REACT_APP_SERVERIP
        return config
    },
    function (error) {
        return Promise.reject(error);
    }
)

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}