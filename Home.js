import React from "react";
import {Link} from "react-router-dom";
import './Home.css';
function Home(props)  {
    return (
        <div>
            <div className="header">
                <h1>
                    <Link to = "/loginform">Login</Link>
                </h1>
                <br />
                <h1>
                    <Link to = "/signupform">Signup</Link>
                </h1>
            </div>
            <br /> <br />  <br />

            <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
        </div>
    );
}

export default Home;