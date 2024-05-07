import { Link, useLocation } from "react-router-dom";
import { FaFilm } from "react-icons/fa";

import css from '../MovieList/MovieList.module.css'

export default function MovieList({ films }) {
    const location = useLocation()
    const noImg = "https://i.pinimg.com/originals/ac/5b/b3/ac5bb3b5260282eaee051d8a1ebe5ac8.jpg"


    return (
        <ul className={css.list}>
            {films.map((film, index) => (
                <li className={css.listItem} key={index}>
                    <Link to={`/movies/${film.id}`} state={location}>
                    <div className={css.imgCont}><img className={css.listItemImg} src={film.poster_path ? (`https://image.tmdb.org/t/p/w500/${film.poster_path}`) : noImg} alt={film.title} />
                        </div>
                        <p className={css.listText}><FaFilm/> {film.title}</p> 
                    </Link>
                </li>
            ))}
        </ul>
    );
} 

