import { Details } from 'components/MovieDetails/MovieDetails.styled';
import React, { useEffect, useState } from 'react';
import { ReviewList } from './Reviews.styled';

function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=7e0d37982bd2bc72dd4c2ebad432d351&language=en-US&page=1`
        );
        const data = await response.json();
        setReviews(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);
  if (reviews.length > 0) {
    return (
      <div>
        <ReviewList>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>@{review.author}</h2>
              <Details>{review.content}</Details>
            </li>
          ))}
        </ReviewList>
      </div>
    );
  }

  return <Details>No reviews</Details>;
}

export default Reviews;
