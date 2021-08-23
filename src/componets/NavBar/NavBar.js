import React from 'react';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';
import 'boxicons';


function NavBar() {
    return (
            <header>
                <CartWidget/>
                <ul>
                    <li>
                        <Link to="/ProductosMujer">MUJER</Link>
                    </li>
                    <li>
                        <Link to="/ProductosHombre">HOMBRE</Link>
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