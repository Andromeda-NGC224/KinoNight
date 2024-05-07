import { Link, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import BackLink from '../BackLink/BackLink'
import MovieReviews from '../MovieReviews/MovieReviews'
import MovieCast from '../MovieCast/MovieCast'
import BtnWatch from '../BtnWatch/BtnWatch'
import css from './MovieCard.module.css'
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import ModalTrailer from '../ModalTrailer/ModalTrailer'


export default function MovieCard({ movie, movieId, trailer }) {

    const { poster_path, title, vote_average, overview, genres, release_date, original_title, runtime, backdrop_path
    } = movie;
    const releaseDate = release_date ? release_date.slice(0, 4) : '';


    const [seeCast, setSeeCast] = useState(false);
    const [seeReviews, setSeeReviews] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const onMovieCast = () => {
    setSeeCast(true)
    setSeeReviews(false)
  }
    const onMovieReview = () => {
      setSeeReviews(true)
    setSeeCast(false)
    }

    const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
    
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
    const noImg = "https://i.pinimg.com/originals/ac/5b/b3/ac5bb3b5260282eaee051d8a1ebe5ac8.jpg"
    
    const noImgDrop = 'https://i.pinimg.com/originals/c4/97/32/c49732efccddb4e5f41c3cac2e51c140.jpg'

    return (
        <div className={css.allContent}>

            <BackLink className={css.backBtn} to={backLinkHref.current} >Назад</BackLink>
            <div className={css.mainContainer}>
            <img className={css.picture} src={poster_path ? (`https://image.tmdb.org/t/p/w500/${poster_path}`) : noImg} alt={title} />

                <ul className={css.mainList}>
                    <li>
                        <h2 className={css.listItemTitle}>«{title}»</h2>
                        <p className={css.listItemTitleOriginal}>«{original_title}»</p>
                        
                    </li>
                    <li className={css.listItemGanres}>
                        <h4 className={css.listItemTitle}>Дата виходу : </h4>
                        <p>
                        {releaseDate !== "" ? (<strong>{releaseDate} рік</strong> ) : "Немає інформації"}
                        </p>
                    </li>
                    <li className={css.listItemGanres}>
                        <h4 className={css.listItemTitle}>Рейтинг : </h4>
                        <p className={css.ratingText}><IoIosStarOutline className={css.ratingIcon}/>
                             {vote_average !== 0 ? (<strong>{vote_average}</strong>) : "-"}/10
                        </p>
                    </li>
                    <li className={css.listItemGanres}>
                        <h4 className={css.listItemTitle}>Жанр :</h4>
                        {genres && genres.length > 0 ? (
                            genres.map((genre, index) => (
                                <p className={css.genresText} key={index}>
                                    {genre.name}
                                </p>
                            ))
                        ) : (
                            <p className={css.genresText}>Немає інформації</p>
                        )}
                    </li>
                    <li className={css.listItemGanres}>
                        <h4 className={css.listItemTitle}>Час : </h4>
                        <p>
                            {runtime !== 0 ? <strong>{runtime} хв.</strong> : "Немає інформації"}
                        </p>
                    </li>
                    <li className={css.mainListItem}>
                        <h3 className={css.listItemTitle}>Про що в фільмі «{title}»: </h3>
                        <p>{overview !== "" ? overview : "Немає інформації"}</p>
                    </li>
            </ul>
            </div>
            <div className={css.mainContPoster}> <img className={css.pictureDrop} src={backdrop_path ? (`https://image.tmdb.org/t/p/original/${backdrop_path}`) : noImgDrop} alt={title} />
                {trailer.results && trailer.results.length !== 0 && <BtnWatch onClick={openModal} trailer={trailer}></BtnWatch>}
                 {modalIsOpen && <ModalTrailer isOpen={modalIsOpen} onClose={closeModal} trailer={trailer} />}
            </div>

            <div className={css.additionalCont}>
                <p className={css.additionalTitle}>Додаткова інформація <IoIosArrowDropdown className={css.additionalTitleIcon}/>
</p>
                <div className={css.additionalListsCont}>
                <ul className={css.additionaList}>
                    <li>
                        <Link className={css.additionaListItem} to={`/movies/${movieId}/credits`} onClick={onMovieCast}>Актори</Link>
                    </li>
                    <li>
                        <Link className={css.additionaListItem} to={`/movies/${movieId}/reviews`} onClick={onMovieReview}>Відгуки</Link>
                        </li>
                    </ul>

                    {seeCast && <MovieCast movieId={movieId}></MovieCast>}
                    {seeReviews && <MovieReviews movieId={movieId}></MovieReviews>}
                    </div>
            </div>
        </div>
    )
}
