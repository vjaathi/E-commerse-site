import "./Popular.css"
import data_product from "../imges/data"
import Items from "../items/Items"

const Popular = () => {
    return(
      <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular-item">
          {data_product.map( (item,i) => {
            return <Items key={i} id={item.id} name={item.name} img={item.image} old_price={item.old_price} new_price={item.new_price} /> 
          })}
        </div>
      </div>
    )
}

export default Popular