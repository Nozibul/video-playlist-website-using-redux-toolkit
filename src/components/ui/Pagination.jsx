import { useDispatch, useSelector } from 'react-redux'
import { setPage , setLimit} from '../../features/filter/filterSlice'


const Pagination = () => {
    const dispatch = useDispatch()
    const {pagination: {limit, currentPage}} = useSelector((state)=> state.filters)
    
  
    return (
        <section className="pt-12">
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
          <select
            value={limit}
            onChange={(e) => dispatch(setLimit(e.target.value))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={8}>5</option>
            <option value={10}>10</option>
            
          </select>
          <button
            className="px-4 py-1 rounded-full bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => dispatch(setPage(currentPage - 1))}
    
          >
            Prev
          </button>
         
          <button
            className="px-4 py-1 rounded-full bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => dispatch(setPage(currentPage + 1))}
          >
            Next
          </button>
        </div>
      </section>
  )
}

export default Pagination