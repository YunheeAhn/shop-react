const ProductCard = ({ item }) => {
  return (
    <div>
      <dl className="card-box">
        <dt>
          <img src={item?.img} alt="" />
          <p className="new">{item?.new == true ? "신제품" : ""}</p>
        </dt>
        <dd>
          <h3>{item?.title}</h3>
          <p>{item?.price}원</p>
        </dd>
      </dl>
    </div>
  );
};

export default ProductCard;
