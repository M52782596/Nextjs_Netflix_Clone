import Image from 'next/image'
import React from 'react'

const MoveDetail = ({movie={}}) => {
  return (
    < div className='relative p-7 h-screen'>
    
      <Image className='object-cover' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} fill objectFit='cover'  />
      
    

      <div className='absolute '>
        <div className='text-4xl font-bold my-3'>{movie.title} </div>
        <div className='w-1/2'>{movie.overview}</div>
        <div className='my-2'>released-{movie.release_date} </div>
        <div className=' w-20 p-3 text-center cursor-pointer bg-gray-50 text-black  rounded-lg '>Play</div>
      
      </div>
   </div>
  )
}

export default MoveDetail