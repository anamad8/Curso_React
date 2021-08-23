import React from "react"
import Logo from '../Img/logo.jpg';
import './NavBar.css';
import { Link } from "react-router-dom";

export const CartWidget = () => {
    return (
        <div>
            <div>
                <Link to="/"><img src={Logo} alt="logo" width="75" /></Link>
            </div>
        </div>
    )
}
