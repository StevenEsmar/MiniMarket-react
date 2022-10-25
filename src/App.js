import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="products_car">
        <Products/>
        <Cart/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;