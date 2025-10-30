import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    // let url = `http://localhost:5000/products`;
    let url = `https://my-json-server.typicode.com/YunheeAhn/shop-react/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className="product-wrap">
      {productList.map((menu, key) => (
        <ProductCard id={key} item={menu} />
      ))}
    </div>
  );
};

export default ProductAll;
