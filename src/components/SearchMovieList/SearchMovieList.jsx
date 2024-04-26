import { Link, useLocation } from "react-router-dom";
import { FaFilm } from "react-icons/fa";
import css from "../SearchMovieList/SearchMovieList.module.css"

export default function SearchMovieList({ films }) {

    const location = useLocation()
    const noImg = "https://i.pinimg.com/564x/5d/b3/f9/5db3f9d7bd0de311088be68c4edaa001.jpg"

    return (
        <ul className={css.list}>
            {films.map((film, index) => (
                <li className={css.listItem} key={index}>
                    <Link  to={`/movies/${film.id}`} state={location}>
                        <div className={css.imgCont}><img className={css.listItemImg} src={film.poster_path ? (`https://image.tmdb.org/t/p/w500/${film.poster_path}`) : noImg} alt={film.title} />
                        </div>
                        <p className={css.listText}><FaFilm/> {film.title}</p> 
                    </Link>
                </li>
            ))}
        </ul>
    );
} 

