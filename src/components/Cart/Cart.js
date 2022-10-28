import './Cart.css';
import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../Actions/Actions';
class Cart extends React.Component {
    render(){   
        const cartItems=this.props.cart.map((item,index)=>{
            return(
                <div className="products_cart" key={index}>
                    <span className="product_name">{item.item.name}</span>
                    <img src={item.item.image} className="images_cart" alt="Imagen producto"></img> 
                    <div>
                        <button className='remove_product' onClick={ () => this.props.removeFromCart(item)}>Quitar</button>
                    </div>
                </div>
            );
        });
        const totalPrice=this.props.cart.reduce((sum, item) => sum + item.item.price, 0);
        return (
            <div className="cart_container">
                {(this.props.cart.length <= 0) ?
                <div>
                <p className='no_products'>
                    Seleccione un producto del catálogo
                </p>
                </div>:
                <div>
                    <ul className="cart_list">
                        {cartItems}  
                    </ul>
                    <div className='total_price'>
                        <p className='p_total'>
                            Total:
                        </p> 
                        <p className='p_price'>
                            ${totalPrice}
                        </p>
                    </div>
                    <form action="https://checkout.wompi.co/p/" method="GET" className='form_wompi'>
                        <input type="hidden" name="public-key" value="pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf" />
                        <input type="hidden" name="currency" value="COP" />
                        <input type="hidden" name="amount-in-cents" value={totalPrice+"00"} />
                        <input type="hidden" name="reference" value="pagoXWompiTest" />
                    <button type="submit" className='waybox-button'>Pagar con Wompi</button>
                    </form>
                </div>}
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        cart: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: item => dispatch(removeFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);