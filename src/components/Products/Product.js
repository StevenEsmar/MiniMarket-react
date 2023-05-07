import data from '../../data/products.json';
import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../Actions/Actions';

class Product extends React.Component {
    render(){ 
        const productItems = data.map((item,index) => {
        return (
            <div className="product_card"  key={index} onClick={()=>this.props.addToCart(item)}>
                <img className="product_img" alt="Imagen del producto" src={item.image}></img>
                <div className="overlay">
                    <span className="icon" title="User Profile">
                        <i class="fa fa-cart-plus"></i>
                    </span>
                </div>
                <div className="product_description">
                    <h3 className="product_tittle">{item.name}</h3>
                    <h4 className="product_price">{item.price}</h4>
                </div>
            </div>
            )
        }
        );
    return (
        <div className="carousel_products">
            { productItems }
        </div>
    )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addToCart: item => dispatch(addToCart({item}))
    }
}

export default connect(null,mapDispatchToProps)(Product);