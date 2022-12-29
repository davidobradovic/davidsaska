import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import './style.css'

import { client } from '../../lib/client'
import { useEffect } from 'react'
import { useState } from 'react'
import {BsQuestionCircle} from 'react-icons/bs'
import { Link } from 'react-router-dom'


function FaqPage() {

    const [faq, setFaq] = useState([])

    const [showAnswear, setShowAnswear] = useState(false)

    useEffect(() => {
        client
        .fetch(`*[_type == "faq"]`)
        .then((data) => setFaq(data))
        .catch((error) => console.log(error))
    }, [])


    const showAnsw = () => {
        if(showAnswear == true) {
            setShowAnswear(false)
        } else {
            setShowAnswear(true)
        }
    }

    return (
        <div>
            <HeaderComponent />
            <div>
                <h1 className='title'>Cesto postavljena pitanja</h1>
                <div className='faqs'>
                    {
                        faq && faq.map((item) => {
                            return (
                                <div key={item._id} className="faq" >
                                    <div className='faqdiv'>
                                        <div className='divfirst'>
                                            <BsQuestionCircle className='questionmark' />
                                        </div>
                                        <div className='divsecond'>
                                            <h1>{item.quest}</h1>
                                        </div>
                                    </div>
                                    <div className="answear">
                                        <p>{item.answ}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FaqPage