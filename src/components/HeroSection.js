import React from 'react';
import { Link } from 'react-router-dom';
import ReactCarousel from './ReactCarousel';
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
        <div className="mt-10">
          <Link to="/Categories"   className=" shadow-md hover:shadow-lg hover:bg-indigo-800 bg-indigo-600 text-white px-6 py-4 rounded-lg  text-xl font-semibold  sm:mb-4  ">
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
    </div>
  );
}
 