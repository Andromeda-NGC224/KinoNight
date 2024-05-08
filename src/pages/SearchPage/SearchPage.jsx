import { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { getMovies } from '../../api';
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import SearchBox from '../../components/SearchBox/SearchBox';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn'
import css from '../SearchPage/SearchPage.module.css'
import MovieList from '../../components/MovieList/MovieList';


export default function SearchPage() {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [noData, setNoData] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    useEffect(() => {
        if (query === "") {
            return
        }
        async function fetchMovies() {
            try {
                setLoading(true)
                const data = await getMovies(query, page)
                if (data.results.length === 0) {
                    setNoData(true)
                }
                setMovies((prevMovies) => [...prevMovies, ...data.results])
            } catch (error) {
                setError(true)
            }
            finally {
                setLoading(false)
            }
        }
        
        fetchMovies()
        
    }, [query, page]);

    function onHandleSearch(newQuery) {
    setSearchParams({ query: newQuery });
    setPage(1);
        setMovies([]);
        setNoData(false)
    }
    
    const handleLoadMore = () => {
    setPage(page + 1)
  }

    return (
        <div className={css.mainCont}>
            <SearchBox onSearch={onHandleSearch}></SearchBox>
            {loading && <Loader />}
            {error && <Error />}
  {noData && <p style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px'}}>На жаль, за цим запитом фільмів не знайдено.</p>}
            {movies.length > 0 && <MovieList films={movies}></MovieList>}
            {!noData && movies.length > 0 && <LoadMoreBtn onClick={handleLoadMore}></LoadMoreBtn>}
        </div>
    )
}
