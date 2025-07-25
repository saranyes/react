import { FaHeart } from "react-icons/fa";
// import { assets } from "../assets/assets";

import React from "react";

function Cards({ name, release_date }) {
  return (
    <div className="text-white ">
      <h1>Name:{name}</h1>
      <button>
        <FaHeart />
      </button>
      <p>Release Date:{release_date}</p>
    </div>
  );
}

export default Cards;
