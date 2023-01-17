import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://video-playlist-server.vercel.app",
});

export default axiosInstance ;