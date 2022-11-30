import React from 'react'
import Tags from '../components/tags/Tags'
import Pagination from '../components/ui/Pagination'
import Videos from '../components/videoGrid/Videos'

const Home = () => {
  return (
    <>
     <Tags />
     <Videos />
     <Pagination />
    </>
  )
}

export default Home