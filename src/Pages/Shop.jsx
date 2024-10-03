import React from 'react'
import Popular from '../Components/Popular/Popular'
import Header from '../Components/header/header'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'

const Shop = () => {
  return (
    <>
      <Header />
      <Popular/>
      <Offers />
      <NewCollections />
    </>
  )
}

export default Shop