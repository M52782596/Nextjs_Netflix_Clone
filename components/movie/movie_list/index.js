"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const MovieList = ({movies=[], title}) => {
    const router=useRouter();
  return (
    <div>
        <h5 className='my-3 px-4 py-5 font-bold bg-slate-950'> {title}</h5>
    <div className='flex items-center justify-center gap-3 flex-wrap '>
         
       
        {
         movies && movies.map(movie=>{
            return (
                <div className='m-w-[470px] relative ' key={movie.id}>
                   
                 <Image onClick={()=>router.push(`/movie/${movie.id}`)} src={`https://image.tmdb.org/t/p/original${movie?.poster_path||movie?.backdrop_path}`} className='flex-auto cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110' width={200} height={150}/>
                 <div className='absolute bottom-0 p-3'>
                  <div className='font-bold'>{movie.title}</div>

                 </div>
                 
                </div>
            )
         })

        }
    

    </div>
    </div>
  )
}

export default MovieList