import Toolbar from "../ui/Toolbar";
import Button from "../ui/Button";
import Input from "../ui/Input";
import CardContainer from "../ui/CardContainer";
import GoogleLogin from "../component/GoogleLogin";
import {useEffect, useState} from "react";
import {getUserInfo} from "../api/getUserInfo";
import {useNavigate} from "react-router-dom";

export default function MainPage({isLogin}) {
    const [searchValue, setSearchValue] = useState('');
    const [info, setInfo] = useState({
        email: '',
        firstName: '',
        lastName: '',
    });


    const navigate = useNavigate()

    useEffect(() => {
        if (!isLogin) navigate('/')

        const initUserInfo = async () => {
            const newInfo = await getUserInfo();
            setInfo(newInfo);
        };
        initUserInfo();
    }, [isLogin, navigate]);

    return (<div>
            <Toolbar>
                {isLogin === false ? <GoogleLogin title={'로그인'}/> : <p>name: {`${info.lastName} ${info.firstName}`}</p>}
                <Input
                    placeholder='검색어를 입력하세요...'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <Button name={'검색'}/>
                <Button name={'글쓰기'} onClick={() => navigate("/write")}/>
            </Toolbar>
            <CardContainer isLogin={isLogin}/>
        </div>);
};