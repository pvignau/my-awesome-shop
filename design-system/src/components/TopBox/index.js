
import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import Button from "../Button";
import Icon from "../Icon";

/* TopBox
 *
 * TODO: add component description
 */
const TopBox = ({ title, avatarSrc, avatarAlt}) => {
  return <StyledTopBox>
    <div style={{ marginBottom: 40, display: 'flex', justifyContent: 'space-between' }}>
      <Avatar imageSrc={avatarSrc} alt={avatarAlt} />
      <Button label={ <Icon name={'menu'} />} isOutline={ true }/>
    </div>
    <h1>{ title ? title : "Test title" }</h1>
  </StyledTopBox>;
};

const StyledTopBox = styled.div``;

export default TopBox;
