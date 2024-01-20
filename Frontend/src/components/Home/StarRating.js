// Stars.js
import React from 'react';
import StarRatings from 'react-star-ratings';

const StarRating = ({ rating, starDimension = '20px', starSpacing = '2px' }) => {
  const numericRating = parseFloat(rating);

  if (isNaN(numericRating)) {
    // Handle the case where rating is not a valid number
    console.error('Invalid rating:', rating);
    return null;
  }

  return (
    <StarRatings
      rating={numericRating}
      starDimension={starDimension}
      starSpacing={starSpacing}
      starRatedColor="#FFD700"
      numberOfStars={5}
      name="rating"
    />
  );
};

export default StarRating;
