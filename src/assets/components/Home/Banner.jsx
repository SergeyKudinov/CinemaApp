import React from 'react'
import headerBannerBack from "../../background.jpg"
import video from "../../videos/Титаник (1997) «Titanic» - Трейлер (Trailer) - Что посмотреть_ (1080p, h264).mp4"


export default function Banner() {
  return (
    <div className="header__banner">
        <div>
            <p>REACT CINEMA</p>
            <p>Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling. </p>
            <div>
                <a href="#movies">Movies</a>
                <button>Favorites</button>
            </div>
        </div>
        <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
        </video>
        <img src={headerBannerBack} alt="" />
    </div>
  )
}
