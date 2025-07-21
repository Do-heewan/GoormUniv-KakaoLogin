import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ToolBar></ToolBar>
      <Outlet />
    </Wrapper>
  );
};

export default MainLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ToolBar = () => {
  return (
    <>
      <div>ToolBar 입니다</div>
    </>
  );
};

const NavItem = styled.div`
  cursor: pointer;
`;
