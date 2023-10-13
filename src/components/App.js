import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';


const HomePage = lazy(() => import('./Pages/HomePage'));
const MovieDetailsPage = lazy(() => import('./Pages/MovieDetailsPage'));
const Movies = lazy(() => import('./Pages/Movies'));
const CastPage = lazy(() => import('./Pages/CastPage'));
const ReviewsPage = lazy(() => import('./Pages/ReviewsPage'));
const NotFound = lazy(() => import('./Pages/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
