import React from 'react'
import { RatingStar } from 'rating-star';


export default function StarRate(){

    const [rating, setRating] = React.useState(0);

    const onRatingChange = (score,numberOfStar) => {
      setRating(score);

    };
  
    return (
      <div className="App">
        <RatingStar
          clickable
          maxScore={100}
          id="123"
          rating={rating}
          onRatingChange={onRatingChange}
          colors={{ mask: "yellow" }}
          numberOfStar={1}
          
        />
      </div>
    )
}