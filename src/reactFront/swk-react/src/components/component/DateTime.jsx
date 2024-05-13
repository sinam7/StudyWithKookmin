import styled from "styled-components";
import React, {useEffect, useState} from "react";

const Container = styled.div`
    display: flex;
  flex-direction: column;
  font-weight: 200;
  color: dimgrey;
`

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export default function DateTime({createDate, lastModifiedDate, authorName}) {

    const [created, setCreated] = useState()
    const [lastModified, setLastModified] = useState()
    useEffect(() => {
        const timeZoneOffset = 9 * 60 * 1000;
        setCreated(formatDate(new Date(new Date(createDate).getTime() + timeZoneOffset)));
        setLastModified(formatDate(new Date(new Date(lastModifiedDate).getTime() + timeZoneOffset)));
    }, [])

    return (
        <Container>
            Created at: {created}<br/>
            {/*{post.createDate !== post.lastModifiedDate &&*/}
            {/*    <span>Last Modified: {post.lastModifiedDate}</span>}*/}
            {/*<br/>*/}
            Last Modified: {lastModified}<br/>
            Author: {authorName}
        </Container>
    )
}