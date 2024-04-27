import { Link, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import BackLink from '../BackLink/BackLink'
import MovieReviews from '../MovieReviews/MovieReviews'
import MovieCast from '../MovieCast/MovieCast'
import css from './MovieCard.module.css'


export default function MovieCard({ movie, movieId }) {

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
    
     useEffect(() => {
    if (seeCast || seeReviews) {
        setTimeout(() => {
            window.scrollTo({
                top: 1000,
                behavior: "smooth",
            });
        }, 300);
    }
}, [seeCast, seeReviews]);
    

    const location = useLocation();
    const backLinkHref = useRef(location.state ?? "/");
    const noImg = "https://i.pinimg.com/564x/5d/b3/f9/5db3f9d7bd0de311088be68c4edaa001.jpg"
    
    return (
        <div className={css.allContent}>

            <BackLink className={css.backBtn} to={backLinkHref.current} >Go Back</BackLink>
            <div className={css.mainContainer}>
            <img className={css.picture} src={poster_path ? (`https://image.tmdb.org/t/p/w500/${poster_path}`) : noImg} alt={title} />

                <ul className={css.mainList}>
                    <li>
                        <h2 className={css.listItemTitle}>{title}</h2>
                        <p>User score: <strong>{vote_average}</strong>/10</p>
                    </li>
                    <li><h3 className={css.listItemTitle}>Overview:</h3>
                        <p>{overview}</p>
                    </li>
                    <li><h4 className={css.listItemTitle}>Ganres:</h4>
                    {genres && genres.map((genre, index) => (
                                <p className={css.genresText} key={index}>- {genre.name}</p>
                            ))}   
                    </li>
            </ul>
            </div>
            <div className={css.additionalCont}>
                <p className={css.additionalTitle}>Additional information</p>
                <div className={css.additionalListsCont}>
                <ul className={css.additionaList}>
                    <li className={css.additionaListItem}>
                        <Link to={`/movies/${movieId}/credits`} onClick={onMovieCast}>- Actors</Link>
                    </li>
                    <li className={css.additionaListItem}>
                        <Link to={`/movies/${movieId}/reviews`} onClick={onMovieReview}>- Reviews</Link>
                        </li>
                    </ul>

                    {seeCast && <MovieCast movieId={movieId}></MovieCast>}
                    {seeReviews && <MovieReviews movieId={movieId}></MovieReviews>}
                    </div>
            </div>
        </div>
    )
}
