import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import TopBar from '../components/TopBar'
import Bloc from '../components/Bloc'
import Bloc2 from '../components/Bloc2'
import Footer from '../components/Footer'
// rafce pour avoir rapidement ce code
const Home = () => {
    return (<div className='relative w-full'>
        <TopBar light={false} />
        <Header />
        <Banner />
        <div className="absolute 
        top-[14%] left-[5%] right-[5%]
        md:top-[19%]
        lg:top-[22%]
        xl:top-[24%]
        "><SearchBar /></div>
        <div className='bg-white md:pt-[13%] pt-[15%]'><Bloc /></div>
        <Bloc2 />
        <Footer />
    </div>
    )
}

export default Home