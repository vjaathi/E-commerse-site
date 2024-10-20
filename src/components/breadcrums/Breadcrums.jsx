import "./Breadcrums.css"
import arrow_icon from "../imges/breadcrum_arrow.png"


const Breadcrums = ({product}) => {
  return(
    <div className="breadcrums">
      HOME <img src={arrow_icon} /> 
      SHOP <img src={arrow_icon} />
      {product.category} <img src={arrow_icon}/>
      {product.name} <img src={arrow_icon} alt="" />
    </div>
  )
}

export default Breadcrums