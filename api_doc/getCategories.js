const API_KEY=process.env.API_KEY;
const BASE_PATH=process.env.BASE_PATH;

export  async function getCategories(page=1){
    try{
        const data=await fetch(`${BASE_PATH}/genre/movie/list?api_key=${API_KEY}&page=${page}`,{ next: { revalidate: 1 } })
        const response=await data.json();
      return response.genres;
      }catch(error){
          throw new Error("genre list error",error)
      }
}

export async function getCategoryName(genre_id){
    if(!genre_id){
        return null;
    }
    try{
        
      }catch(error){
          throw new Error("genre list error",error)
      }
    
}



