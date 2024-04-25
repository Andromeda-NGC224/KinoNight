import { Link, useLocation } from "react-router-dom";

export default function SearchMovieList({ films }) {

    const location = useLocation()
    const noImg = "https://i.pinimg.com/564x/5d/b3/f9/5db3f9d7bd0de311088be68c4edaa001.jpg"

    return (
        <ul>
            {films.map((film, index) => (
                <li key={index}>
                    <Link to={`/movies/${film.id}`} state={location}>{film.title}
                    <img src={film.poster_path ? (`https://image.tmdb.org/t/p/w500/${film.poster_path}`) : noImg} alt={film.title} style={{ width: "200px" }}  />
                    </Link>
                </li>
            ))}
        </ul>
    );
} 

