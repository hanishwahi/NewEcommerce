import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Products() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products').then((resp) => {
            resp.json().then((result) => {
                setData(result.products)
             })
        })

    }, [])

    return (
        <>

            <div className='container-fluid border-bottom py-3'>
                <div className="container-lg">
                    <div className="row">
                        <h1 className='text-center h2 py-3'>Products</h1>
                    </div>
                    <div className="row">

                        {
                            data.map((item) => {
                                return (
                                    <>

                                        <div class="mb-3 col-lg-3 col-6"   >
                                            <div className='card '>
                                                <div>
                                                    <img height="150px" src={item.images[0]} class="card-img-top border" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <h5 class="card-title">{item.title}</h5>
                                                    <p class="card-text">$ {item.price}</p>
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
        </>
    )
}

export default Products