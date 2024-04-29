import React from 'react';
import Tag from "./Tag";
import styled from "styled-components";

const Container = styled.div`
    display: inline-block;
`

export default function CardContainer(props) {
    const {tags} = props;

    return (
        <Container>
            {tags.map((tag, index) => {
                return (
                    <Tag key={index} value={tag}></Tag>
                )
            })}
        </Container>
    );


}