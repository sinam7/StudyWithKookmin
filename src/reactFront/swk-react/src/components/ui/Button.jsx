import React from "react";
import styled from "styled-components"
import "../config/Constant";
import {COLOR_BORDER_BLUE, COLOR_BACKGROUND_BLUE} from "../config/Constant";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    border-color: ${COLOR_BORDER_BLUE};
    border-width: 3px;
    
    background: ${COLOR_BACKGROUND_BLUE};
`;

export default function Button(props) {
    const {title, onClick} = props;
    
    return (
        <StyledButton onClick={onClick}>{title || "button"}</StyledButton>
    )
};