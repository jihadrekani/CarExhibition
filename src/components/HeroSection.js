import React from 'react';
import { Link } from 'react-router-dom';
import ReactCarousel from './ReactCarousel';
export default function HeroSection() {
  return (
    <div className="container mx-auto grid grid-cols-1  md:grid-cols-2  mt-8 md:mt-10 ">
      <div className=" flex flex-col items-center justify-center">
        {' '}
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
          Find your Dream car <br/>
          <span className="text-indigo-600">the choice is yours</span>
        </h2>
        <p className="text-2xl text-gray-500 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure totam
          perferendis ut neque aliquid, dolores nostrum reprehenderit, sunt
          numquam debitis amet mollitia laborum.{' '}
        </p>
        <div className="mt-10">
          <Link to="/Categories"   className="shadow-md hover:shadow-lg bg-indigo-600 text-white px-6 py-4 rounded-lg text-xl font-semibold mr-4 sm:mb-2  ">
            View Categories
          </Link >
          {/* <button className="shadow-md hover:shadow-lg bg-white text-indigo-600 px-6 py-4 rounded-lg text-xl font-semibold">
            View Categories
          </button> */}
        </div>
      </div>
      <div className="bg-red-300 ">
        {/* <img
          className="h-full w-auto object-cover rounded"
          src="https://images.unsplash.com/photo-1614026480209-cd9934144671?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="woman holding bags while shopping"
        /> */}

       <ReactCarousel />

      </div>
    </div>
  );
}
 