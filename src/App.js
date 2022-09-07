import Home from './components/home/Home';
import RootRouter from './components/router/RootRouter';

import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <RootRouter />
      <Header/>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
