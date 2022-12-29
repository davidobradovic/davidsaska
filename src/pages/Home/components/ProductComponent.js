import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {client} from '../../../lib/client'
import imageUrlBuilder from '@sanity/image-url'
import '../styles/index.css'

export const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

function ProductComponent() {

    const [products, setProducts] = useState(null)
    
    useEffect(() => {
        client
        .fetch(`*[_type == "product"]`)
        .then((data) => setProducts(data))
        .catch(console.error)

    }, [])

    return (
        <div className="lastproductslist">
                {products?.map((product) => {
                    return (
                    <div key={product._id} className='lpcard'>
                        <div className='lpcardimagebox'>
                            <img src={urlFor(product.image && product.image[0])} alt='' />
                        </div>
                        <div>
                            <h1>{product.name}</h1>
                            <h3>{product.price} KM</h3>
                        </div>
                        <Link to={`/proizvod/${product.slug.current}`}>POGLEDAJ</Link>
                    </div>
                    )
                }) } 
        </div>
    )
}

export default ProductComponent