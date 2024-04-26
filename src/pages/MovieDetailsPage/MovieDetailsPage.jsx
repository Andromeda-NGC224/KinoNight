import { useEffect, useState } from "react";
import { getMovieDetails } from '../../api';
import { useParams } from "react-router-dom"
import MovieCard from '../../components/MovieCard/MovieCard'
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import css from '../MovieDetailsPage/MovieDetailsPage.module.css'


export default function MovieDetailsPage() {
const [movies, setMovies] = useState([]);
const { movieId } = useParams();
const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [noData, setNoData] = useState(false);

useEffect(() => {
    async function fetchDetailsMovies() {
        try {
            setLoading(true)
            const data = await getMovieDetails(movieId)
            if (data.length === 0) {
          setNoData(true);
          return;
        }
            setMovies(data)
        } catch (error) {
            setError(true)
        }
        finally {
            setLoading(false)
        }
    }

    fetchDetailsMovies()
}, [movieId]);

    return (
        <div className={css.mainCont}>
            {loading && <Loader />}
            {error && <Error/>}
            <MovieCard movie={movies} movieId={movieId} />
            {noData && <p>No information about film, sorry.</p>}
        </div>
    )
}
