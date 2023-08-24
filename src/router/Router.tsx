import { createBrowserRouter } from 'react-router-dom';
import App from 'App';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: 'Landing 혹은 Login',
      },
      // Landing이있다면 signin path 넣어주어야합니다.
      {
        path: 'signup',
        element: 'signup',
      },
      {
        path: 'todo',
        element: 'todo',
      },
    ],
  },
]);

export default Router;
