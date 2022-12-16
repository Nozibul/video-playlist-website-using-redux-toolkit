import axiosInstance from "../../utils/axios";

export const getVideo = async(id)=>{
    const response = await axiosInstance.get(`/videos/${id}`)
    
    return response.data ;
}  

export const updateReaction = async({id, reaction}) =>{
    const { data } = await axiosInstance.get(`/videos/${id}`)

    if(data){
       let updatedReaction = reaction === 'like' ? {likes: data.likes + 1 } : {unlikes: data.unlikes + 1 }
    
       const response = await axiosInstance.patch(`/videos/${id}`, updatedReaction);
       return response.data ;
    };
}