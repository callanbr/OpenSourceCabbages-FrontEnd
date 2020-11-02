import React from "react";
import { FaJava } from "react-icons/fa";
import styled from "styled-components";

export default function Footer(props) {
  const Footer = styled.div`
    background-color: #dfe8e0;
    padding: 5px;
    font-size: 0.7rem;
    position: sticky;
    bottom: 0;
    text-align: center;
    margin-top: 344px;
    width: 100%;
  `;

  return (
    <Footer>
      <div className="page-container">
        <div className="row">
          <div className="col">
            <p>
              Website created by OpenSourceCabbages | 2020 | All rights reserved | Privacy | <FaJava />
            </p>
          </div>
        </div>
      </div>
    </Footer>
  );
}
