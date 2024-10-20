import "./ProductDisplay.css"
import star_icon from "../imges/star_icon.png"
import star_dull from "../imges/star_dull_icon.png"
import { useContext } from "react"
import { ShopContext } from "../../context/ShopContext"
import Product from "../../pages/Product"


const ProductDisplay = ({product}) => {
 
  const {addToCart} = useContext(ShopContext)
  return(
    <div className="productdisplay">
      <div className="prodis-left">
        <div className="prodis-img-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        </div>
        <div className="prodis-img">
          <img className="prodis-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="prodis-right">
        <h1>{product.name}</h1>
        <div className="prodis-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull} alt="" />
          <p>(122)</p>
        </div>
      
        <div className="prodis-right-price">
          <div className="prodis-right-price-old"> ${product.old_price}</div>
          <div className="prodis-right-price-new">${product.new_price}</div>
        </div>
        <div className="prodis-right-discription">
          A Lightwight round necked sit amet, consectetur adipisicing elit. Quis voluptatibus libero, facere blanditiis doloribus adipisci distinctio perspiciatis iusto asperiores doloremque, quasi repellat vitae aspernatur ab vel molestiae. Ipsum fugit voluptates nihil quam facere, eius at in porro dolores, placeat fugiat!
        </div>
        <div className="prodis-right-size">
          <h1>Select Size</h1>
          <div className="prodis-right-sizes"> 
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => {addToCart(product.id)}}>ADD TO CARD</button>
        <p className="prodis-right-category"><span>Category :</span> Women , T-shirt, crop Top </p>
        <p className="prodis-right-category"><span>Tags :</span> Modern , Latest </p>
      </div>
    </div>
  )
}

export default ProductDisplay;