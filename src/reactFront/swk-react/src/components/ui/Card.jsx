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
`

const Title = styled.span`
    font-weight: bold;
    font-size: larger;
`

const Text = styled.span``



export default function Card(props) {
    const {title, time, tags} = props
    // console.log(tags)

    return (
        <Container>
            <Title>{title}</Title>
            <Text>{time}</Text>
            <TagContainer data={tags}/>
        </Container>
    )
}