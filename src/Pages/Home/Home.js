import React from 'react'
import Slider from './Slider'
import Header from '../Header/Header' 
import LatestProduct from './LatestProduct'
import BestSelling from './BestSelling'
import Footer from '../Footer/Footer'

function Home() {
    return (
        <>
            <Header />
            <Slider /> 
            <LatestProduct/>
            <BestSelling/>
            <Footer/>
        </>
    )
}

export default Home