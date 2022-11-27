import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/navbar/Navbar'
import Tags from '../components/tags/Tags'
import Pagination from '../components/ui/Pagination'
import Videos from '../components/videoGrid/Videos'

const Home = () => {
  return (
    <>
     <Navbar />
     <Tags />
     <Videos />
     <Pagination />
     <Footer />
    </>
  )
}

export default Home