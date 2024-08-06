import React from 'react'
import Heading from '../../../Components/Heading/Heading'
import ProductCard from '../../../Components/ProductCard/ProductCard'


export const getData = async () =>  {
    const res = await fetch('https://fakestoreapi.com/products')
   
    return res.json()
  }

const Categories = async () => {
    const data = await getData()
    const headingData = {
        fName:'Shop by Categories'
    }
  return (
    <>
        <div className='main_wrapper' >
        <Heading headingData={headingData} />
        <div className="grid grid_four">
        {
            data.map((curElm) =>{
                return(
                  <ProductCard key={curElm.id} curElm={curElm} />
                )
            } )
        }
        </div>
        </div>
    </>
  )
}

export default Categories