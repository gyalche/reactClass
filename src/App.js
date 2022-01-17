import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Mid from './components/Mid';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Mid></Mid>
        <Footer></Footer>
      </BrowserRouter>
    </div>
      
   
  );
}

export default App;
