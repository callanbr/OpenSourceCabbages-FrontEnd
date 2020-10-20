import React, { useEffect, useState } from "react";
import "./Product.css";
import { Grid, Cell } from "react-flexr";
import axios from "axios";
import { url } from "../../Global";

export default function Product(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`${url}/products`);
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Products Page</h1>
      <div>
        {products.map((product) => (
          <div key={product.productId}>
            <img src={product.imageUrl} />
          </div>
        ))}
      </div>
    </>
  );
}
