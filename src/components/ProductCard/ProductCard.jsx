import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  transition: all cubic-bezier(0.5, 0, 0.5, 1) 0.3s;
  &:hover {
    transform: scale(1.019);
  }
`;

const Image = styled.img`
  max-width: 100%;
  display: block;
  object-fit: contain;
  height: 200px;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  font-size: clamp(1.3rem, 1.26rem + 0.19999999999999996vw, 1.5rem);
  margin: 16px 0 0 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Price = styled.p`
  font-size: 1.25rem;
  color: #333;
  margin: 0;
`;

function ProductCard({ product }) {
  const { image, title, description, price } = product;

  return (
    <CardContainer>
      <Image src={image} alt={title} loading="lazy" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>${price}</Price>
    </CardContainer>
  );
}

export default ProductCard;
