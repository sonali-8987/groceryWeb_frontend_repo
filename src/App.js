import Home from './components/home/Home';
import RootRouter from './components/router/RootRouter';

import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

      <Home />
      <RootRouter />

    </BrowserRouter>

  );
}

export default App;
