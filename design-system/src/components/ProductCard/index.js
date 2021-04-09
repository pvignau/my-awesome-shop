
import React from "react";
import styled from "styled-components";

const StyledProductImage = styled.img`
  max-width: 100%;
  margin-bottom: 16px;
`;
const StyledProductPrice = styled.p`
  color: #f15223;
  font-weight: 700;
  margin-top: 8px;`;

/* ProductCard
 *
 * TODO: add component description
 */
const ProductCard = ({imageSrc, name, price}) => {
  return (
      <StyledProductCard>
        <StyledProductImage src={imageSrc} alt="" />
        <h4>{name}</h4>
        <StyledProductPrice>{price}</StyledProductPrice>
      </StyledProductCard>
  );
};

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ProductCard;
