import React, { useEffect, useState } from 'react'

import HeaderComponent from '../components/HeaderComponent'

import { client } from '../../lib/client'

// import { useStateContext } from '../../context/StateContext'

import { Link } from 'react-router-dom'

import { urlFor } from '../../context/StateContext'

import './style/storepage.css'

function StorePage() {

  const [product, setProduct] = useState(null)
  useEffect(() => {
    client
    .fetch(`*[_type == "product"]`)
    .then((data) => setProduct(data))
    .catch(console.error)
  }, [])

  return (
    <div className='storecontainer'>
      <HeaderComponent />
      <h1 className='storetitle'>Prodavnica</h1>
      <div className="storeproducts">
        {
          product && product.map((product) => {
            return (
              <div key={product._id} className="product">
                <div className='productimage'>
                  <img src={urlFor(product.image[0])} alt="" />
                </div>
                <div className="producttext">
                  <h2>{product.name}</h2>
                  <h4>{product.price} KM</h4>
                  <p>{product.details}</p>
                </div>
                <Link to={`/proizvod/${product.slug.current}`}>POGLEDAJ</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default StorePage