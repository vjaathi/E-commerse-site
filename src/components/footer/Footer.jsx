import "./Footer.css"
import footer_logo from "../imges/logo_big.png"
import insta from "../imges/instagram_icon.png"
import pintester from "../imges/pintester_icon.png"
import whatsapp from "../imges/whatsapp_icon.png"
 
const Footer = () => {
    return(
      <div className="footer">
        <div className="footer-logo">
          <img src={footer_logo} alt="" />
          <p>TrendyTreasures</p>
        </div>
        <div className="footer-link">
          <li>Company</li>
          <li>Products</li>
          <li>Officers</li>
          <li>Contact</li>
          <li>About</li>
        </div>
        <div className="footer-social-icon">
          <div className="footer-icon-container">
            <img src={insta} alt="" />
          </div>
          <div className="footer-icon-container">
            <img src={pintester} alt="" />
          </div>
          <div className="footer-icon-container">
            <img src={whatsapp} alt="" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>CopyRight @ 2024 - All Right Reserved...</p>
        </div>
        
      </div>
    )
}

export default Footer