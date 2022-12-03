import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
 import { tagsSelected, tagsRemoved } from "../../features/filter/filterSlice"
 
const SingleTag = ({title}) => {
  const dispatch = useDispatch()
  const {tags: selectedTags} = useSelector((state)=> state.filters);

  const isSelected = selectedTags.includes(title) ? true : false ;
  const handleSelect = () =>{
    if(isSelected){
      dispatch(tagsRemoved(title))
    }
    else {
      dispatch(tagsSelected(title))
    }
  }

 
  const style = isSelected 
        ? "bg-blue-700 text-white px-4 py-1 rounded-full cursor-pointer"
        : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"

  return (
    <div onClick={handleSelect} className={style}>
        {title}
    </div>
  )
}

export default SingleTag ;



