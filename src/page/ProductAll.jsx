import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    // let url = `http://localhost:5000/products`;
    let url = `https://my-json-server.typicode.com/YunheeAhn/shop-react/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    setProductList(data);
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className="product-wrap">
      {loading ? (
        <p>상품을 불러오는 중입니다...</p>
      ) : productList.length > 0 ? (
        productList.map((menu) => <ProductCard key={menu.id} item={menu} />)
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default ProductAll;
