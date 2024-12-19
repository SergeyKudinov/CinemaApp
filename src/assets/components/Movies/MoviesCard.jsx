import React from 'react'
import star from "../../icons/star.png"
import filmImage from "../../ImageFılm.jpg"

export default function MoviesCard() {
  return (
    <a className="movies__card" href="./movie.html" >
        <div className="movies__card-rating">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
        </div>
        <img src={filmImage} alt="" />
    </a>
  )
}
