import React, {useEffect, useState} from "react"
import "./movieList.css"
import { Link, useParams } from "react-router-dom"
import Cards from "../card/card"
import axios from "axios";
import Pagination from "../Pagination";


const MovieList = () => {

    
    
    const [movieList, setMovieList] = useState([])
    const [page, setPage] = useState(1)
    const [curGenre, setCurGenre] = useState('All Genres');

 
  

    const {type} = useParams()


    function goAhead() {
        setPage(page + 1)
    }
    function goBack() {
        if (page > 1) {
            setPage(page - 1)
        }
    }


    

   

    useEffect(() => {
        axios.get(`https://movie-task.vercel.app/api/popular?&page=${page}`).then((res) => {
            console.log(res.data.data.results)
            setMovieList(res.data.data.results);
    })    }, [page])

    

    return (



<div>



        <div className="movie__list">


            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
         <Pagination pageProp={page} goBack={goBack} goAhead={goAhead} />

        </div>
        </div>
    )
}

export default MovieList