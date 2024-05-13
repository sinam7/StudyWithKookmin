import React, {useEffect, useState} from "react";
import Button from "../ui/Button";
import {useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import {getPost} from "../api/getPost";
import {COLOR_BORDER_BLUE} from "../config/Constant";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-color: ${COLOR_BORDER_BLUE};
    margin: 5px;
    border-width: 3px;
    border-style: solid;
    border-radius: 5px;
    width: 80vh;

    & > {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
  
    & > hr {
      width: 100%;
      border: 0;
      height: 1px;
      background: ${COLOR_BORDER_BLUE};
    }
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Title = styled.div`
    font-weight: bold; // bold
  font-size: xx-large;
  align-content: center;
`

const Metadata1 = styled.div`
    display: flex;
  flex-direction: column;
  font-weight: 200;
  color: dimgrey;
`

const Content = styled.div`
    // font-weight: 400;
`

const Footer = styled.div`
    display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const WishTime = styled.div`
  //font-size: smaller;
  color: dimgrey;
`

const Tags = styled.div`
  font-size: small;
  color: dimgrey;
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
        authorName: "",
        createDate: "",
        lastModifiedDate: "",
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
            <Header>
                <Title>{post.title}</Title>
                <Metadata1>
                    Created at: {post.createDate}<br/>
                    {/*{post.createDate !== post.lastModifiedDate &&*/}
                    {/*    <span>Last Modified: {post.lastModifiedDate}</span>}*/}
                    {/*<br/>*/}
                    Last Modified: {post.lastModifiedDate}<br/>
                    Author: {post.authorName}
                </Metadata1>
            </Header>
            <hr/>
            <Content>{post.content}</Content>
            <hr/>
            <Footer>
                <WishTime>{post.day}, {post.time}</WishTime>
                <Tags>{post.tags.map(tag => "#" + tag + " ")}</Tags>
            </Footer>
            <ButtonWrapper>
                <Button name="돌아가기" onClick={navigateCancel}/>
            </ButtonWrapper>
        </Wrapper>
    );
};