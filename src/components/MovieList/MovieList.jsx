import { Link, useLocation } from "react-router-dom";
import { FaFilm } from "react-icons/fa";


import css from '../MovieList/MovieList.module.css'

export default function MovieList({ films }) {
    const location = useLocation()

    return (
        <ul className={css.list}>
            {films.map((film, index) => (
                <li className={css.listItem} key={index}>
                    <Link to={`/movies/${film.id}`} state={location}>
                    <div className={css.imgCont}><img className={css.listItemImg} src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path
                            }`} alt={film.title} /></div>
                        <p className={css.listText}><FaFilm/> {film.title}</p> 
                    </Link>
                </li>
            ))}
        </ul>
    );
} 

