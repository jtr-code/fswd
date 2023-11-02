import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styled from "styled-components";

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: "center";
  padding-inline: 1rem;

  @media (width<= 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (width<= 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function ProductList({ products }) {
  return (
    <>
      <ProductWrapper>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductWrapper>
    </>
  );
}

export default ProductList;
