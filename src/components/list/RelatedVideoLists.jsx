import RelatedVideoListItem from "./RelatedVideoListItem";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/Loading";


const RelatedVideoLists = ({curVideoId, tags}) => {
 const {relatedVideos, isLoading, isError, error} = useSelector((state)=> state.relatedVideos)
 const dispatch = useDispatch();

 useEffect(()=>{
   dispatch(fetchRelatedVideos({tags, id: curVideoId}))
 }, [dispatch, tags, curVideoId])


 // decide what to render
 let content = null ;
 if(isLoading) content = <Loading />
 if(!isLoading && isError){
  content = <div className="col-span-12">{error}</div> ;
 }
 if(!isLoading && !isError && relatedVideos?.length === 0){
  content = <div className="col-span-12">No Related videos Found!!!</div> ;
 }
 if(!isLoading && !isError && relatedVideos?.length > 0 ){
    content = relatedVideos.map(relatedVideo => (
      <RelatedVideoListItem key={relatedVideo.id} relatedVideos={relatedVideo} />
    ))
 }


  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
   </div>
  )
}

export default RelatedVideoLists