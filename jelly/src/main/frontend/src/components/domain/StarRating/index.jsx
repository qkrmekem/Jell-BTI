import React, { useEffect, useState } from "react";
import Rate from "../../base/Rate";

const StarRating = ({setCount}) => {
  const [rating, setRating] = useState(0);
  
  useEffect(()=>{
    setCount(rating);
  },[rating])
  
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <Rate rating={rating} onRating={(rate) => setRating(rate)} />
        </div>
      </div>
    </>
  );
};

export default StarRating;