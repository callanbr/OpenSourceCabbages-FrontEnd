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

  let keys = Object.keys(localStorage);

  let storageData = keys.filter(function (item) {
    return parseInt(item) == item;
  });

  const findCartInfo = (data) => {
    storageData.sort();
    let newData = [];
    for (let i in data) {
      for (let x in storageData) {
        if (data[i].productId == parseInt(storageData[x])) {
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

  const handleRemoveCart = (product) => {
    localStorage.removeItem(product);
    location.reload();
  };

  const DisplayWhat = () => {
    let result = (
      <span>
        {products.map((product, index) => (
          <EachProduct key={index}>
            <Image src={product.imageUrl} />
            <Description>{product.description}</Description>
            <Price>
              Price: {'$' + product.price} <br /> Qty:
              {localStorage.getItem(product.productId)}
            </Price>
            <Stock>{product.inventory} in Stock </Stock>
            <button onClick={() => handleRemoveCart(product.productId)}>
              Remove from cart
            </button>
            <ProductName>{product.productName}</ProductName>
          </EachProduct>
        ))}
      </span>
    );
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
        <button onClick={() => console.log(storageData)}>Show local</button>
        <Title>
          <FontAwesomeIcon icon={faShoppingCart} /> My Cart
        </Title>
        <DisplayWhat />
      </Container>
    </>
  );
}
