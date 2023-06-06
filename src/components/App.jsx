import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="movies"
            element={
              <Suspense fallback={<Loader />}>
                <Movies />
              </Suspense>
            }
          />
          <Route
            path="movies/:movieId/*"
            element={
              <Suspense fallback={<Loader />}>
                <MovieDetails />
              </Suspense>
            }
          >
            <Route
              path="cast"
              element={
                <Suspense fallback={<Loader />}>
                  <Cast />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<Loader />}>
                  <Reviews />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
