import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Layout from './Layout/Layout';


const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="movies"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Movies />
              </Suspense>
            }
          />
          <Route
            path="movies/:movieId/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MovieDetails />
              </Suspense>
            }
          >
            <Route
              path="cast"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Cast />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Reviews />
                </Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
