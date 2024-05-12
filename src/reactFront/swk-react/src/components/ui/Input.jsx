import styled from "styled-components";
import {COLOR_BACKGROUND_BLUE, COLOR_BORDER_BLUE} from "../config/Constant";

const StyledInput = styled.input`
    width: ${(width) => width ? width : "30vh"};;
    height: 20px;
    padding: 8px 16px;
    border-color: ${COLOR_BORDER_BLUE};
    border-width: 2px;
    background: ${COLOR_BACKGROUND_BLUE};
`

export default function Input(props) {
    const { id, placeholder, value, onChange, onKeyDown, width } = props;

    return <StyledInput
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        width={width}
    ></StyledInput>
}