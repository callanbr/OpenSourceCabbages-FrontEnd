import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { flash } from "react-animations";
import {
  url,
  Title,
  Container,
  H2,
  H3,
  H5,
  HomePar,
  Section,
  Image,
  Price,
  Description,
  ProductName,
  EachProduct,
} from "../../Global";
import axios from "axios";
import AuthService from "../Login/AuthService";

let Auth = new AuthService();

export default function Home(props) {
  const randomNum = Math.floor(Math.random() * 6);
  const flashAnimation = keyframes`${flash}`;
  const FlashDiv = styled.div`
    animation: 2s ${flashAnimation};
  `;

  const [state, setState] = useState({
    loggedIn: Auth.loggedIn(),
    username: "",
  });

  useEffect(() => {
    // let value = Auth.getProfile().sub;
    if (Auth.loggedIn()) {
      setState({
        ...state,
        username: Auth.getProfile().sub,
      });
    }
  }, []);

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
      <Container>
        <Title>Open Source Cabbages E-Commerce Website</Title>
        <H3>Welcome {state.username}!</H3>
        <H5>All The Coolest Products Available With The Click of a Button</H5>
        <br />
        <br />
        <Section>
          <HomePar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit. Platea dictumst
            quisque sagittis purus. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum.
            Risus feugiat in ante metus. Sagittis purus sit amet volutpat. Sit amet est placerat in egestas
            erat imperdiet. Id diam maecenas ultricies mi eget mauris pharetra et. Aliquet porttitor lacus
            luctus accumsan tortor posuere ac ut consequat. Mauris a diam maecenas sed enim ut sem. Neque
            ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Pulvinar mattis nunc sed
            blandit libero volutpat sed.{" "}
          </HomePar>
          <Section></Section>
          <FlashDiv>
            <H2>Today's Featured Item</H2>
          </FlashDiv>
          {products.slice(randomNum, randomNum + 1).map((product) => (
            <EachProduct key={product.productId}>
              <Image src={product.imageUrl} />
              <Description>{product.description}</Description>
              <Price>Price: {"$" + product.price}</Price>
              <ProductName>{product.productName}</ProductName>
            </EachProduct>
          ))}
        </Section>
      </Container>
    </>
  );
}
