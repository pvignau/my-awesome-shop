
import React from "react";
import styled from "styled-components";
import {Button, Icon} from "../../../dist/design-system";

/* TopBarDetails
 *
 * TODO: add component description
 */
const TopBarDetails = ({ title }) => {
  return <StyledTopBarDetails>
    <Button isOutline>
      <Icon name="arrowBack" />
    </Button>
    <StyledDiv>
      <h4>{ title }</h4>
    </StyledDiv>
  </StyledTopBarDetails>;
};

export const StyledTopBarDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const StyledDiv = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

export default TopBarDetails;
