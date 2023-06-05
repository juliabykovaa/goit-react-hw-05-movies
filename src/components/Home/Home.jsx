import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Header, TrendingItem, TrendingList } from './Home.styled';


const Home = () => {
  const [films, setFilms] = useState([]);
  const homeLocation = useLocation();

  useEffect(() => {
    const getPopularFilms = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=7e0d37982bd2bc72dd4c2ebad432d351&language=en-US',
          { method: 'GET', headers: { accept: 'application/json' } }
        );
        const data = await response.json();
        setFilms(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getPopularFilms();
  }, []);

  return (
    <Container>
      <Header>Popular Films</Header>
      <TrendingList>
        {films.map(film => (
          <Link to={`/movies/${film.id}`} key={film.id} state={homeLocation}>
            <TrendingItem>
              <img
                src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
                alt=""
              />

              {film.title}
            </TrendingItem>
          </Link>
        ))}
      </TrendingList>
    </Container>
  );
};

export default Home;
