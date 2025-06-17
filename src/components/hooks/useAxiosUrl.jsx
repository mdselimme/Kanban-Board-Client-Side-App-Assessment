import axios from "axios";


const useAxiosUrl = axios.create({
    baseURL: 'https://kanban-board-server-side-app-assessment.onrender.com'
});

export default useAxiosUrl;