import React, { useRef } from 'react'
import './header.css'
import { Link } from 'react-router-dom';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {BsFillBagFill} from 'react-icons/bs'
import {useStateContext} from '../../context/StateContext';
import { urlFor } from '../../context/StateContext';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'


function Cart() {

    const cartRef = useRef();
    const {totalPrice, totalQuantities, cartItems, setShowCart, toggleCarItemQuantity, checkoutItems, checkoutProducts} = useStateContext();

    const setCheckoutItems = () => {
        localStorage.setItem('checkoutitems', JSON.stringify(cartItems))
        setShowCart(false)
    }

    return (
        <div className='cartForm'>
            <div className="navigatior">
                <Link onClick={() => setShowCart(false)}><AiOutlineCloseCircle /></Link>
                <h1>Vasa korpa : <span id='numitems'>({totalQuantities} proizvod/a)</span></h1>
            </div>
            {
                cartItems.length < 1 && (
                    <div className='emptybag'>
                        <BsFillBagFill id='icon' />
                        <h3>Vasa korpa je prazna</h3>
                        <Link onClick={() => setShowCart(false)}>Nastavite sa kupovinom</Link>
                    </div>
                )
            }

            <div className='containercart'>
                {
                    cartItems.length >= 1 && cartItems.map((item, index) => {
                        return (
                            <div className="cartproduct" key={item._id}>
                                <div className='cpimage'>
                                    <img src={urlFor(item?.image[0])} alt="" />
                                </div>
                                <div>
                                    <div className='cptext'>
                                        <h3>{item.name}</h3>
                                        <h5>{item.price} KM</h5>
                                    </div>

                                    <div>
                                        <p className="quantity-container">
                                            <button className="minus" onClick={() => toggleCarItemQuantity(item._id, 'dec')}>
                                                <AiOutlineMinus />
                                            </button>
                                            <span id="mrta" className="num" onClick="">
                                                {item.quantity}
                                            </span>
                                            <button className="plus" onClick={() => toggleCarItemQuantity(item._id, 'inc')}>
                                                <AiOutlinePlus />
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <div>
                    {
                        cartItems.length >= 1 && (
                            <div className="totalpricecontainer">
                                <h1>Ukupno za naplatu :</h1>
                                <span>{totalPrice} KM</span>
                            </div>
                        )
                    }
                </div>
                {
                    cartItems.length >= 1 && (
                    <div className='checkoutbutton'>
                        <Link onClick={() => setCheckoutItems()} to='/porudzba'>KUPOVINA</Link>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cart