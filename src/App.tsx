import { Outlet } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
};

export default App;
