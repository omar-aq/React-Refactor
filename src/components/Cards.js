import React, { useEffect, useState } from "react";
//redux
//components
import SingleCard from "./SingleCard";
//data
// import { collections } from "../data";

const url = "https://endtoend.free.beeceptor.com/my/api/path";

function Cards() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div id="tm-gallery-page-pizza" className="tm-gallery-page">
      {data &&
        data.map((item) => {
          return (
            <li key={item.id} style={{ listStyleType: "none" }}>
              <SingleCard {...item} />
            </li>
          );
        })}
    </div>
  );
}

export default Cards;
