import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import TopBar from '../components/TopBar'
import Bloc from '../components/Bloc'
import Bloc2 from '../components/Bloc2'
// rafce pour avoir rapidement ce code
const Home = () => {
    return (<div className='relative'>
        <TopBar />
        <Header />
        <Banner />
        <div className="absolute top-[40rem] right-60"><SearchBar /></div>
        <div className='bg-white pt-52'><Bloc /></div>
        <Bloc2 />

    </div>
    )
}

export default Home