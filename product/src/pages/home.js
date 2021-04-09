/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import React from "react";
import styled from "styled-components";
import { Button, Icon, ProductCard } from "design-system";

import avatarImg from "../assets/avatar.png";
import item1Img from "../assets/item1.png";
import item2Img from "../assets/item2.png";
import item3Img from "../assets/item3.png";
import item4Img from "../assets/item4.png";

const StyledDiv1 = styled.div`
  padding: 64px 40px;
`;

const StyledImage = styled.img`
  width: 48px;
  height: 48px;
`;

const Styledh1 = styled.h1`
  margin-bottom: 40px;
  letter-spacing: -1.6px;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;
const StyledDiv4 = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDiv5 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 24px;
`;

const StyledBorder = styled.div`
  width: 1px;
  height: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 8px;
`;

const StyledButton = styled(Button)`
  padding: 0;
  border: 0;
  margin: 0 8px;
  &:last-child {
    margin-right: 0;
  }
`;

const Home = () => {
  return (
    <div>
      <StyledDiv1>
        <StyledDiv2>
          <StyledImage src={avatarImg} />
          <Button isOutline>
            <Icon name="menu" />
          </Button>
        </StyledDiv2>
        <Styledh1>Store</Styledh1>

        <StyledDiv3>
          <h4>All Product</h4>

          <StyledDiv4>
            <StyledButton color="transparent">
              <Icon name="viewItem" width={24} height={16} />
            </StyledButton>
            <StyledButton color="transparent">
              <Icon name="viewGrid" width={24} height={16} />
            </StyledButton>
            <StyledBorder />
            <StyledButton color="transparent">
              <Icon name="filter" width={24} height={16} />
            </StyledButton>
          </StyledDiv4>
        </StyledDiv3>
        <StyledDiv5>
          <ProductCard imageSrc={item1Img} name="Nike Air Force 1 '07" price="€95.00" />
          <ProductCard imageSrc={item2Img} name="Nike Air Shadow Force" price="€105.00" />
          <ProductCard imageSrc={item3Img} name="Nike Air Force 1 '07" price="€95.00" />
          <ProductCard imageSrc={item4Img} name="Nike Air Force 1 '07" price="€95.00" />
        </StyledDiv5>
      </StyledDiv1>
    </div>
  );
};

export default Home;
