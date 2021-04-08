
import React from "react";
import styled from "styled-components";
import { StyledAvatar } from "../Avatar";
import Button from "../Button";
import Icon from "../Icon";

/* TopBox
 *
 * TODO: add component description
 */
const TopBox = ({ title, ...props }) => {
  return <StyledTopBox>
    <div style={{ marginBottom: 40, display: 'flex', 'justify-content': 'space-between' }}>
      <StyledAvatar />
      <Button label={ <Icon name={'menu'} />} isOutline={ true }/>
    </div>
    <h1>{ title ? title : "Test title" }</h1>
  </StyledTopBox>;
};

export const StyledTopBox = styled.div`
  width: 375px;
  margin: 0 auto;
`;

export default TopBox;
