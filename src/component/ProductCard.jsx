import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <dl className="card-box" onClick={showDetail}>
      <dt>
        <img src={item?.img} alt={item?.title} />
        <p className="new">{item?.new == true ? "신제품" : ""}</p>
      </dt>
      <dd>
        <span>{item?.choice ? "Conscious choice" : ""}</span>
        <h3>{item?.title}</h3>
        <p>{item?.price}원</p>
      </dd>
    </dl>
  );
};

export default ProductCard;
