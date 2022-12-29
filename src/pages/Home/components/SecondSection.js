import React, { useEffect, useState } from 'react'
//styles
import '../styles/index.css'
import {client} from '../../../lib/client';

import imageUrlBuilder from '@sanity/image-url'

export const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

function SecondSection() {

    const [galleryImages, setGallerImages] = useState();

    useEffect(() => {
        client
        .fetch(
            `*[_type == "gallery"]`
        )
        .then((data) => setGallerImages(data))
        .catch(console.error)
    })


    return (
        <section className='secondsection'>
            <h1 className='sstitle'>Galerija Tripleix Phoenix Salona</h1>

            <div className="galleryimages">
                {
                    galleryImages && galleryImages.map((gimg) => {
                        return (
                            <img key={gimg._id} src={urlFor(gimg.image)} className='giimg' alt="" />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default SecondSection