import React from "react";
import {
  Anime1,
  Anime2,
  Anime4,
  Anime5,
  Anime6,
  ICArrowLeft,
  ICArrowRight,
} from "../../assets";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";

export default function HomeTrending() {
  const [listAnime] = React.useState([Anime1, Anime2, Anime4, Anime5, Anime6]);

  const properties = {
    prevArrow: (
      <button>
        <img src={ICArrowLeft} alt={"icon prev"} />
      </button>
    ),
    nextArrow: (
      <button>
        <img src={ICArrowRight} alt={"icon next"} />
      </button>
    ),
  };

  return (
    <section className="container mt-32">
      <p className="text-white text-xl mb-5 font-light">Trending</p>
      <div>
        <Slide
          indicators={true}
          transitionDuration={500}
          {...properties}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ]}
        >
          {listAnime.map((anime, index) => (
            <div className="mx-auto md:mx-0 w-4/5" key={index}>
              <Link to={"/"}>
                <img src={anime} alt="banner" className={"w-full"} />
              </Link>
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
}
