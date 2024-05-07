import {getMovieCast} from "../../api"
import { useState, useEffect } from 'react'
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import css from '../MovieCast/MovieCast.module.css'

export default function MovieCast({ movieId }) {
    const noImg = "https://i.pinimg.com/564x/4a/7a/3c/4a7a3cc83b32f048a6ad55e35112f037.jpg"
    const [casts, setCasts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [noData, setNoData] = useState(false);

    useEffect(() => {
    if (!movieId) return;
    async function fetchMovieCast() {
        try {
            setLoading(true)
            const data = await getMovieCast(movieId)
            if (data.cast.length === 0) {
          setNoData(true);
          return;
        }
            setCasts(data.cast)
        } catch (error) {
            setError(true)
        }
        finally {
            setLoading(false)
        }
    }

    fetchMovieCast()
}, [movieId]);

    return (
        <div>
            {loading && <Loader />}
            {error && <Error/>}
            {casts.length > 0 && <ul className={css.castList}>
                {casts.map((cast, index) => (
                    <li className={css.castListItem} key={index}>
                    <img className={css.castListImg} src={
              cast.profile_path ?
                (`https://image.tmdb.org/t/p/w500/${cast.profile_path}`) :
                noImg} alt={cast.name} />
                        <div className={css.castListText}>
                            <p>Ім'я: <strong>{cast.name}</strong></p>
                            <p>Роль: <strong>{cast.character}</strong></p>
                        </div>
                    </li>
                ))}
            </ul>}
            {noData && <p>Немає інформації про акторів, на жаль.</p>}
        </div>
    )
}
