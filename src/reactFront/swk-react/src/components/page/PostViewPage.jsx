import React, {useEffect, useState} from "react";
import Button from "../ui/Button";
import {useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import {getPost} from "../api/getPost";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    & {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export default function PostViewPage({isLogin}) {

    const params = useParams();
    const postId = params.id;
    const navigate = useNavigate();
    const navigateCancel = () => navigate("/")

    const [post, setPost] = useState({
        title: "",
        content: "",
        tags: [],
        day: "",
        time: "",
        authorName: ""
    })

    useEffect(() => {
        if (!isLogin) navigate('/')

        const initPost = async () => {
            const newPost = await getPost(postId);
            setPost(newPost);
            console.log(newPost)
        };
        initPost();
    }, [isLogin, navigate, postId]);


    return (
        <Wrapper>
            <h1>{post.title}</h1>
            <span style={{fontSize: "small"}}>{post.authorName}</span>
            <span style={{fontSize: "x-small"}}>{post.tags.map(tag => "#" + tag + " ")}</span>
            <hr width="100%"/>
            <span>{post.content}</span>
            <hr width="100%"/>
            <span style={{fontSize: "small"}}>{post.day}, {post.time}</span>
            <hr width="100%"/>
            <ButtonWrapper>
                <Button name="돌아가기" onClick={navigateCancel} color="secondary"/>
            </ButtonWrapper>
        </Wrapper>
    )
};