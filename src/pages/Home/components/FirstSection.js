import React from 'react'
import '../styles/index.css'
import model from '../../../images/model.png'

import ProductComponent from './ProductComponent'

function FirstSection() {

    return (
        <section>
            <div className='advsection'>
                <h1>TRIPLEIX PHOENIX</h1>
                <img src={model} alt="" />
            </div>

            <div className='lastproducts'>
                <h1 className='lastproductstitle'>Najnoviji proizvodi</h1>
            </div>

            <ProductComponent />
        </section>
    )
}

export default FirstSection