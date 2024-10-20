import "./RelatedProduct.css"
import data_product from "../imges/data"
import Items from "../items/Items"

 const RelatedProduct = () => {
    return(
      <div className="relateproducts">
        <h1>Related Products</h1>
        <hr />
        <div className="relateproduct-item">
          {data_product.map( (item,i) => {
             return <Items  key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price} />
          })}
        </div>
      </div>
    )
 }

 export default RelatedProduct;