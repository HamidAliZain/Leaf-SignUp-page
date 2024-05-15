import React from "react";
import '../App.css';
import humanImage from "../assets/humanImage.png";
import Icon1 from "../assets/formIcon1.png";
import Icon2 from "../assets/formIcon2.png";
import Icon3 from "../assets/formIcon3.png";
import loginIvcon1 from "../assets/loginIcon1.png";
import loginIvcon2 from "../assets/loginIcon2.png";
import loginIvcon3 from "../assets/loginIcon3.png";
import logo from "../assets/logo.png";

function Login() {
    return (
        <section className="main">
            <div className="image-section">
                <img src={humanImage} alt="main-image" className="imageSecImg" />
            </div>
            <div className="form-container">
                <div className="form">
                    <div className="logo-text"><img src={logo} alt="logo" />Leaf</div>
                    <div className="header">Create Account</div>

                    <label htmlFor="name"> Full Name</label>
                    <div className="inputs">
                        <img src={Icon1} alt="" className="fonts" />
                        <input type="text" placeholder="Enter Full Name" name="name" />
                    </div>

                    <label htmlFor="name" > Enail</label>
                    <div className="inputs">
                        <img src={Icon2} alt="" className="fonts" />
                        <input type="text" placeholder="Enter Full Email" />
                    </div>


                    <label htmlFor="name"> Password</label>
                    <div className="inputs">
                        <img src={Icon3} alt="" className="fonts" />
                        <input type="text" placeholder="Enter Full Password" />
                    </div>
                    <button className="submitBtn">Sign-Up</button>
                    <p className="or"> - OR  -  </p>

                    <div className="loginIconsContainer">
                        <div className="LoginIcon">
                            <img src={loginIvcon1} alt="" className="lginicon" />
                        </div>
                        <div className="LoginIcon">
                            <img src={loginIvcon2} alt="" className="lginicon" />
                        </div>
                        <div className="LoginIcon">
                            <img src={loginIvcon3} alt="" className="lginicon" />
                        </div>
                    </div>
                    <p className="login">Already have an account? Login</p>
                </div>
            </div>
        </section>
    )
}
export default Login;
