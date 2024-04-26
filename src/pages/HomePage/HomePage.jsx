import {getTrandingMovies} from '../../api';
import { useEffect, useState} from "react";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import MovieList from '../../components/MovieList/MovieList'
import css from '../HomePage/HomePage.module.css'


export default function HomePage() {

    const [trandingFilms, setTrandingFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1)

    const handleLoadMore = () => {
    setPage(page + 1)
  }

useEffect(() => {
    async function fetchTrandingMovies() {
        try {
            setLoading(true)
            const data = await getTrandingMovies(page)
            setTrandingFilms(prevMovies => {
        return [...prevMovies, ...data]
      })
        } catch (error) {
            setError(true)
        }
        finally {
            setLoading(false)
        }
    }

    fetchTrandingMovies();
  
    
}, [page]);
    
    


    return (
        <div className={css.mainCont}>
            <h1 className={css.title}>The most popular films today.</h1>
            {loading && <Loader />}
            {error && <Error/>}
            {trandingFilms.length > 0 && <MovieList films={trandingFilms}></MovieList>}
            {trandingFilms.length > 0 && <LoadMoreBtn onClick={handleLoadMore}></LoadMoreBtn>}
            <div style={{ height: '32px' }}></div>
        </div>
    )
}
