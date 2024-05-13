import {useState} from "react";
import TagContainer from "../ui/TagContainer";
import Input from "../ui/Input";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`

const Text = styled.span``

export default function TagInput(props) {
    const {tags, setTags} = props;
    const [value, setValue] = useState('')

    const handleValueChange = (e) => {
        setValue(e.target.value)
    }

    const handleAddTagChange = (e) => {
        if (e.key === "Enter") {
            setTags(prevState => [...prevState, e.target.value]);
            setValue("");
        }
    }

    const handleRemoveTagChange = (e) => {
        console.log(e.target.innerText)
        setTags(tags.filter(t => t !== e.target.innerText))
    }

    return (
        <Wrapper>
            <Text>태그</Text>
            <Input
                id="tagInput"
                placeholder="태그"
                value={value}
                onChange={handleValueChange}
                onKeyDown={handleAddTagChange}
            />
            <TagContainer
                data={tags}
                onClick={handleRemoveTagChange}
            />
        </Wrapper>

    )
};