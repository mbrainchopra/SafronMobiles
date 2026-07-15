import React from 'react'
import TopOfferBar from '../components/Home/TopOfferBar/TopOfferBar'
import TopBar from '../components/Home/TopBar/TopBar'
import TopCatBar from '../components/Home/TopCatBar/TopCatBar'

export default function ProductListing() {
  return (
    <>
    <div className="product_list_container">
    <TopOfferBar/>
        <TopBar/>
        <TopCatBar activeIndex={2}/>
    </div>
    
    </>
  )
}
