import React from 'react'

const  Filters =({setfiltereditems})=> {
  return (
    <div className='mt-20'>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button type="button" className="text-black hover:text-white border border-gray-400 bg-white hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 "  onClick={()=>setfiltereditems("All")}>All categories</button>
                <button type="button" className="text-gray-900 border border-white hover:bg-gray-300  hover:border-gray-400  bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 " onClick={()=>setfiltereditems("Shoes")}>Shoes</button>
                <button type="button" className="text-gray-900 border border-white  hover:bg-gray-300  hover:border-gray-400  bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 " onClick={()=>setfiltereditems("Bottles")}>Bottles</button>
                <button type="button" className="text-gray-900 border border-white hover:bg-gray-300  hover:border-gray-400  bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 " onClick={()=>setfiltereditems("Electronics")}>Electronics</button>
                <button type="button" className="text-gray-900 border border-white hover:bg-gray-300  hover:border-gray-400  bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 " onClick={()=>setfiltereditems("Caps")}>Caps</button>
            </div>
    </div>
  )
}

export default Filters
