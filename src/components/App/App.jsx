import { Route, Routes, } from "react-router-dom"
import Layout from '../Layout/Layout'
import HomePage from '../../pages/HomePage/HomePage'
import MoviesPage from '../../pages/MoviesPage/MoviesPage'
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage'
import MovieCast from '../MovieCast/MovieCast'
import MovieReviews from '../MovieReviews/MovieReviews'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'

import css from './App.module.css'


export default function App() {
 
  return (
    <Layout>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="/movies/:movieId/cast" element={<MovieCast />}>
          </Route>
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />}>
        </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      
    </Layout>
  );
}

