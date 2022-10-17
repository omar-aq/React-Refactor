import React, { useEffect } from "react";
//redux
//components
import SingleCard from "./SingleCard";
//data
// import { collections } from "../data";

const url = "https://dataapi.free.beeceptor.com/my/api/path";

function Cards() {
  const [data, setData] = React.useState([]);
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
          return <SingleCard key={item.id} item={item} />;
        })}
    </div>
  );
}

export default Cards;
