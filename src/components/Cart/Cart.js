import './Cart.css';
import React from 'react';
class Cart extends React.Component {
    render(){
        return (
            <div className="cart_container">
                <ul className="cart_list">
                    <div className="products_cart">
                        <div className="number_products">
                            <span>5</span>
                        </div>
                        <span className="product_name">Trululu</span>
                        <img src="https://www.super.com.co/media/TRULULU%20NEON%2012B%20X%2085G.png" className="images_cart" alt="Imagen producto"></img> 
                        <div>
                            <button className='add_product'>+</button>
                            <button className='remove_product'>-</button>
                        </div>
                    </div>
                    <div className="products_cart">
                        <div className="number_products">
                            <span>1</span>
                        </div>
                        <span className="product_name">Cheetos</span>
                        <img src="https://cheetos.com.mx/include/img/mobile/3_productos/producto_bolsa/poffets_mobile.png" className="images_cart" alt="Imagen producto"></img> 
                    </div>
                </ul>
                <div className='total_price'>
                    <p className='p_total'>
                        Total:
                    </p> 
                    <p className='p_price'>
                        $402540
                    </p>
                </div>
                <button>
                    Paga con Wompi
                </button>
            </div>
        );
    }
}
export default Cart;