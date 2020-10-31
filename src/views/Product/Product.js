import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import { url, Title, Image, EachProduct, Description, Price, ProductName } from "../../Global";
import styled from "styled-components";
import "./Product.css";

export default function Product(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`${url}/product`);
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const Container = styled.div`
    padding: 20px;
    margin: 20px;
  `;

  const Stock = styled.section`
    float: right;
    padding: 10px;
    color: #aa2a31;
  `;

  return (
    <>
      <Title>Products Page</Title>
      <Container>
        {products.map((product) => (
          <EachProduct key={product.productId}>
            <Image src={product.imageUrl} />
            <Description>{product.description}</Description>
            <Price>Price: {"$" + product.price}</Price>
            <Stock>{product.inventory} in Stock </Stock>
            <Link to="/cart" className="link">
              Add to cart
            </Link>
            <ProductName>{product.productName}</ProductName>
          </EachProduct>
        ))}
      </Container>
    </>
  );
}
