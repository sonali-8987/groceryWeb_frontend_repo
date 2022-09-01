import { Container } from '@material-ui/core';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import RootRouter from './components/router/RootRouter';
import {Box} from '@material-ui/core';


function App() {
  return (
   <>
      <Header />
     <RootRouter />
      <Footer />
      
   </>

  );
}

export default App;
