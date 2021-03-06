
import React from "react";
import styled from "styled-components";


/* Avatar
 *
 * TODO: add component description
 */
const Avatar = ({imageSrc, alt}) => {
  return <StyledAvatar>
    <StyledImg src={imageSrc}  alt={alt} />
  </StyledAvatar>;
};

const StyledAvatar = styled.div`
  box-sizing: border-box;
  position: relative;
  border-radius: 12px;
  background-color: ${(p) => (p.color ? "transparent" : p.color)};
  width: 48px;
  height: 48px;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 48px;
  height: 48px;
`;

export default Avatar;


