import {useState} from 'react';
import styled from "styled-components";
import {COLOR_BACKGROUND_BLUE, COLOR_BORDER_BLUE} from "../config/Constant";

const StyledInput = styled.input`
    width: 30vh;
    height: 20px;
    padding: 8px 16px;
    border-color: ${COLOR_BORDER_BLUE};
    border-width: 2px;
    background: ${COLOR_BACKGROUND_BLUE};
`

export default function Input(props) {
    const { placeholder } = props;
    const [value, setValue] = useState('')
    const onChange = (e) => {setValue(e.target.value)}

    return <StyledInput value={value} onChange={onChange} placeholder={placeholder}></StyledInput>
}