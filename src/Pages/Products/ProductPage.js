import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header'

function ProductPage() {
    const [data, setData] = useState([])
    const [counter, setCounter] = useState(0)

 const prductID = useParams()
    const abc = prductID.id

    useEffect(() => {
        fetch('https://dummyjson.com/products').then((resp) => {
            resp.json().then((result) => {
                setData(result.products)

            })
        })
    }, [])
    const selectedProduct = data[abc - 1]

    console.log("selectedProduct", selectedProduct)

    const plusCart = () => {
        setCounter(counter + 1)
    }
    const minusCart = () => {
        setCounter(counter - 1)
        if (counter <= 0) {
            setCounter(0)
        }
    }

    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="container-lg">
                    <div className="row py-5">
                        {selectedProduct && (
                            <>
                                <div className='col-lg-6 col-12 mt-2'>
                                    <div className="border">
                                        <img src={selectedProduct.images[0]} alt="" className='img-fluid'/>
                                    </div>

                                </div>
                                <div className="col-lg-6 mt-2">
                                    <div className="row">
                                        <div className="col product-page-content">
                                            <h1>{selectedProduct.title}</h1>
                                            <h2>Brand: {selectedProduct.brand}</h2>
                                            <h2>Price: ${selectedProduct.price}</h2>
                                            <h2>{selectedProduct.description}</h2>
                                            <h2>{selectedProduct.discountPercentage}% Off </h2>
                                        </div>
                                    </div>
                                    <div className="row text-center py-3">
                                        <div className="col-lg-3 col-5">
                                            <div className="row align-self-center">
                                                <div className="col-lg-4 col-4 counter-cart">
                                                    <h1 onClick={minusCart}>-</h1>
                                                </div>
                                                <div className="col-lg-4 col-4 counter-cart">
                                                    <h1 className=''>{counter}</h1>
                                                </div>
                                                <div className="col-lg-4 col-4 counter-cart">
                                                    <h1 onClick={plusCart}>+</h1>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-5">
                                            <button className='button'>Add To Cart</button>
                                        </div>
                                        <div className="col-lg-1 col-2 wishlist-product-page text-center">
                                            <i class="fa-regular fa-heart"></i>
                                        </div>
                                    </div>
                                    <div className="row product-page-content">
                                        <h2>Category : {selectedProduct.category}</h2>
                                    </div>
                                </div>

                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductPage