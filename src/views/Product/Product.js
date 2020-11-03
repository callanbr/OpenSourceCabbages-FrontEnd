import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import {
  url,
  Title,
  Image,
  EachProduct,
  Description,
  Price,
  ProductName,
  Container,
} from "../../Global";
import styled from "styled-components";
import "./Product.css";

export default function Product(props) {
  const [products, setProducts] = useState([]);
  const [state, setState] = useState({
    query: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`${url}/product`);
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const updateEventHandler = (event) => {
    let matching = [];
    for (let i in products) {
      if (
        products[i].productName
          .toLowerCase()
          .includes(state.query.toLowerCase())
      ) {
        matching.push(products[i]);
      }
    }
    setProducts(matching);
  };
  const resetPageHandler = (event) => {
    window.location.reload();
  };

  const Stock = styled.section`
    float: right;
    padding: 10px;
    color: #aa2a31;
  `; 

  return (
    <>
      <Container>
        <input
          name="query"
          placeholder="Search by Name"
          onChange={handleChange}
        />
        <br />
        <button type="submit" onClick={updateEventHandler}>
          Go!
        </button>
        <button onClick={resetPageHandler}>Clear Search!</button>
        <Title>Products Page</Title>
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
