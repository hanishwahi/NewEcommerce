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
    console.log("categorizedData", categorizedData)

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
            items: 1
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
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px">
                        {
                            BestSellingProduct.map((item) => {
                                return (
                                    <>

                                        <div class="mb-3 col-lg-11"   >
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
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default BestSelling