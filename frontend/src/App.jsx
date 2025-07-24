import React from 'react';
import LoginLayout from './layout/LoginLayout';
import MainLayout from './layout/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './page/LoginPage';
import ForgetPage from './page/ForgetPage';
import Redirection from './page/Redirection';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginSuccess from './page/LoginSuccess';
import Community from './page/Child/Community';
import Project from './page/Child/Project';
import Study from './page/Child/Study';
const router = createBrowserRouter([
  {
    element: <LoginLayout />,
    children: [
      { path: '/', element: <LoginPage /> },
      { path: '/forget', element: <ForgetPage /> },
      { path: '/redirect', element: <Redirection /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: '/logined', element: <LoginSuccess /> },
      { path: '/project', element: <Project /> },
      { path: '/study', element: <Study /> },
      { path: '/community', element: <Community /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
