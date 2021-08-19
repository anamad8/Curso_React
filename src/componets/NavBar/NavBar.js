import React from 'react';
import Logo from '../Img/logo.jpg';
import './NavBar.css';
import 'boxicons';


function NavBar() {
    return (
            <header>
                <div>
                    <a href="#"><img src={Logo} alt="logo" width="75" /></a>
                </div>
                <ul>
                    <li>
                        <a href="#">MUJER</a>
                    </li>
                    <li>
                        <a href="#">HOMBRE</a>
                    </li>
                </ul>
                <div className="cart">
                    <box-icon name="cart"></box-icon>
                    <span className="item__total">0</span>
                </div>
            </header>
    );
}

    export default NavBar;