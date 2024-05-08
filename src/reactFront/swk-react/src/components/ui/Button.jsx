import React from "react";
import styled from "styled-components"
import "../config/Constant";
import {COLOR_BACKGROUND_BLUE, COLOR_BORDER_BLUE} from "../config/Constant";

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  border-width: 3px;

  border-color: ${(props) => props.color === "secondary" ? "grey" : COLOR_BORDER_BLUE};
  background: ${(props) => props.color === "secondary" ? "dimgrey" : COLOR_BACKGROUND_BLUE};
`;

export default function Button(props) {
    const {name, onClick/*, color*/} = props;

    return (
        <StyledButton onClick={onClick}>{name || "button"}</StyledButton>
    )
};
