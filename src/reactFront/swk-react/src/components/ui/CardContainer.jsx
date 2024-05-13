import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Card from "./Card";
import {useNavigate} from "react-router-dom";
import {getPostList} from "../api/getPostList";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    //grid-gap: 10px;
    //width: 50%;
`

export default function CardContainer({isLogin, searchButton, setSearchButton, searchValue}) {

    const navigate = useNavigate()
    const [postList, setPostList] = useState([])

    useEffect(() => {
        if (!isLogin) navigate('/')

        const initPostList = async () => {
            const postList = await getPostList(searchValue);
            setPostList(postList);
            setSearchButton(false);
            console.log(postList)
        };
        initPostList();
    }, [isLogin, navigate, searchButton]);

    return (
        <Container>
            {/*{data.map((card, index) => {*/}
            {/*    return <Card key={index} title={card.title} time={card.time} tags={card.tags}/>*/}
            {/*})}*/}
            {postList.map((post) => {
                return <Card key={post.id} title={post.title} day={post.day} time={post.time} tags={post.tags} onClick={() => navigate("/posts/" + post.id)}/>
            })}
        </Container>
    );


}