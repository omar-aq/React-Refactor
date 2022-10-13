import React from "react";
//redux
//components
import SingleCard from "./SingleCard";
function Cards({ collections }) {
  return (
    <div id="tm-gallery-page-pizza" className="tm-gallery-page">
      {collections.map((item) => {
        return <SingleCard key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Cards;
