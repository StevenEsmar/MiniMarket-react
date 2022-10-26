import './Products.css';
import Product from './Product';
import React from 'react';
import Header from '../Header/Header';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
class Products extends React.Component {
    render(){
        return (
            <div>
                <Header/>
                <div className="products_car">
                    <div className="container_products">
                        <h2>
                            Productos
                        </h2>
                        <div className="carousel_products">
                            <Product/>
                        </div>
                    </div>
                <Cart/>
                </div>
                <Footer/>
            </div>
            
        );
    }
}
export default Products;