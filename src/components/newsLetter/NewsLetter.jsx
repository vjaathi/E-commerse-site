import "./NewsLetter.css"

const NewsLetter = () =>{
    return(
      <div className="newsletter">
        <h1>Get Exclusive offer on Your Email</h1>
        <p>Subscribe To Our newsletter and stay updated...</p>
        <div>
          <input type="email" placeholder="Enter your Email" />
          <button>Subcribe</button>
        </div>
      </div>
    )
}

export default NewsLetter