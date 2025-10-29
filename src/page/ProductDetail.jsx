import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/YunheeAhn/shop-react/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <section className="section pro-view">
      <div className="pro-cont">
        <dl>
          <dt>
            <img src={product?.img} alt={product?.title} />
          </dt>
          <dd>
            <span>{product?.category}</span>
            <h3>{product?.title}</h3>
            <p>{product?.price}원</p>
            <div className="choice">
              {product?.size?.map((size, index) => (
                <button key={index}>{size}</button>
              ))}
            </div>
          </dd>
        </dl>
      </div>
      <div className="detail-info">
        <h4>제품 상세정보</h4>
        <img src={product?.detailImg} alt={product?.title} />
      </div>
    </section>
  );
};

export default ProductDetail;
