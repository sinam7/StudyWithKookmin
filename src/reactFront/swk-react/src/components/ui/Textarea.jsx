import styled from "styled-components";
import {COLOR_BACKGROUND_BLUE, COLOR_BORDER_BLUE} from "../config/Constant";

const StyledTextarea = styled.textarea`
    width: 30vh;
    height: 200px;
    padding: 8px 16px;
    border-color: ${COLOR_BORDER_BLUE};
    border-width: 2px;
    background: ${COLOR_BACKGROUND_BLUE};
    resize: vertical;
`

export default function Textarea(props) {
    const { id, placeholder, value, onChange } = props;

    return <StyledTextarea id={id} value={value} onChange={onChange} placeholder={placeholder}></StyledTextarea>
}