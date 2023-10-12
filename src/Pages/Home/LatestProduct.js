import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function LatestProduct() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products').then((resp) => {
            resp.json().then((result) => {
                setData(result.products)
            })
        })

    }, [])

    const latestP = data.slice(-6)

    return (
        <div className='container-fluid py-3'>
            <div className="container-lg">
                <div className="row">
                    <h1 className='text-center h3 py-3'>Latest Products</h1>
                </div>
                <div className="row">

                    {
                        latestP.map((item) => {
                            return (
                                <>

                                    <div class="mb-3 col-lg-2"   >
                                        <div className='card '>
                                            <div className='latest-product-img'>
                                                <img height="150px" src={item.images[0]} class="card-img-top border" alt="..." />
                                            </div>
                                            <div className='latest-product-off'>
                                                    <h1>Off {item.discountPercentage} %</h1>
                                                </div>
                                            <div class="card-body">
                                                <h5 class="card-title h6">{item.title}</h5>
                                                {/* <p class="card-text">$ {item.price}</p> */}
                                                <Link to={`/product/${item.id}`} class="button">Buy Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default LatestProduct