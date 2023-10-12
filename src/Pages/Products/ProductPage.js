import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header'

function ProductPage() {
    const [data, setData] = useState([])


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


    return (
        <>
        <Header/>
            <div className="container-fluid">
                <div className="container-lg">
                    <div className="row">
                        {selectedProduct && (
                            <div>
                                <img src={selectedProduct.images[0]} alt="" />
                                <h1>{selectedProduct.title}</h1>
                                <h2>$ {selectedProduct.price}</h2>
                                <h2>{selectedProduct.description}</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductPage