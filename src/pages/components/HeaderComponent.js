import React from 'react'
import logo from '../../images/logo.png'
import './header.css'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useStateContext } from '../../context/StateContext';

import Cart from './Cart';


function HeaderComponent() {

    const {showCart, setShowCart, totalQuantities} = useStateContext();

    return (
        <header>
            <div className="firstnav">
                <img src={logo} alt="" />

                <nav>
                    <Link onClick={() => setShowCart(true)}><AiOutlineShoppingCart /></Link>
                    <span>{totalQuantities}</span>
                </nav>
            </div>
            <nav id="navbuttons">
                <Link to='/'>Pocetna</Link>
                <Link to='/prodavnica'>Prodavnica</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/kontakt">Kontakt</Link>
            </nav>
            {
                showCart && <Cart />
            }
        </header>
    )
}

export default HeaderComponent