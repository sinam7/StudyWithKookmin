import React, {useState} from "react";
import Button from "../ui/Button";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import LabeledComponent from "../component/LabeledComponent";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import TagInput from "../component/TagInput";
import {postPageWrite} from "../api/postPageWrite";

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

export default function PostWritePage() {
    const navigate = useNavigate();
    const submit = () => {
        const form = {
            title: state["title"],
            description: state["description"],
            tags: {tags}
        }
        postPageWrite(form).then(r => navigate("/main")) // todo navigate("posts/r.body like this")
    }
    const navigateCancel = () => navigate("/")

    const [state, setState] = useState({
        title: "",
        description: "",
    })
    const [tags, setTags] = useState([])

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
                <Textarea id="description" placeholder="내용" value={state.description} onChange={handleChange}/>
            </LabeledComponent>
            <br/>
            <TagInput tags={tags} setTags={setTags}/>
            <ButtonWrapper>
                <Button name="저장" onClick={submit}/>
                <Button name="취소" onClick={navigateCancel} color="secondary"/>
            </ButtonWrapper>
        </Wrapper>
    )
};