import {getTrandingMovies} from '../../api';
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import TrandingFilmList from '../../components/TrandingFilmList/TrandingFilmList'


export default function HomePage() {

    const [trandingFilms, setTrandingFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

useEffect(() => {
    async function fetchTrandingMovies() {
        try {
            setLoading(true)
            const data = await getTrandingMovies()
            setTrandingFilms(data.results)
        } catch (error) {
            setError(true)
        }
        finally {
            setLoading(false)
        }
    }

    fetchTrandingMovies()
}, []);


    return (
        <div>
            <h1>The most popular films today</h1>
            {loading && <Loader />}
            {error && <Error/>}
            <TrandingFilmList films={trandingFilms}></TrandingFilmList>
        </div>
    )
}
