import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import { ThemeContext } from '../context/ThemeContext';

const Body = styled.div`
  background-color: var(--background);
  color: var(--on-background);
`;

const Container = styled.div`
  max-width: 90%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function Root() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Body className={darkMode && 'dark-mode'}>
      <Container>
        <NavBar />
        <Outlet />
      </Container>
    </Body>
  );
}

export default Root;
