import {getCategories, getCategoryName } from '@/api_doc/getCategories';
import { getMoviesByGenreId, getPopularMovie, getTopRatedMovie } from '@/api_doc/getMovies'
import CategoryTabs from '@/components/categories/categoryTab';
import MovieList from '@/components/movie/movie_list';


const categoryName=async(categories)=>{
  let dataArr=[]
    const data=await categories;
     dataArr=[...data];
    console.log(dataArr);

}

export  default async function Home({searchParams}) {
  const [category,categories,moviesByGenre,popular,top_rated]=await Promise.all([
    getCategoryName(searchParams.genre),
    getCategories(),
    getMoviesByGenreId(searchParams.genre),
    getPopularMovie(),
    getTopRatedMovie()
  ])

 
  const slice_popular=popular.length>10 ? 10 : popular.length;
  const slice_top=top_rated.length>10 ? 10 : top_rated.length;
  
 

  
   

 
   
     
  
  return (
    <div>
      <CategoryTabs categories={categories} active={searchParams.genre}/>
      {
        moviesByGenre && <MovieList movies={moviesByGenre} title={'Categories'} /> 
      } 
      
       <MovieList movies={popular.slice(1,slice_popular)} title={'Popular Movies'}  />
        <MovieList movies={top_rated.slice(1,slice_top)} title={'Top Rated Movies'}  />

    
    
    </div>
  )
}
