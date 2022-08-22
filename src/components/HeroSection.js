import React from 'react';
import { Link } from 'react-router-dom';
import ReactCarousel from './ReactCarousel';
import { Carousel } from 'react-responsive-carousel';
import FilterForm from './FilterForm';

export default function HeroSection() {
  return (
    <div className="container  mx-auto grid grid-cols-1  md:grid-cols-2  mt-8 md:mt-10 ">
      <div className="  mt-3 flex flex-col items-center justify-center">
        {' '}
        <h2 className="text-3xl  tracking-tight font-bold text-grey-600 sm:text-4xl md:text-4xl">
        The city of Cars   <br/>
        </h2>
        
        <img className='  animate-pulse mt-3  ' src="https://img.icons8.com/color/48/000000/fiat-500--v2.png"/>
        <p className="text-2xl sm:text-xl md:text-xl sm:text-center md:text-center text-gray-500 mt-3">
         We have all kinds of Cars. Enter the Category and find your dream Car.{' '}
        </p>
        <FilterForm />
        <div className="mt-4 mb-[45px]">
          <Link to="/Categories"   className=" shadow-md hover:shadow-lg hover:bg-sky-600 bg-sky-800 text-white px-6 py-4 rounded-lg  text-xl font-semibold  sm:mb-4  ">
            View Categories 
          </Link >
          {/* <button className="shadow-md hover:shadow-lg bg-white text-indigo-600 px-6 py-4 rounded-lg text-xl font-semibold">
            View Categories
          </button> */}
        </div>
      </div>
      <div className=" ">
        {/* <img
          className="h-full w-auto object-cover rounded"
          src="https://images.unsplash.com/photo-1614026480209-cd9934144671?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="woman holding bags while shopping"
        /> */}
<br/>
<br/>
       <ReactCarousel />

      </div>

      {/* <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
--> */}
{/* <div className="  rounded">
  <div className="max-w-2xl  mt-[65px] mb-[45px] mx-auto py-16 bg-grey rounded border px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
  <h2 className='mb-5 font-bold text-center'>New arrivals</h2>
    <h2 className="sr-only">Products</h2>

    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <a href="#" className="group">
        <div className="border-solid border-2 border-black  w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img className='' src="https://4.bp.blogspot.com/-9YAwaU1zdt0/Uq_AhyNljwI/AAAAAAAAFYY/osCZRa2SqgE/s640/cars+2014+4.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">mustang 2023</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$48500</p>
      </a>

      <a href="#" className="group">
        <div className=" border-solid border-2 border-black w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img src="https://th.bing.com/th/id/R.5708d4bdd4a24a05718a3f0b4ad1af3a?rik=6YXBkLyqDZkOcQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-6SSW1A2oz_I%2fUtK0uCasu7I%2fAAAAAAAAGGg%2f-Da5apg8THA%2fs1600%2flatest%2bcars%2bin%2b2014%2b12.jpg&ehk=dp4NLxQPtgXAbtns3%2boHpTRXeHjxs7IlmBM4PO%2bqw7E%3d&risl=&pid=ImgRaw&r=0" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="w-full h-full object-center object-cover group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Audi 2023</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$35800</p>
      </a>

      <a href="#" className="group">
        <div className=" border-solid border-2 border-black w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img src="https://th.bing.com/th/id/R.5708d4bdd4a24a05718a3f0b4ad1af3a?rik=6YXBkLyqDZkOcQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-6SSW1A2oz_I%2fUtK0uCasu7I%2fAAAAAAAAGGg%2f-Da5apg8THA%2fs1600%2flatest%2bcars%2bin%2b2014%2b12.jpg&ehk=dp4NLxQPtgXAbtns3%2boHpTRXeHjxs7IlmBM4PO%2bqw7E%3d&risl=&pid=ImgRaw&r=0" alt="Person using a pen to cross a task off a productivity paper card." className="w-full h-full object-center object-cover group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Audi 2023</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$35800</p>
      </a>

      <a href="#" className="group">
        <div className=" border-solid border-2 border-black w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img src="https://4.bp.blogspot.com/-9YAwaU1zdt0/Uq_AhyNljwI/AAAAAAAAFYY/osCZRa2SqgE/s640/cars+2014+4.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-full h-full object-center object-cover group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700"> mustang 2023</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$48500</p>
      </a>

     <button className='bg-gray-700 text-white hover:bg-gray-500 rounded-full  ' >see all</button>

    </div>
  </div>
</div> */}


    </div>
  );
}

