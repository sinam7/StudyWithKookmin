import './App.css';
import {useEffect, useState} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {getUserInfo} from "./components/api/getUserInfo";
import MainPage from "./components/page/MainPage";
import Login from "./components/page/Login";
import PostWritePage from "./components/page/PostWritePage";

export default function App() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const initLogin = async () => {
            const name = await getUserInfo();
            setIsLogin(!!name);
        };
        initLogin();
    }, []);

    return (
        <Routes>
            <Route index element={<Login isLogin={isLogin} setIsLogin={setIsLogin}/>}/>
            <Route path="main" element={isLogin ? <MainPage isLogin={isLogin}/> : <Navigate to="/"/>}/>
            {/*<Route path="write" element={isLogin ? <PostWritePage /> : <Navigate to="/"/>}/>*/}
            <Route path="write" element={<PostWritePage />}/>

        </Routes>
    );
}
