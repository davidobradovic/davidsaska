import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import {GrSend} from 'react-icons/gr'

import './style.css'

import { useState } from 'react';

import { urlFor } from '../../context/StateContext';
import { useEffect } from 'react';

import HeaderComponent from '../components/HeaderComponent'

function CheckoutPage() {

    const [checkoutItems, setCheckoutItems] = useState([]);

    const [emailItems, setEmailItems] = useState("")

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('checkoutitems'))
        if(items) {
            setCheckoutItems(items)
        } else {

        }

    }, [])

    const form = useRef();
   
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_905y9r5', 'template_ikfx4nc', form.current, 'FteBiTH7D2hkT6J3N')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        });
    }

    var citem = JSON.parse(localStorage.getItem('checkoutitems'))

    const cname = citem.map((item) => {
        return item.name
    })

    console.log(cname)

    const cquan = citem && citem.map((item) => {
        return item.quantity
    })

    const cprice = citem && citem.map((item) => {
        return item.price * item.quantity
    })
    
    return (
        <div>
            <HeaderComponent />
            <form ref={form} className='centerfocuts' onSubmit={sendEmail}>
                {
                    checkoutItems && checkoutItems.map((item) => {
                        return (
                            <div key={item._id} className='checkoutproduct'>
                                <div className="firstdiv">
                                    <div className='cpimage'>
                                        <img src={urlFor(item.image[0])} alt="" />
                                    </div>
                                    <div className='cptext'>
                                        <h1>{item.name}</h1>
                                        <h2>{item.price} KM/1kom</h2>
                                    </div>
                                </div>
                                <div className='cpqty'>
                                    <p>{item.quantity}</p>
                                    <p>Komada</p>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='checkoutform'>
                    <div className="maininfo">
                        <div className="formcontainer">
                            <label>Ime i Prezime</label>
                            <input type="text" required name="user_name" />
                        </div>
                        <div className="formcontainer">
                            <label>Telefon</label>
                            <input type="number" required name="user_phone" />
                        </div>
                    </div>
                    <div className="otherinfo">
                        <div className="formcontainer">
                            <label>Mail</label>
                            <input type="email" required name="user_email" />
                        </div>
                        <div className="formcontainer">
                            <label>Grad</label>
                            <input type="text" required name="user_city" />
                        </div>
                        <div className="formcontainer">
                            <label>Adresa</label>
                            <input type="text" required name="user_address" />
                        </div>
                        <div className="formcontainer">
                            <label>Postanski broj</label>
                            <input type="number" required name="user_zipcode" />
                        </div>
                        <div className="formcontainer">
                            <label>Nacin dostave</label>
                            <select required name='user_post'> 
                                <option defaultChecked >Obicna dostava</option>
                                <option>Brza posta</option>
                            </select>
                        </div>
                    </div>

                    {/* <div className="formcontainer">
                        <input type="hidden" value={cname} name="user_products" />
                        <input type="hidden" value={cquan} name="user_prodquant" />
                        <input type="hidden" value={cprice} name="user_prodprice" />
                    </div> */}
                    <button type='submit'>
                        <GrSend style={{fontSize: 18, marginRight: 10}} />
                        <h1>NARUCI</h1>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutPage