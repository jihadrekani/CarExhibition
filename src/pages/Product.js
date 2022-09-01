
import Layout from '../layouts/MainLayout';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  
} from "react-share";

export default function Product() {
  return (
    <Layout>

 <div className='max-w-full h-auto w-[700px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1   xl:grid-cols-1 h-screen place-items-center container mx-auto mt-12 ml-auto '>
    <Carousel  infiniteLoop={true} autoPlay={true} interval={2500} showThumbs={false} showIndicators={false} showStatus={false}>
    
    
    <div>
        <img className='  rounded-xl' alt='item' src="https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U8149/IMG_29773-medium.jpg" />
        
    </div>

    <div>
        <img className='  rounded-xl' alt='item' src="https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U8149/IMG_29774-medium.jpg" />
    
    </div>

     <div>
        <img className='  rounded-xl' alt='item' src="https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U8149/IMG_29775-medium.jpg" />
        
    </div>

    <div>
        <img className='  rounded-xl' alt='item' src="https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U8149/IMG_29783-medium.jpg" /> 
  </div>
  <div>
        <img className='  rounded-xl' alt='item' src="https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U8149/IMG_29784-medium.jpg" /> 
  </div> 
   <div>
        <img className='  rounded-xl' alt='item' src="https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U8149/IMG_29786-medium.jpg" /> 
  </div>
  <div>
        <img className='  rounded-xl' alt='item' src="https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U8149/IMG_29791-medium.jpg" /> 
  </div>
  <div>
        <img className='  rounded-xl' alt='item' src="https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U8149/IMG_29792-medium.jpg" /> 
  </div>
  <div>
        <img className='  rounded-xl' alt='item' src="https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U8149/IMG_29794-medium.jpg" /> 
  </div>
  <div>
        <img className='  rounded-xl' alt='item' src="https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U8149/IMG_29802-medium.jpg" /> 
  </div>
  <div>
        <img className='  rounded-xl' alt='item' src="https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U8149/IMG_29803-medium.jpg" /> 
  </div>
  
   
</Carousel>


<div className='text-2xl font-bold   mt-4'>Range Rover Sport svr 2022 <span className='ml-[270px] text-red-500'>115,500$</span></div>
<div className='flex  mt-6 '> 
  <span className='text-red-500 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
</span>
  <span className='text-xl'> Duhok</span>
</div>
<div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-4 gap-8">
                    <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2  text-center"  > <h2 className='mt-3'>Automatic</h2> <img alt="transmission" className='h-[55px] w-[55px] mx-auto' src="https://www.iqcars.net/images/mobile-car-detail/transmission.svg"></img>  </div>
                    <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 text-center"><h2 className='mt-3'>6 cylinder</h2> <img alt="cylinder" className='h-[55px] w-[55px] mx-auto' src="https://www.iqcars.net/images/mobile-car-detail/piston.svg"></img></div>
                    <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 text-center"><h2 className='mt-3'>Engine, 3.6</h2> <img alt="engine" className='h-[55px] w-[55px] mx-auto' src="https://www.iqcars.net/images/mobile-car-detail/engine.svg"></img></div>
                    <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 text-center"><h2 className='mt-3'>Gasoline</h2> <img alt="Fuel" className='h-[55px] w-[55px] mx-auto' src="https://www.iqcars.net/images/mobile-car-detail/gas-station.svg"></img></div>
                    <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 text-center"><h2 className='mt-3'>Iraq</h2> <img alt="global" className='h-[55px] w-[55px] mx-auto' src="https://www.iqcars.net/images/mobile-car-detail/global.svg"></img></div>
                    <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 text-center"><h2 className='mt-3'>0 km</h2> <img alt="milage" className='h-[55px] w-[55px] mx-auto' src="https://www.iqcars.net/images/mobile-car-detail/millage.svg"></img></div>

                </div>
            

{/* extra informations */}


<div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1  place-items-center pt-6 gap-2">
                    <div class="rounded text- pl-2 pr-1  "> Color:<span className='ml-[200px]'>white</span>  </div>
                    <div class="rounded text- pl-2 pr-1  ">Year:<span className='ml-[207px]'>2022</span></div>
                    <div class="rounded text- pl-2 pr-1 ">Kilometers:<span className='ml-[165px]'>2,159</span></div>
                    <div class="rounded text- pl-2 pr-1 ">Year:<span className='ml-[208px]'>2022</span></div>

<div className='mt-7'>

<TwitterShareButton
              url={window.location.href}
              title="example title"
              via="jihadissaa"
              hashtags={['jihadissa', 'wecode', 'javascript', 'sharing', 'content']}
            >
              {' '}
              <TwitterIcon size={45} round={true} />
            </TwitterShareButton>

            <LinkedinShareButton url={window.location.href}>
              <LinkedinIcon size={45} round />
            </LinkedinShareButton>

            <FacebookShareButton url={window.location.href}>
              <FacebookIcon size={45} round />
            </FacebookShareButton>

            <TelegramShareButton url={window.location.href}>
              <TelegramIcon size={45} round />
            </TelegramShareButton>

            <WhatsappShareButton url={window.location.href}>
              <WhatsappIcon size={45} round />
            </WhatsappShareButton>

            <EmailShareButton url={window.location.href}>
              <EmailIcon size={45} round />
            </EmailShareButton>

</div>
                </div>
            







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
      <button className="shadow mb-4 bg-gray-800 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
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