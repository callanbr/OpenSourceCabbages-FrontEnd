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
            {product.description}
            Price: {"$" + product.price}
            <p className="stock">{product.inventory} in Stock </p>
            <Link to="/cart" className="cartLink">
              Add to cart
            </Link>
            <p>{product.productName}</p>
          </div>
        ))}
      </div>
    </>
  );
}
