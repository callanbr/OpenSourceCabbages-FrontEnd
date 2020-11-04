import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {
  url,
  Title,
  Image,
  EachProduct,
  Description,
  Price,
  ProductName,
  Container,
} from '../../Global';

export default function Product(props) {
  const [products, setProducts] = useState([]);

  let ls =
    localStorage.getItem('cart') == null ? '' : localStorage.getItem('cart');

  let storageData = ls.split(',').map(function (item) {
    return parseInt(item, 10);
  });

  const findCartInfo = (data) => {
    let newData = [];
    for (let i in data) {
      for (let x in storageData) {
        if (data[i].productId == storageData[x]) {
          newData.push(data[i]);
        }
      }
    }
    return newData;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`${url}/product`);
      setProducts(findCartInfo(res.data));
    };
    fetchProducts();
  }, []);

  const handleRemoveCart = () => {
    console.log(products);
    localStorage.removeItem('cart');
    // state.cart.push(product);
    // localStorage.setItem('cart', state.cart);
  };

  const DisplayWhat = () => {
    let result;
    localStorage.getItem('cart') == null
      ? (result = <Title>Cart is Empty</Title>)
      : (result = (
          <span>
            {products.map((product, index) => (
              <EachProduct key={index}>
                <Image src={product.imageUrl} />
                <Description>{product.description}</Description>
                <Price>Price: {'$' + product.price}</Price>
                <Stock>{product.inventory} in Stock </Stock>
                <button onClick={() => handleRemoveCart(product.productId)}>
                  Remove from cart
                </button>

                <ProductName>{product.productName}</ProductName>
              </EachProduct>
            ))}
          </span>
        ));
    return result;
  };

  const Stock = styled.section`
    float: right;
    padding: 10px;
    color: #aa2a31;
  `;

  return (
    <>
      <Container>
        <Title>
          <FontAwesomeIcon icon={faShoppingCart} /> My Cart
        </Title>
        <DisplayWhat />
      </Container>
    </>
  );
}
