import React, {useState,useEffect} from 'react';
import axios from 'axios'
import MovieList from '../../components/movieList/movieList';


function Home() {
  const [movie, setMovie] = useState({})
  useEffect(() => {
    axios.get("https://movie-task.vercel.app/api/popular").then((res)=>
    {
      console.table(res.data.data.results)
    setMovie(res.data.data.results[0]);
  }
  )
  },[])

  return (
    <div>
    <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[90vh] bg-center bg-cover flex items-end justify-center`}>
      <div className='text-xl md:text-3xl text-white 
      p-4 bg-gray-900 bg-opacity-50  w-full flex justify-center'>
        {movie.title}
      </div>
    </div>
    <MovieList/>

    </div>
  )
}

export default Home