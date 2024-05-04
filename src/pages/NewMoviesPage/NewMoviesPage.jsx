import {getNewestMovies} from '../../api';
import { useEffect, useState} from "react";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import MovieList from '../../components/MovieList/MovieList'
import css from '../NewMoviesPage/NewMoviesPage.module.css'

export default function NewMoviesPage() { 

    const [newFilms, setNewFilms] = useState([]);
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
            const data = await getNewestMovies(page)
            setNewFilms(prevMovies => {
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
            <h1 className={css.title}>Фільми, що нещодавно вийшли.</h1>
            {loading && <Loader />}
            {error && <Error/>}
            {newFilms.length > 0 && <MovieList films={newFilms}></MovieList>}
            {newFilms.length > 0 && <LoadMoreBtn onClick={handleLoadMore}></LoadMoreBtn>}
            <div style={{ height: '32px' }}></div>
        </div>)
}
