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
        if (counter<=0){
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
                                <div className='col-lg-6'>
                                    <img src={selectedProduct.images[0]} alt="" className='img-fluid' />

                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col product-page-content">
                                            <h1>{selectedProduct.title}</h1>
                                            <h2>Brand: {selectedProduct.brand}</h2>
                                            <h2>Price: ${selectedProduct.price}</h2>
                                            <h2>{selectedProduct.description}</h2>
                                            <h2>{selectedProduct.discountPercentage}% Off </h2>
                                        </div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-lg-4">
                                            <div className="row align-self-center">
                                                <div className="col-lg-4 counter-cart">
                                                    <h1 onClick={minusCart}>-</h1>
                                                </div>
                                                <div className="col-lg-4 counter-cart">
                                                     <h1 className=''>{counter}</h1>
                                                </div>
                                                <div className="col-lg-4 counter-cart">
                                                <h1 onClick={plusCart}>+</h1>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <button>Add To Cart</button>
                                        </div>
                                        <div className="col-lg-4">
                                            <button>Add To Wishlist</button>
                                        </div>
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