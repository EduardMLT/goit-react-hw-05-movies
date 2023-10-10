import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MovieDetailsPage from './Pages/MovieDetailsPage';
import Movies from './Pages/Movies';
import CastPage from './Pages/CastPage';
import ReviewsPage from './Pages/ReviewsPage';
import { Layout } from './Layout';

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
      </Routes>
    </>
  );
};
