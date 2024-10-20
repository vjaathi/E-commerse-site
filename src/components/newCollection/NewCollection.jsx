import "./NewCollection.css"
import new_collections from "../imges/new_collections"
import Items from "../items/Items"

const NewCollection = ()=> {
  return(
    <div className="new-collection">
      <h1>NEW-COLLECTION</h1>
      <hr/>
      <div className="collection">
        {new_collections.map( (item,i) => {
          return <Items  key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
} 

export default NewCollection;