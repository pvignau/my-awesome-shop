import React from "react";
import styled from "styled-components";
import { Button, Icon, ProductCardDetails } from "design-system";
import itemImg from "../assets/item1.png";
import {TopBarDetails} from "design-system/src";

const StyledDiv1 = styled.div`
  padding: 64px 40px;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const StyledDiv3 = styled.div`
  flex-grow: 2;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-left: 24px;
`;
const StyledDiv4 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Details = () => {
  return (
    <div>
      <StyledDiv1>
        <TopBarDetails title={'My product name'} />
        <StyledDiv2>
          <Button isOutline>
            <Icon name="arrowBack" />
          </Button>
          <StyledDiv3>
            <h4>Nike Air Force 1 '07 LX</h4>
          </StyledDiv3>
        </StyledDiv2>
        <StyledDiv4>
          <ProductCardDetails imageSrc={itemImg} name={`Nike Air Force 1\u00A0'07\u00A0LX`} price="€95.00" category=" Men's Shoe" />
          <Button>Add to Cart</Button>
        </StyledDiv4>
      </StyledDiv1>
    </div>
  );
};

export default Details;
