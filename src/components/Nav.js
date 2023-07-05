import React from "react";
import { Link, Redirect } from "react-router-dom";
import Logo from '../images/Logo.svg';
export default function Nav(){
    return (
        <>
        <nav role="navigation">
        <div className="nav1" >
             <img src={Logo} alt="logo" />
        </div>
        <div className="nav2">
            <ul>
                <li>
                <a href="/">Home</a>
                </li>
                <li>
                <Link to="/">About</Link>
                </li>
                <li>
                <Link to="/">Menu</Link>
                </li>
                <li>
                    <Link to="/booking">Reservations</Link>
                </li>
                <li>
                    <Link to="/">Online Order</Link>
                </li>
                <li>
                    <Link to="/">Login</Link>
                </li>
            </ul>
        </div>
        </nav>
        </>
    )
}