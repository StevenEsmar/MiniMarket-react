import data from '../../data/products.json';

const dataProducts= data.map((data) => {
    const showButtonAdd=()=>{
        var btnAdd = document.getElementById("ad");
        btnAdd.style.display = "block";
    }
    const hideButtonAdd=()=>{
        var btnAdd = document.getElementById("ad");
        btnAdd.style.display = "none";
    }
    return (
        <div className="product_card"  key={data.id} onMouseOver={showButtonAdd} onMouseOut={hideButtonAdd}>
            <button className="btn_add_product" id="ad">
                +
            </button>
            <img className="product_img" alt="Imagen del producto" src={data.image}></img>
            <div className="product_description">
                <h3 className="product_tittle">{data.name}</h3>
                <h4 className="product_price">{data.price}</h4>
            </div>
        </div>
    )
}
)
function Product() {
    return dataProducts
}

export default Product;