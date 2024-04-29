import React from "react";
import styled from "styled-components";
import {COLOR_BORDER_BLUE} from "../config/Constant";

const TagItem = styled.div`
    display: flex inline;
    width: fit-content;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
    padding: 5px;
    background-color: ${COLOR_BORDER_BLUE};
    border-radius: 5px;
    color: black;
    font-size: 13px;
`

const Text = styled.span``

export default function Tag(props) {
    const { value } = props;

    return (
        <TagItem><Text>{value}</Text></TagItem>
    )
};