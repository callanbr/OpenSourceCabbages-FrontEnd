import React, { useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../../Global";

export default function Product(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`${url}/product`);
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Product View</h1>
      <div className="productContainer">
        {products.map((product) => (
          <div key={product.productId} className="eachProduct">
            <img src={product.imageUrl} className="image" />
            {product.productName + "    "}
            {"$" + product.price}
            <Link to="/cart" className="link">
              Add to cart
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
