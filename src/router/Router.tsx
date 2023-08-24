import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import Landing from 'pages/Landing';
import SignUp from 'pages/SignUp';
import SignIn from 'pages/SignIn';
import ToDo from 'pages/ToDo';
import ProtectedRoute from 'utils/ProtectRoute';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />,
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
        path: '/todo',
        element: <ToDo />,
      },
    ],
  },
]);

export default Router;
