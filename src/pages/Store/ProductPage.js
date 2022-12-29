import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import './style/ppage.css'

import {client} from '../../lib/client'
import imageUrlBuilder from '@sanity/image-url'

import { useStateContext } from "../../context/StateContext";

import HeaderComponent from "../components/HeaderComponent";

export const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default function ProductPage() {

    const [singleProduct, setSingleProduct] = useState([])
    const [index, setIndex] = useState(0);
    const {decQty, incQty, qty, onAdd} = useStateContext()
    const { slug } = useParams()

    useEffect(() => {
        client
        .fetch(`*[slug.current == "${slug}"]`)
        .then((data) => setSingleProduct(data))
        .catch(console.error)

    })

    return (
        <div>
            <HeaderComponent />
            <div className="productdetailpage">
                {
                    singleProduct.map((sproduct) => {
                        return (
                            <div key={sproduct} className='product-container'>
                                <div className="pc-image">
                                    <img className="selectedimage" src={urlFor(sproduct.image[index])} alt="" />

                                    <div>
                                        {
                                            sproduct.image?.map((item, i) => {
                                                return (
                                                    <img src={urlFor(item)} className={i === index ? 'activesmallimage' : 'smallimage'} onClick={() => setIndex(i)} alt="" />
                                                )
                                            })
                                        }
                                    </div>
                                
                                </div>
                                <div style={{width: 30,height: 10}}></div>
                                <div className="pc-text">
                                    <h1>{sproduct.name}</h1>
                                    <h3>Cijena: {sproduct.price} KM</h3>
                                    <p>Opis: {sproduct.details}</p>
                                    <p className="quantity-container">
                                        <button className="minus" onClick={decQty}>
                                            <AiOutlineMinus />
                                        </button>
                                        <span id="mrta" className="num" onClick="">
                                            {qty}
                                        </span>
                                        <button className="plus" onClick={incQty}>
                                            <AiOutlinePlus />
                                        </button>
                                    </p>
                                    <Link onClick={() => onAdd(sproduct, qty)}>DODAJ U KORPU</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}