import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function BestSelling() {
    const [categorizedData, setCategorizedData] = useState([]);

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products').then((resp) => {
            resp.json().then((result) => {
                setData(result.products) 
            })
        })

    }, [])

 
    useEffect(() => {
        // Extract unique categories from JSON data
        const topRating = data.filter(item => item.rating > 4.60);

        setCategorizedData(topRating);
    }, [data]);

const BestSellingProduct= categorizedData.slice(0,6)
    console.log("categorizedData",categorizedData)

    return (
        <>
            <div className='container-fluid best-selling-main'>
            <div className="container-lg">
                <div className="row best-selling-heading">
                    <h1>Best Selling</h1>
                </div>
                <div className="row">

                    {
                        BestSellingProduct.map((item) => {
                            return (
                                <>

                                    <div class="mb-3 col-lg-2"   >
                                        <div className='card border'>
                                            <div>
                                                <img height="150px" src={item.images[0]} class="card-img-top" alt="..." />
                                            </div>
                                            <div class="card-body">
                                                <h5 class=" card-title h6">{item.title}</h5>
                                                {/* <p class="h6">{item.rating}</p> */}
                                                {/* <p class="h6">$ {item.price}</p> */}
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

export default BestSelling