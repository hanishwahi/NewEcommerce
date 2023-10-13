import React from 'react'
import Slider from './Slider'
import Header from '../Header/Header' 
import LatestProduct from './LatestProduct'
import BestSelling from './BestSelling'
import Footer from '../Footer/Footer'
import TopBrand from './TopBrand'

function Home() {
    return (
        <>
            <Header />
            <Slider /> 
            <LatestProduct/>
            <BestSelling/>
            <TopBrand/>
            <Footer/>
        </>
    )
}

export default Home