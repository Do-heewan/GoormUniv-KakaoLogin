import { Navigate } from 'react-router-dom';

// 예시: localStorage에 'token'이 있으면 로그인된 상태
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('accessToken'); //Truthy/Falsy 값을 boolean으로 변환 `null` → `!!null` → `false`

  return isLoggedIn ? children : <Navigate to="/" replace />;
};
//replace : 브라우저 히스토리에서 현재 경로를 대체함 , 그래서 로그인 후 뒤로 가기를 눌러도 Protected (로그인 안된 페이지) 페이지로 다시 못 감.

export default ProtectedRoute;
