import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { useParams } from "react-router-dom"
import Breadcrums from "../components/breadcrums/Breadcrums"
import ProductDisplay from "../components/productDisplay/ProductDisplay"
import DiscriptionBox from "../components/descriptionbox/DiscriptionBox"
import RelatedProduct from "../components/relatedproduct/RelatedProduct"

const Product = () => {

  const {all_product}= useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find( (e)=> e.id === Number(productId)) 
  return(
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DiscriptionBox />
      <RelatedProduct />
    </div>
  ) 
}

export default Product;