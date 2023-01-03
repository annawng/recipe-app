import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root';
import Home from './routes/Home';
import Recipe from './routes/Recipe';
import Results from './routes/Results';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'recipe',
          element: <Recipe />,
        },
        {
          path: 'search',
          element: <Results />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
