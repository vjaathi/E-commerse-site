import MainPage from "../components/MainPage/MainPage";
import NewCollection from "../components/newCollection/NewCollection";
import NewsLetter from "../components/newsLetter/NewsLetter";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";


function Shop(){
    return(
        <div>
          <MainPage />
          <Popular />
          <Offers />
          <NewCollection />
          <NewsLetter />
        </div>
    )
}

export default Shop;