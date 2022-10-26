import Products from './components/Products/Products';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Information from './components/Information/Information';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Products/>}/>
        <Route exact path="/info" element={<Information/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;