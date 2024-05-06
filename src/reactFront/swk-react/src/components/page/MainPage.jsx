import Toolbar from "../ui/Toolbar";
import Button from "../ui/Button";
import Input from "../ui/Input";
import CardContainer from "../ui/CardContainer";
import GoogleLogin from "../component/GoogleLogin";
import {useEffect, useState} from "react";
import {getUserInfo} from "../api/getUserInfo";

export default function MainPage(props) {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const initLogin = async () => {
            const name = await getUserInfo();
            setIsLogin(!!name);
        };
        initLogin();
    }, []);

    return (<div>
            <Toolbar>
                {isLogin === false && <GoogleLogin title={'로그인'}/>}
                <Input
                    placeholder='검색어를 입력하세요...'
                />
                <Button title={'검색'}/>
            </Toolbar>
            <CardContainer/>
        </div>);
};