import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import HeroSection from '../components/HeroSection'
import WallpaperSection from '../components/WallpaperSection'

const Home = () => {
  return (
    <MainLayout>
        <HeroSection/>
        <WallpaperSection/>
    </MainLayout>
  )
}

export default Home
