import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  Details,
  DetailsNav,
  MovieCard,
  ReturnBtn,
} from './MovieDetails.styled';
import Loader from 'components/Loader/Loader';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const locationDetails = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=7e0d37982bd2bc72dd4c2ebad432d351&language=en-US`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const toggleCast = () => {
    setShowCast(!showCast);
    setShowReviews(false);
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
    setShowCast(false);
  };

  const handleClick = () => {
    navigate(locationDetails.state ?? '/');
  };

  if (!movie) {
    return <Loader />;
  }

  return (
    <div>
      <ReturnBtn onClick={handleClick}>Return</ReturnBtn>
      {movie.hasOwnProperty('id') ? (
        <MovieCard>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt=""
            width="400"
          />
          <div>
            <h1>Movie Name: {movie.title}</h1>
            <Details>User score: {movie.vote_average}</Details>
            <h2>Overview</h2>
            <Details>{movie.overview}</Details>
            <h2>Genres</h2>
            <Details>{movie.genres.map(genre => genre.name).join(', ')}</Details>
          </div>
        </MovieCard>
      ) : (
        <p>No movie found</p>
      )}

      {movie.hasOwnProperty('id') && (
        <DetailsNav>
          <NavLink
            to={showCast ? `/movies/${movie.id}` : `/movies/${movie.id}/cast`}
            onClick={toggleCast}
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? 'red' : 'black',
              fontFamily: 'Arial, sans-serif',
              fontSize: 28,
            })}
          >
            {showCast ? 'Hide Cast' : 'Show Cast'}
          </NavLink>
          <NavLink
            to={
              showReviews
                ? `/movies/${movie.id}`
                : `/movies/${movie.id}/reviews`
            }
            onClick={toggleReviews}
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? 'red' : 'black',
              fontFamily: 'Arial, sans-serif',
              fontSize: 28,
              paddingLeft: '50px',
            })}
          >
            {showReviews ? 'Hide Reviews' : 'Show Reviews'}
          </NavLink>
        </DetailsNav>
      )}

      {showCast && <Cast movieId={movieId} />}
      {showReviews && <Reviews movieId={movieId} />}
    </div>
  );
}

export default MovieDetails;
