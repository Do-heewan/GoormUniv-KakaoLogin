import React from 'react';
import LoginPage from './page/LoginPage';
import ForgetPage from './page/ForgetPage';
import Redirection from './page/Redirection';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginSuccess from './page/LoginSuccess';
import Community from './page/Child/Community';
import Project from './page/Child/Project';
import Study from './page/Child/Study';
const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <div>오류 페이지</div>,
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <div>오류 페이지</div>,
  },
  // 잊은 비번 찾기
  {
    path: '/forget',
    element: <ForgetPage />,
  },
  // callback
  {
    path: '/redirect',
    element: <Redirection />,
  },
  //로그인 성공 시 페이지
  {
    path: '/logined',
    element: <LoginSuccess />,
  },
  // Study
  {
    path: '/study',
    element: <Study />,
  },
  // Project
  {
    path: '/project',
    element: <Project />,
  },
  // Community
  {
    path: '/community',
    element: <Community />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
