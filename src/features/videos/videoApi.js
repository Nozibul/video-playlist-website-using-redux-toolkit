import axiosInstance from "../../utils/axios"

export const getVideos = async ()=>{
  const response = await axiosInstance.apply.get('./videos');

  return response.data
}