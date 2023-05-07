import { getMovieById } from '@/api_doc/getMovieDetail'
import MoveDetail from '@/components/movie/movie_detail'
import { notFound } from 'next/navigation'
import React from 'react'



const Page = async({params}) => {
 
  const movie=await getMovieById(params.id)
  if(!movie.succes){
    notFound();
  }
  console.log(movie)
  return (
    <div >
      <MoveDetail movie={movie}/>
      </div>
  )
}

export default Page