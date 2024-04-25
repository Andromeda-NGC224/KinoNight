import {getMovieReview} from "../../api"
import { useState, useEffect } from 'react'
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

export default function MovieReviews({ movieId }) {
    const noImg = "https://i.pinimg.com/564x/5d/b3/f9/5db3f9d7bd0de311088be68c4edaa001.jpg"
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [noData, setNoData] = useState(false);

    useEffect(() => {
    if (!movieId) return;
    async function fetchMovieCast() {
        try {
            setLoading(true)
            const data = await getMovieReview(movieId)
            if (data.results.length === 0) {
          setNoData(true);
          return;
        }
            setReviews(data.results)
            
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
            {reviews.length > 0 && <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <div>
                            <img style={{width:`100px`}} src={review.author_details
.avatar_path ?
                (`https://image.tmdb.org/t/p/w500/${review.author_details
.avatar_path}`) :
                noImg} alt={review.author} />
                            <h3>{review.author}</h3>
                        </div>
                        
                        
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>}
            {noData && <p>No reviews yet...</p>}
        </div>
    )
}
