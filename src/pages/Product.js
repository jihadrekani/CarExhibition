
import Layout from '../layouts/MainLayout';
import React from 'react'

import { Carousel } from 'react-responsive-carousel';

export default function Product() {
  return (
    <Layout>

 <div className='max-w-full h-auto w-[700px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1   xl:grid-cols-1 h-screen place-items-center container mx-auto mt-5 ml-auto '>
    <Carousel infiniteLoop={true} autoPlay={true} interval={2500} showThumbs={false} showIndicators={false} showStatus={false}>
    <div>
        <img className='  rounded-xl ' alt='item' src="https://images.unsplash.com/photo-1534093607318-f025413f49cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
       <p className='font-semibold mt-3'>Color : Yellow</p>
    </div>

    
    <div>
        <img className='  rounded-xl' alt='item' src="https://images.unsplash.com/photo-1605521044601-232b0d737ca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
       <p className='font-semibold mt-3'>Weight : 850 KG</p>
        
    </div>

    <div>
        <img className='  rounded-xl' alt='item' src="https://images.unsplash.com/photo-1621964190879-7b94f8865973?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <p className='font-semibold mt-3'>Cylinders : 6</p>
    
    </div>

     <div>
        <img className='  rounded-xl' alt='item' src="https://images.unsplash.com/photo-1533922598206-a1a2594e5873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80" />
        <p className='font-semibold mt-3'>Horsepower : 300 hp</p>
        
    </div>

    <div>
        <img className='  rounded-xl' alt='item' src="https://images.unsplash.com/photo-1480899867580-7a253ea5b8e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" />
        <p className='font-semibold mt-3'>Inside Details </p>
        
        
  </div>
   
</Carousel>
{/* <div>
    <h2 className=' font-bold mb-3  ' to="jihadissa" >   Contact us </h2 >
    <Link className='bg-blue-500 p-1 rounded-xl ' to={"https://www.facebook.com/jihad.rekani.33"}>facebook</Link>
    <Link className='bg-red-500 p-1 rounded-xl ml-4 ' to={"https://instagram.com/jihadissaa?igshid=YmMyMTA2M2Y="}>Instagram</Link>
    <Link className='bg-yellow-500 p-1 rounded-xl ml-4 ' to={"https://www.snapchat.com/add/jr_rekani?share_id=Sfj2M0jEv-Y&locale=en-IQ="}>Snapchat</Link>
    <Link className='bg-red-700 p-1 rounded-xl ml-4 ' to={"https://youtube.com/channel/UCqTuGFIgQvIizAIivO7uArQ"}>Youtube</Link>
    <Link className='bg-blue-700 p-1 rounded-xl ml-4 ' to={"https://www.linkedin.com/in/jihad-issa-618265197"}>linkedin</Link>
    <Link className='bg-light-700 p-1  rounded-xl ml-4 border-solid border-2 border-indigo-600 ' to={"https://twitter.com/JiHadJR10?t=_Xx3ig57mn2rivB_uTYn1A&s=09"}>twitter</Link>


</div> */}

{/* <!-- component --> */}
<h2 className='font-bold text-3xl mt-10 mb-7'> Contact Us</h2>
<form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Your Name
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        E-mail
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Message
      </label>
      <textarea className=" no-resize appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3">
      <button className="shadow bg-gray-800 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Send
      </button>
    </div>
    <div className="md:w-2/3"></div>
  </div>
</form>
</div>
</Layout>
  )
}