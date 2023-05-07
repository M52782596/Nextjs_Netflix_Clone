const API_KEY=process.env.API_KEY;
const BASE_PATH=process.env.BASE_PATH;


export async function getPopularMovie(page=1){
    try{
      const data=await fetch(`${BASE_PATH}/movie/popular?api_key=${API_KEY}&page=${page}`)
      const response=await data.json();
      return response.results;
    }catch(error){
        throw new Error("popular movie error",error)
    }
    
}
export async function getTopRatedMovie(page=1){
    try{
        const data=await fetch(`${BASE_PATH}/movie/top_rated?api_key=${API_KEY}&page=${page}`)
        const response=await data.json();
      return response.results;
      }catch(error){
          throw new Error("top rated movie error",error)
      }
}
export async function getLatestMovie(page=1){
    try{
        const data=await fetch(`${BASE_PATH}/movie/latest?api_key=${API_KEY}&page=${page}`)
        const response=await data.json();
      return response.results;
      }catch(error){
          throw new Error("latest movie error",error)
      }
}
export async function getNowPlayingMovie(page=1){
    try{
        const data=await fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&page=${page}`)
        const response=await data.json();
      return response.results;
      }catch(error){
          throw new Error("now_playing movie error",error)
      }
}
export async function getMoviesByGenreId(genre_id,page=1){
    if(!genre_id){
       return null;
    }
    try{
        const data=await fetch(`${BASE_PATH}/discover/movie?api_key=${API_KEY}&page=${page}&with_genres=${genre_id}`)
        const response=await data.json();
      return response.results;
      }catch(error){
          throw new Error("now_playing movie error",error)
      }
}



