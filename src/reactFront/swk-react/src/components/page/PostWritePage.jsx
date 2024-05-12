import React, {useEffect, useState} from "react";
import Button from "../ui/Button";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import LabeledComponent from "../component/LabeledComponent";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import TagInput from "../component/TagInput";
import {postPageWrite} from "../api/postPageWrite";
import {getUserInfo} from "../api/getUserInfo";

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

export default function PostWritePage({isLogin}) {

    const navigate = useNavigate();
    const navigateCancel = () => navigate("/")

    const [info, setInfo] = useState({
        email: '',
        firstName: '',
        lastName: '',
    });

    const [state, setState] = useState({
        title: "title",
        content: "content",
        day: "Monday",
        time: "19~20"
    })

    const [tags, setTags] = useState(["tag1", "tag2"])

    const submit = () => {
        const form = {
            title: state["title"],
            content: state["content"],
            tags: tags,
            day: state["day"],
            time: state["time"],
            authorEmail: info.email
        }
        console.log(form);
        postPageWrite(form).then(r => navigate("/main")) // todo navigate("posts/r.body like this")

    }

    useEffect(() => {
        if (!isLogin) navigate('/')

        const initUserInfo = async () => {
            const newInfo = await getUserInfo();
            setInfo(newInfo);
        };
        initUserInfo();
    }, [isLogin, navigate]);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value,
        })
    }

    return (
        <Wrapper>
            <LabeledComponent name="제목">
                <Input id="title" placeholder="제목" value={state.title} onChange={handleChange}/>
            </LabeledComponent>
            <LabeledComponent name="내용">
                <Textarea id="content" placeholder="내용" value={state.content} onChange={handleChange}/>
            </LabeledComponent>
            <div style={{display: "flex", flexDirection: "row"}}>
                <LabeledComponent name="희망 요일">
                    <Input id="day" placeholder="예시: 화, 목" value={state.day} onChange={handleChange} width="10vh"/>
                </LabeledComponent>
                <LabeledComponent name="희망 시간대">
                    <Input id="time" placeholder="예시: 18시 ~ 19시" value={state.time} onChange={handleChange}
                           width="10vh"/>
                </LabeledComponent>
            </div>

            <br/>
            <TagInput tags={tags} setTags={setTags}/>
            <ButtonWrapper>
                <Button name="저장" onClick={submit}/>
                <Button name="취소" onClick={navigateCancel} color="secondary"/>
            </ButtonWrapper>
        </Wrapper>
    )
};