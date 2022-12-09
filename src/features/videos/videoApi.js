import axiosInstance from "../../utils/axios"

export const getVideos = async (tags, search)=>{
  // let queryString = '';

  // if(tags?.length > 0){
  //   queryString += tags.map(tag=> `tags_like=${tag}`).join('&')
  // }
  // if(search !== ""){
  //   queryString += `&q=${search}` ;
  // }
  // if(author){
  //   queryString += `author_like=${author}` 
  // }

  const response = await axiosInstance.get("/videos");

  return response.data
}