import { Link } from "react-router-dom";

export default function TrandingFilmList({ films }) {

    return (
        <ul>
            {films.map((film, index) => (
                <li key={index}>
                    <Link to={`/movies/${film.id}`}>{film.title}
                    <img src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path
                            }`} alt={film.title} />
                    </Link>
                </li>
            ))}
        </ul>
    );
} 

