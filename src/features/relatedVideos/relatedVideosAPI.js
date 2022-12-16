import axiosInstance from "../../utils/axios"

// http://localhost:9000/videos?tags_like=ui&tags_like=css&id_ne=2&_limit=2
// ['tags_like=javascript', 'tags_like=react']; // string banate join korbo

export const getRelatedVideos = async ({tags, id})=>{
  const limit = 4;
  let queryString = tags?.length > 0 ? tags.map(tag =>
    `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}`
    : `id_ne=${id}&_limit=${limit}` ;

  const response = await axiosInstance.get(`/videos?${queryString}`);

  return response.data
}