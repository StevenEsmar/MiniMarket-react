import data from '../../data/products.json';
import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../Actions/Actions';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        btnAdd : false,
        idCard : 0
        };
        this.handleBtnAdd = this.handleBtnAdd.bind(this);
        this.handleHideBtnAdd = this.handleHideBtnAdd.bind(this);
    }
    handleBtnAdd(event,id) {
        this.setState({
            btnAdd: true,
            idCard:id
        });
    }
    handleHideBtnAdd(event,id) {
        this.setState({
            btnAdd: false,
            idCard:id
        });
    }
    render(){ 
        const productItems = data.map((item,index) => {
        return (
            <div className="product_card"  key={index} onMouseOver={(e)=>this.handleBtnAdd(e,index)} onMouseOut={(e)=>this.handleHideBtnAdd(e,index)}>
                {this.state.btnAdd && (this.state.idCard === index)?  
                <button className="btn_add_product" id={item.id} key={item.id} onClick={()=>this.props.addToCart(item)}>
                    Comprar 
                </button>:(<div/>)}
                <img className="product_img" alt="Imagen del producto" src={item.image}></img>
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