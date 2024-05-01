import React from 'react';
import styled from "styled-components";
import data from "../config/data.json";
import Card from "./Card";

const Container = styled.div`
    display: inline-block;
`

export default function CardContainer(props) {

    return (
        <Container>
            {data.map((card, index) => {
                return <Card key={index} title={card.title} time={card.time} tags={card.tags}/>
            })}
        </Container>
    );


}