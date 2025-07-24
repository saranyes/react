import { FaHeart } from "react-icons/fa";

import React from "react";

function Cards({ Movie }) {
  return (
    <div className="container">
      <h1>Name :</h1>
      <button>
        <FaHeart />
      </button>
      <p>Release Date:</p>
    </div>
  );
}

export default Cards;
