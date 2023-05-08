import { getMovieById } from '@/api_doc/getMovieDetail'
import MoveDetail from '@/components/movie/movie_detail'
import { notFound } from 'next/navigation'
import React from 'react'

 async function delay(number){
  setTimeout(()=>{

  },number)

 }

const Page = async({params}) => {
  await delay(5000)
 
  const movie=await getMovieById(params.id)
  if(movie.success===false){
    notFound();
  }
  
  return (
    <div >
      <MoveDetail movie={movie}/>
      </div>
  )
}

export default Page