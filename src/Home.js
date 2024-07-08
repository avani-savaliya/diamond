import React from 'react'
import HeroSection from './componets/pages/HeroSection'
import ShopArea from './componets/pages/ShopArea'
import FeaturedArea from './componets/pages/FeaturedArea'
import CollectionArea from './componets/pages/CollectionArea'
import FeatureItem from './componets/pages/FeatureItem'
import OfferArea from './componets/pages/OfferArea'
import JewelleryCollection from './componets/pages/JewelleryCollection'



const Home = () => {
  return (
    <>
     <HeroSection/>
     <ShopArea/>
     <FeaturedArea/>
     <CollectionArea/>
     <FeatureItem/>
     <OfferArea/>
     <JewelleryCollection/>

    </>
  )
}

export default Home
