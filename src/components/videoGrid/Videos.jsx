import VideoItem from './VideoItem'
import Loading from '../ui/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchVideos } from '../../features/videos/videosSlice';

const Videos = () => {
 const dispatch = useDispatch()
 const {videos, isLoading, isError, error} = useSelector((state)=> state.videos); 
 
//  const {tags, search} = useSelector(state => state.filters)

 useEffect(()=>{
   dispatch(fetchVideos());
 }, [dispatch])


// Decide what to return 
let content ;

if(isLoading) content = <Loading />;  
if(!isLoading && isError){
  content = <div className="col-span-12">{error}</div> ;
}
if(!isLoading && !isError && videos.length === 0) {
  content = <div className="col-span-12">No videos Found!!!</div> 
}
if(!isLoading && !isError && videos?.length > 0){
  content = videos.map((video)=>(
    <VideoItem key = {video.id} video={video} />
  ))
}

  return (
    <section className="pt-12">
     <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
           {content}
        </div>
     </section>
    </section>
  )
}

export default Videos