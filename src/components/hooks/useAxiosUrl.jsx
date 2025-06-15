import axios from "axios";


const useAxiosUrl = axios.create({
    baseURL: 'http://localhost:5000'
});

export default useAxiosUrl;