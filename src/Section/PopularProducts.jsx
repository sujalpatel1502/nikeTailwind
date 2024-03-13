import React from 'react'
import {products} from '../constants'
import PopularProductCard from '../components/PopularProductCard'
const PopularProducts = () => {
  return (
    <section id='products'>
        <div className="max-container max-sm:mt-12">
          <div className='flex flex-col justify-start gap-5'>
            <h2 className='text-4xl font-palanquin font-bold'>Popular Products</h2>
            <p className='lg:max-w-lg font-montserrat text-slate-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quasi?</p>


          </div>
          <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            {
              products.map((item)=>(
                <PopularProductCard key={item.name} {...item}/>
              ))
            }
          </div>

        </div>
    </section>
  )
}

export default PopularProducts