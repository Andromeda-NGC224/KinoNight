import { Route, Routes, } from "react-router-dom"
import {lazy} from 'react';
import Layout from '../Layout/Layout'
// import MovieCast from '../MovieCast/MovieCast'
// import MovieReviews from '../MovieReviews/MovieReviews'
// import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
// import HomePage from '../../pages/HomePage/HomePage'
// import MoviesPage from '../../pages/MoviesPage/MoviesPage'
// import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage'

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'))
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'))
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'))
const MovieCast = lazy(() => import('../MovieCast/MovieCast'))
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'))



export default function App() {
 
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="credits" element={<MovieCast />}>          </Route>
          <Route path="reviews" element={<MovieReviews />}>        </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Layout>
  );
}

