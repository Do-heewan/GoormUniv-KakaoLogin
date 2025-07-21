import { Navigate } from 'react-router-dom';

// 예시: localStorage에 'token'이 있으면 로그인된 상태
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('token');

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
