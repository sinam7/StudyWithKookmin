import React from 'react';
import styled from "styled-components";
import {COLOR_BORDER_BLUE} from "../config/Constant";
import TagContainer from "./TagContainer";

const Container = styled.div`
    display: flex;
    width: 30vh;
    flex-direction: column;
    border-color: ${COLOR_BORDER_BLUE};
    margin: 5px;
    padding: 5px;
    border-width: 3px;
    border-style: solid;
    border-radius: 5px;
    cursor: pointer;
`

const Title = styled.span`
    font-weight: bold;
    font-size: larger;
`

const Text = styled.span``



export default function Card(props) {
    const {title, time, day, tags, onClick} = props
    // console.log(tags)

    return (
        <Container onClick={onClick}>
            <Title>{title}</Title>
            <Text>{day}, {time}</Text>
            <TagContainer data={tags}/>
        </Container>
    )
}