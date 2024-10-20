import "./Navbar.css"
import logo from "../imges/logo.png"
import cartIcon from "../imges/cart_icon.png"
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";


function Navbar(){

  const [menu,setMenu] = useState("shop")
  const {getTotalItems} = useContext(ShopContext)
  
return(
  <div className="newLogo ">
    <div className="nav-logo  d-flex">
      <img src={logo} alt="nav-logo" />
      <p>TrendyTreasures</p>
    </div>
      <ul className="nav-menu d-flex ">
        <li onClick={ () => { setMenu("shop")}}><Link to="/" className="link1">Shop</Link>{menu==="shop"?<hr/>:<></>} </li>
        <li onClick={ () => { setMenu("men")}}><Link to="/mens" className="link1">Men</Link>  {menu==="men"?<hr/>:<></>} </li>
        <li onClick={ () => { setMenu("women")}}><Link to="/womens" className="link1">Women</Link>  {menu==="women"?<hr/>:<></>} </li>
        <li onClick={ () => { setMenu("kid")}}><Link to="/kids" className="link1">Kids</Link>  {menu==="kid"?<hr/>:<></>} </li>
      </ul>
    <div className="nav-cart-icon d-flex">
      <Link to="/login"><button className="btn btn1 btn-danger ">LogIn</button></Link> 
      <Link to="/cart"><img src={cartIcon} alt="buy" /></Link> 
      <div className="nav-cart-count d-flex text-light">{getTotalItems()}</div>
    </div>
  </div>
)
}

export default Navbar;
