import React from "react";
// import { useDispatch, useSelector } from "react-redux";
//components
import ButtonsHandler from "./ButtonsHandler";

function SingleCard({ title, info, image }) {
  // const counter = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  // const { title, info, image } = item;

  // const increaseHandler = () => {
  //   dispatch({ type: "increase" });
  // };
  // const decreaseHandler = () => {
  //   dispatch({ type: "decrease" });
  // };

  return (
    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
      <figure>
        <img src={image} alt="pic" className="img-fluid tm-gallery-img" />
        <figcaption>
          <h4 className="tm-gallery-title">{title}</h4>
          <p className="tm-gallery-description">{info}</p>
          <p className="tm-gallery-price">$45 / $55</p>
          <ButtonsHandler />
        </figcaption>
      </figure>
    </article>
  );
}

export default SingleCard;
