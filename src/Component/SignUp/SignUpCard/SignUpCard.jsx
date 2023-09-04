import React from "react"
import "./SignUpCard.css"

const SignUpCard = () => {
  return (
    <div className="signupCardContainer">
      <div className="signupCardMain">
        <div className="signupDesign">
          <img className='interview' alt="interviewimage" src="assets/images/interview.svg" />
        </div>
        <div className="signupArea">
          <div className="navbar">
            <span>Sign Up</span>
            <div className="toggle">
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>  
          </div>
          <div className="signupForm">
            
          </div>
        </div>   
      </div>
    </div>
  )
}

export default SignUpCard
