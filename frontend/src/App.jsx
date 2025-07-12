import React from 'react';
import LoginPage from './page/LoginPage';
import ForgetPage from './page/ForgetPage';
import Redirection from './page/Redirection';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginSuccess from './page/LoginSuccess';
const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <div>오류 페이지</div>,
  },
  {
    path: '/forget',
    element: <ForgetPage />,
  },
  {
    path: '/auth/kakao/callback',
    element: <Redirection />,
  },
  {
    path: '/good',
    element: <LoginSuccess />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
