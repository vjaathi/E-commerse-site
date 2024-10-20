import { useContext } from "react";
import "./CSS/ShopCategory.css"
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/imges/dropdown_icon.png"
import Items from "../components/items/Items";

const ShopCategory = (props) =>{

  const {all_product} = useContext(ShopContext)
    return(
      <div className="shopcategory">
        <img src={props.banner} className="shopcategory-banner" />
        <div className="shopcategory-indexsort">
          <p> <span>Showing 1-12</span> Out of 36 Products</p>
          <div className="shopcategory-sort">
            Sort By <img src={dropdown_icon} />
          </div>
        </div>
        <div className="shopcategory-product">
          {all_product.map( (item,i) => {
            if(props.category===item.category){
              return <Items  key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price} />
            } else{
              return null
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
      </div>
    )
}

export default ShopCategory;