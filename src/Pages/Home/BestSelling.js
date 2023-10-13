import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

    const BestSellingProduct = categorizedData.slice(0, 6)
    // console.log("categorizedData", categorizedData)

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
            <div className='best-selling-main'>
                <div className="container-fluid ">
                    <div className="row best-selling-heading">
                        <h1>Best Selling</h1>
                    </div>

                </div>
                <div className="container-fluid">
                    <div className="row">
                        <Carousel swipeable={false}
                            draggable={true}
                            showDots={false}
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
                                BestSellingProduct.map((item) => {
                                    // console.log("item", item.id)
                                    return (   
                                                <div key={item.id} className="mb-3 col-lg-11 col-11" >
                                                    <div className='card border'>
                                                        <div>
                                                            <img height="150px" src={item.images[0]} className="card-img-top" alt="..." />
                                                        </div>
                                                        <div className="card-body">
                                                            <h5 className=" card-title h6">{item.title}</h5>
                                                            {/* <p className="h6">{item.rating}</p> */}
                                                            {/* <p className="h6">$ {item.price}</p> */}
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

export default BestSelling