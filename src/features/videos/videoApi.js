import axiosInstance from "../../utils/axios"

export const getVideos = async ({tags, search, author, limit, currentPage})=>{
  let queryString = '';

  if(tags?.length > 0){
    queryString += tags.map((tag) =>(author ? `&tags_like=${tag}` : `tags_like=${tag}`))
    .join('&');
  }
  if(search !== ""){
    queryString += `&q=${search}` ;
  }
  if(author){
    queryString += `author_like=${author}` 
  }
  if(limit && currentPage){
     queryString += tags.length > 0 || search || author 
          ? `&_page=${currentPage}&_limit=${limit}`
          : `_page=${currentPage}&_limit=${limit}`
  }


  const response = await axiosInstance.get(`/videos/?${queryString}`);

  return response.data
};