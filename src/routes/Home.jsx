import styled from 'styled-components';
import Search from '../components/Search';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 500px;
  max-width: 90%;
  background-color: var(--background);
`;

const Wrapper = styled.div`
  height: 100vh;
  color: var(--on-background);
  background-color: var(--background);
`;

function Home() {
  return (
    <Wrapper>
      <Main>
        <h1>Search for recipes</h1>
        <Search />
      </Main>
    </Wrapper>
  );
}

export default Home;
