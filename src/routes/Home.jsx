import styled from 'styled-components';

import Search from '../components/Search';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 500px;
  max-width: 90%;
`;

function Home() {
  return (
    <Main>
      <h1>Search for recipes</h1>
      <Search />
    </Main>
  );
}

export default Home;
