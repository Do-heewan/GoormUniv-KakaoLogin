import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Redirection = () => {
  const code = new URL(document.location.toString()).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(import.meta.env.VITE_REDIRECT_URI);
    console.log('인가코드', code);
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/kakao/login?code=${code}`).then((r) => {
      console.log('성공');
      console.log(r.data);

      // 토큰을 받아서 localStorage같은 곳에 저장하는 코드를 여기에 쓴다.
      localStorage.setItem('name', r.data.user_name);

      navigate('/good');
    });
  }, []);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
