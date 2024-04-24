import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import BackLink from '../../components/BackLink/BackLink'

export default function MovieList({ movie }) {

const location = useLocation();
  const backLinkHref = location.state ?? "/";
    return (
        <div>
            <BackLink to={backLinkHref}>Go Back</BackLink>
            
            <div><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path
                            }`} alt={movie.title} />
                <ul>
                    <li>
                        <h2>{movie.title}</h2>
                        <p>User score: {movie.
vote_average
}</p>
                    </li>
                    <li><h3>Overview</h3>
                        <p>{movie.overview}</p>
                    </li>
                    <li><h4>Ganres</h4>
                    {movie.genres && movie.genres.map((genre, index) => (
                                <p key={index}>{genre.name}</p>
                            ))}   
                    </li>
            </ul>
            </div>
            <div>
                <p>Additional information</p>
                <ul>
                    <li>Cast</li>
                    <li>Reviews</li>
                </ul>
           </div>


        </div>
    )
}
