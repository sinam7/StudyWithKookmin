import React from 'react';
import Tag from "./Tag";
import styled from "styled-components";

const Container = styled.div`
    display: inline-block;
`

export default function TagContainer(props) {
    const {data} = props;

    return (
        <Container>
            {
                data.map((tag, index) => {
                        return <Tag key={index} value={tag}/>
                    }
                )
            }
        </Container>
    );


}