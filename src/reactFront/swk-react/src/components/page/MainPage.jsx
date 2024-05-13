import Toolbar from "../ui/Toolbar";
import Button from "../ui/Button";
import Input from "../ui/Input";
import CardContainer from "../ui/CardContainer";
import GoogleLogin from "../component/GoogleLogin";
import {useEffect, useState} from "react";
import {getUserInfo} from "../api/getUserInfo";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 80vh;
`

export default function MainPage({isLogin}) {
    const [searchValue, setSearchValue] = useState('');
    const [info, setInfo] = useState({
        email: '',
        firstName: '',
        lastName: '',
    });
    const [searchButton, setSearchButton] = useState(false)

    const navigate = useNavigate()

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onSearchButtonClick();
        }
    }

    useEffect(() => {
        if (!isLogin) navigate('/')

        const initUserInfo = async () => {
            const newInfo = await getUserInfo();
            setInfo(newInfo);
        };
        initUserInfo();
    }, [isLogin, navigate]);

    const onSearchButtonClick = () => setSearchButton(true);
    return (
        <Wrapper>
        <Toolbar>
            {isLogin === false ? <GoogleLogin title={'로그인'}/> : <p>name: {`${info.lastName} ${info.firstName}`}</p>}
            <Input
                placeholder='검색할 태그를 입력하세요...'
                value={searchValue}
                onKeyDown={handleKeyDown}
                onChange={(e) => setSearchValue(e.target.value)}
                width="30vh"
            />
            <Button name={'검색'} onClick={onSearchButtonClick}/>
            <Button name={'글쓰기'} onClick={() => navigate("/write")}/>
        </Toolbar>
        <CardContainer isLogin={isLogin} searchButton={searchButton} setSearchButton={setSearchButton}
                       searchValue={searchValue}/>
        </Wrapper>
    );
};