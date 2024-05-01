import React from "react";
import styled from "styled-components";
import {COLOR_BORDER_BLUE} from "../config/Constant";

const Container = styled.div`
    display: flex;
    
    flex-direction: row;
    border-color: ${COLOR_BORDER_BLUE};
    margin: 5px;
    padding: 5px;
    border-width: 3px;
    border-style: solid;
    border-radius: 5px;
`

export default function Toolbar(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}