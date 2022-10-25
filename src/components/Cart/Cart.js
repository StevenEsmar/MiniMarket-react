import './Cart.css';

const Cart=() => {
    return (
        <div className="cart_container">
            <ul className="cart_list">
                <li className="products_cart">
                    <div className="number_products">
                        <span>5</span>
                    </div>
                    <span className="product_name">Platanos</span>
                    <img src="https://vixark.b-cdn.net/lp-i-i-g/platanitos-verdes-natuchips-140g.jpg" className="images_cart" alt="Imagen producto"></img> 
                </li>
            </ul>
        </div>
    );
}
export default Cart;