import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function LatestProduct() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products').then((resp) => {
            resp.json().then((result) => {
                setData(result.products)
            })
        })

    }, [])

    const latestP = data.slice(-8)


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <>

            <div className='latest-product-main'>
                <div className="container-fluid ">
                    <div className="row latest-product-heading">
                        <h1>Latest Products</h1>
                    </div>

                </div>
                <div className="container-fluid">
                    <div className="row">
                        <Carousel swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerclassName="carousel-container"
                            dotListclassName="custom-dot-list-style"
                            itemclassName="carousel-item-padding-40-px">
                            {
                                latestP.map((item) => {
                                    return ( 
                                    <div key={item.id} className="mb-3 col-lg-11 col-11"   >
                                                <div className='card '>
                                                    <div className='latest-product-img'>
                                                        <img height="150px" src={item.images[0]} className="card-img-top border" alt="..." />
                                                    </div>
                                                    <div className='latest-product-off'>
                                                        <h1>Off {item.discountPercentage} %</h1>
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title h6">{item.title}</h5>
                                                        {/* <p className="card-text">$ {item.price}</p> */}
                                                        <Link to={`/product/${item.id}`} className="button">Buy Now</Link>
                                                    </div>
                                                </div>
                                            </div> 
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LatestProduct