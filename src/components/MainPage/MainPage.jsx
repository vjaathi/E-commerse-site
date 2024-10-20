import hand_icon from "../imges/hand_icon.png"
import arrow_icon from "../imges/arrow.png"
import hero_img from "../imges/hero_image.png"
import "./MainPage.css"

function MainPage(){
    return (
      <div className="mainPage d-flex">
        <div className="mainPage-left">
          <h2>NEW ARAVILES ONLY...</h2>
          <div>
            <div className="hand-icon">
              <p>New</p>
              <img src={hand_icon} alt="" />
            </div>
            <p>Collections </p>
            <p>For EveryOne</p>
          </div>
          <div className="Latest-btn">
            <p>Latest-Collection</p>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="mainPage-right">
          <img src={hero_img} alt="" />
        </div>
      </div>
    )
}

export default MainPage;