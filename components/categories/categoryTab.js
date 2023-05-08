import Link from 'next/link'
import React from 'react'

const CategoryTabs
 = ({categories=[],active={}}) => {
   
  return (
    <div className='p-5 m-5 flex items-center justify-center flex-wrap  bg-slate-800 gap-7'>
        {
            categories && categories.slice(1,14).map(genre=>(
              
            <Link key={genre.id} className='w-full h-full' href={`/?genre=${genre.id}`} legacyBehavior>
              <a classname={` w-2 h-2 ${active==genre.id ? "bg-slate-50":""} py-5 px-4`} >
                {genre.name}
                </a></Link>
          
            ))
        }

    </div>
  )
}

export default CategoryTabs
