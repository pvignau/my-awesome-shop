
import React from "react";
import styled from "styled-components";


/* Avatar
 *
 * TODO: add component description
 */
const Avatar = (props) => {
  return <StyledAvatar><img src="https://via.placeholder.com/48"  alt="avatar image" /></StyledAvatar>;
};

export const StyledAvatar = styled.div`
  box-sizing: border-box;
  position: relative;
  border-radius: 12px;
  background-color: ${(p) => (p.color ? "transparent" : p.color)};
  width: 48px;
  height: 48px;
  overflow: hidden;
`;

export default Avatar;


