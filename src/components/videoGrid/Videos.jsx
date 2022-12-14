import Loading from '../ui/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchVideos } from '../../features/videos/videosSlice';
import VideoItem from './VideoItem';


const Videos = () => {
 const dispatch = useDispatch()
 const {videos, isLoading, isError, error} = useSelector((state)=> state.videos); 
 
 const {tags, search, author, pagination: {limit, currentPage} } = useSelector(state => state.filters)


 useEffect(()=>{
   dispatch(fetchVideos({tags, search, author, limit, currentPage}));
 }, [dispatch, tags, search, author, limit, currentPage])



// Decide what to return 
let content ;

if(isLoading) content = <Loading />;  
if(!isLoading && isError){
  content = <div className="col-span-12">{error}</div> ;
}
if(!isLoading && !isError && videos?.length === 0) {
  content = <div className="col-span-12">No videos Found!!!</div> 
}
if(!isLoading && !isError && videos?.length > 0){
  content = videos.map((video)=>(
    <VideoItem key = {video.id} video={video} />
  ))
}

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 my-12">
        <div className="flex items-center space-x-2">
          {search && (
            <p className="text-lg text-gray-700">
              You searched for: <span className="font-bold">"{search}"</span>
            </p>
          )}
        </div>
      </div>
     <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
           {content}
        </div>
     </section>
    </section>
  )
}

export default Videos