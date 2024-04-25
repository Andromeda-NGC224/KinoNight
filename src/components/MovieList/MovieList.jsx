import { Link, Outlet, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import BackLink from '../../components/BackLink/BackLink'
import MovieReviews from '../../components/MovieReviews/MovieReviews'
import MovieCast from '../../components/MovieCast/MovieCast'
import css from '../MovieList/MovieList.module.css'


export default function MovieList({ movie, movieId }) {
    const { poster_path, title, vote_average, overview, genres } = movie;

    const [seeCast, setSeeCast] = useState(false);
    const [seeReviews, setSeeReviews] = useState(false);

    const onMovieCast = () => {
    setSeeCast(true)
    setSeeReviews(false)
  }
    const onMovieReview = () => {
      setSeeReviews(true)
    setSeeCast(false)
    
  }

    
const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/");
    return (
        <div>
            <div className={css.mainContainer}>
            <span className={css.backBtnCont}><BackLink className={css.backBtn} to={backLinkHref.current} >Go Back</BackLink></span>
            
            
                <img className={css.mainImg} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                <ul className={css.mainList}>
                    <li>
                        <h2>{title}</h2>
                        <p>User score: {vote_average
}</p>
                    </li>
                    <li><h3>Overview</h3>
                        <p>{overview}</p>
                    </li>
                    <li><h4>Ganres</h4>
                    {genres && genres.map((genre, index) => (
                                <p key={index}>{genre.name}</p>
                            ))}   
                    </li>
            </ul>
            </div>
            <div>
                <p>Additional information</p>
                <ul>
                    <li>
                        <Link to={`/movies/${movieId}/credits`} onClick={onMovieCast}>Cast</Link>
                    </li>
                    <li>
                        <Link to={`/movies/${movieId}/reviews`} onClick={onMovieReview}>Reviews</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
            {seeCast && <MovieCast movieId={movieId}></MovieCast>}
            {seeReviews && <MovieReviews movieId={movieId}></MovieReviews>}
        </div>
    )
}
