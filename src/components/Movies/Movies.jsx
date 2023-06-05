import { TrendingItem, TrendingList } from 'components/Home/Home.styled';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Form, Input, SearchBtn } from './Movies.styled';
import { ReturnBtn } from 'components/MovieDetails/MovieDetails.styled';

function Movies() {
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const filter = searchParams.get('filter') || '';

  const [inputValue, setInputValue] = useState(filter);
  const [isSubmitted, setIsSubmitted] = useState(true);

  useEffect(() => {
    const fetchFilmsBySearch = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=7e0d37982bd2bc72dd4c2ebad432d351&query=${filter}&include_adult=false&language=en-US&page=1`
        );
        const data = await response.json();
        setMoviesList(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    if (isSubmitted && filter) {
      fetchFilmsBySearch();
      setIsSubmitted(false);
    } else {
      setMoviesList([]);
      setInputValue(filter)
    }
  }, [filter, isSubmitted]);


  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ filter: inputValue });
    setIsSubmitted(true);
  };


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
          value={inputValue}
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </Form>

      {filter && moviesList.length ? (
        <TrendingList>
          {moviesList.map(
            movie =>
              movie.poster_path !== null &&
              movie.poster_path !== '' && (
                <Link
                  to={`/movies/${movie.id}`}
                  key={movie.id}
                  state={location}
                >
                  <TrendingItem>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt=""
                    />
                    {movie.title}
                  </TrendingItem>
                </Link>
              )
          )}
        </TrendingList>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Movies;








