
import React from "react";
import styled from "styled-components";
import Button from "../Button"
import Icon from "../Icon"
import { colors as themeColors } from "tokens";

const StyledDiv5 = styled.div`
  border-radius: 32px;
  margin-bottom: 24px;
  position: relative;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  margin: 24px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  display: block;
`;


const StyledP = styled.p`
  margin-bottom: 8px;
  opacity: 0.6;
`;

const Styledh1 = styled.h1`
  margin-bottom: 16px;
`;

const Styledh2 = styled.h2`
  color: ${themeColors.primaryGreen100};
  margin-bottom: 40px;
`;

/* ProductCardDetails
 *
 * TODO: add component description
 */
const ProductCardDetails = ({imageSrc, name, price, category}) => {
  return (
    <>
      <StyledDiv5>
        <StyledButton isOutline>
          <Icon name="heart" />
        </StyledButton>
        <StyledImg src={imageSrc} alt="" />
      </StyledDiv5>
      <StyledP>{category}</StyledP>
      <Styledh1>
        {name}
      </Styledh1>
      <Styledh2>{price}</Styledh2>
    </>
  );
};

export default ProductCardDetails;
