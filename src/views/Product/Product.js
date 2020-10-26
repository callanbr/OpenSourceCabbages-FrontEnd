import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../../Global";
import styled from "styled-components";

export default function Product(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`${url}/product`);
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const Title = styled.h1`
    color: #632c6b;
    text-align: center;
  `;

  const Container = styled.div`
    padding: 40px;
    margin: 20px;
  `;

  const EachProduct = styled.div`
    background-color: #b2d459;
    box-shadow: 0 14px 26px -10px rgba(51, 51, 51, 0.4),
      0 4px 23px 0px rgba(0, 0, 0, 0.12), 2px 8px 10px 1px rgba(51, 51, 51, 0.4);
    padding: 5px;
    margin: 20px;
  `;

  const Description = styled.section`
    display: inline-block;
    width: 700px;
    text-align: center;
  `;

  const Image = styled.img`
    height: auto;
    width: 100px;
    transition: width 0.4s;
    margin-right: 10px;

    &:hover {
      height: auto;
      width: 400px;
      transition: width 0.7s;
    }
  `;

  const Stock = styled.section`
    float: right;
    padding: 10px 50px;
    color: #632c6b;
  `;

  const CartLink = styled.p`
    float: right;
    padding: 60px;
  `;

  const ProductName = styled.p`
    padding: 5px;
    display: block;
  `;

  return (
    <>
      <Title>Products Page</Title>
      <Container>
        {products.map((product) => (
          <EachProduct key={product.productId}>
            <Image src={product.imageUrl} />
            <Description>{product.description}</Description>
            Price: {"$" + product.price}
            <Stock>{product.inventory} in Stock </Stock>
            <CartLink>
              <Link to="/cart">Add to cart</Link>
            </CartLink>
            <ProductName>{product.productName}</ProductName>
          </EachProduct>
        ))}
      </Container>
    </>
  );
}
