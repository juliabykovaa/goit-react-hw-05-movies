import React, { useEffect, useState } from 'react';
import { CastItem, CastList } from './Cast.styled';
import Loader from 'components/Loader/Loader';

function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=7e0d37982bd2bc72dd4c2ebad432d351&language=en-US`
        );
        const data = await response.json();
        setCast(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (cast && cast.cast) {
    return (
      <div>
        <CastList>
          {cast.cast.map(actor => {
            if (actor.profile_path) {
              return (
                <CastItem key={actor.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                    alt=""
                    width="250"
                  />
                  {actor.name}
                </CastItem>
              );
            }
            return null;
          })}
        </CastList>
      </div>
    );
  }

  return <Loader />;
}

export default Cast;
