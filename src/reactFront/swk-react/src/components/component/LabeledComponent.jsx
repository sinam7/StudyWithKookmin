import React from "react";
import Input from "../ui/Input";
import styled from "styled-components";
import {COLOR_BORDER_BLUE} from "../config/Constant";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: ${COLOR_BORDER_BLUE};

  & {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`

const Text = styled.div``

export default function LabeledComponent(props) {

// <LabeledInput name="제목" value={state.title} onChange={handleChange}/>
    const {name, children} = props;

    return (
        <Wrapper>
            <Text>{name || "Default Text"}</Text>
            {children}
        </Wrapper>
    )
}