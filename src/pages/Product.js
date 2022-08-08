import React from 'react'
import { Carousel } from 'react-responsive-carousel';

export default function Product() {
  return (
  

    <div className='w-[800px] flex justify-center items-center h-screen'>
    <Carousel infiniteLoop={true} autoPlay={true} interval={2500} showThumbs={false} showIndicators={false} showStatus={false}>
    <div>
        <img className='object-cover' alt='item' src="https://images.unsplash.com/photo-1534093607318-f025413f49cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
       <p>Color : Yellow</p>
    </div>

    
    <div>
        <img className='object-cover' alt='item' src="https://images.unsplash.com/photo-1605521044601-232b0d737ca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
       <p>Weight : 850 KG</p>
        
    </div>

    <div>
        <img className='object-cover' alt='item' src="https://images.unsplash.com/photo-1621964190879-7b94f8865973?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <p>Cylinders : 6</p>
    
    </div>

     <div>
        <img className='object-cover' alt='item' src="https://images.unsplash.com/photo-1533922598206-a1a2594e5873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80" />
        <p>Horsepower : 300 hp</p>
        
    </div>

    <div>
        <img className='object-cover' alt='item' src="https://images.unsplash.com/photo-1480899867580-7a253ea5b8e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" />
        <p>Inside Details </p>
        
    </div>
   
</Carousel>
</div>
  )
}