import "../pages/CSS/loginsignup.css"

function LoginSignup(){
    return(
      <div>
        <div className="signup">
          <div className="signup-container">
            <h1>Sign up</h1>
            <div className="signup-feilds">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email address" />
              <input type="password"  placeholder="password"/>
            </div>
            <button>Continue</button>
            <p className="login">Already Have an Accound <span>Login here</span></p>
            <div className="signup-agree">
              <input type="checkbox" name="click" id="check" />
              <label htmlFor="check">By continuing, i agree terms & privacy policy..</label>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LoginSignup;