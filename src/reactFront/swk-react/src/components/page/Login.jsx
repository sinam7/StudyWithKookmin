
import { useNavigate } from 'react-router-dom';
import GoogleLogin from '../component/GoogleLogin';
import Nav from '../component/Nav';
import { postLoginToken } from '../api/postLoginToken';
import {useEffect} from "react";

export default function Login({ isLogin, setIsLogin }) {
  const navigate = useNavigate();

  // https://stackoverflow.com/questions/49819183/react-what-is-the-best-way-to-handle-login-and-authentication
  const onGoogleSignIn = async res => {
    const { credential } = res;
    const result = await postLoginToken(credential, setIsLogin);
    setIsLogin(result);
  };

  useEffect(() => {
    if (!isLogin) return;
    navigate('/main');
  }, [isLogin, navigate]);

  return (
    <div>
      <h1 style={{color:"green"}}>Study with Kookmin</h1>
      <h2>Google Login</h2>
      <Nav />
      <GoogleLogin onGoogleSignIn={onGoogleSignIn} text="로그인" />
    </div>
  );
}
