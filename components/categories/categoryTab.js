import Link from 'next/link'
import React from 'react'

const CategoryTabs
 = ({categories=[],active={}}) => {
   
  return (
    <div className='p-5 m-5  bg-gray-500 flex items-center justify-center gap-7'>
        {
            categories && categories.slice(1,14).map(genre=>(
              
            <Link key={genre.id} classname={`${active===genre.id ? "underline":""} py-5 px-4`} href={`/?genre=${genre.id}`}>{genre.name}</Link>
          
            ))
        }

    </div>
  )
}

export default CategoryTabs
