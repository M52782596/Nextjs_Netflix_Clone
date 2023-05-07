
const API_KEY=process.env.API_KEY;
const BASE_PATH=process.env.BASE_PATH;

export async function getMovieById(id){
    if(!id){
        throw new Error('Movie id is null')
    }
    try{
       const data=await fetch(`${BASE_PATH}/movie/${id}?api_key=${API_KEY}`)
       
       return data.json();
    }
    catch(error){
        throw new Error('Movie Detail error',error)
    }
}