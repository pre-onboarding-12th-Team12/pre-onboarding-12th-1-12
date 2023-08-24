import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import SignUp from 'pages/SignUp';
import SignIn from 'pages/SignIn';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: 'Landing',
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: 'todo',
        element: 'todo',
      },
    ],
  },
]);

export default Router;
