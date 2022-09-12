import Layout from '../layouts/MainLayout';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NewDeals() {
  const Cars = [
    {id: 1,
    
    name:"chevrolet chevelle malibu",
    image:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    miles_per_Gallon:18,
    cylinders:8,
    displacement:307,
    horsepower:130,
    weight_in_lbs:3504,
    acceleration:12,
    year:"1970",
    oldprice:"118,000 $",
    newprice:"117,100 $",
    origin:"USA"},

    {id: 2,
      name:"buick skylark 320",
      image:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      miles_per_Gallon:15,
      cylinders:8,
      displacement:350,
      horsepower:165,
      weight_in_lbs:3693,
      acceleration:11.5,
      year:"1970",
      oldprice:"158,000 $",
    newprice:"156,000 $",
      origin:"Germany"},
    {id: 3,
      name:"plymouth satellite",
      image:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      miles_per_Gallon:18,
      cylinders:8,
      displacement:318,
      horsepower:150,
      weight_in_lbs:3436,
      acceleration:11,
      year:"1970",
      oldprice:"34,000 $",
    newprice:"33,300 $",
      origin:"Japan"},
      { id: 4,
        name:"amc rebel sst",
        image:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        miles_per_Gallon:16,
        cylinders:8,
        displacement:304,
        horsepower:150,
        weight_in_lbs:3433,
        acceleration:12,
        year:"1970",
        oldprice:"88,000 $",
    newprice:"85,500 $",
        origin:"China"
     },
     {  id: 5,
        name:"ford torino",
        image:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        miles_per_Gallon:17,
        cylinders:8,
        displacement:302,
        horsepower:140,
        weight_in_lbs:3449,
        acceleration:10.5,
        year:"1970",
        oldprice:"23,000 $",
    newprice:"22,300 $",
        origin:"USA"
     },
     {  id: 6,
        name:"ford galaxie 500",
        image:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        miles_per_Gallon:15,
        cylinders:8,
        displacement:429,
        horsepower:198,
        weight_in_lbs:4341,
        acceleration:10,
        year:"1970",
        oldprice:"98,000 $",
    newprice:"96,777 $",
        origin:"Japan"
     },
     {  id: 7,
        name:"chevrolet impala",
        image:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        miles_per_Gallon:14,
        cylinders:8,
        displacement:454,
        horsepower:220,
        weight_in_lbs:4354,
        acceleration:9,
        year:"1970",
        oldprice:"101,000 $",
    newprice:"100,000 $",
        origin:"China"
     },
     {id: 8,
      name:"ford maverick",
      image:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      miles_per_Gallon:21,
      cylinders:6,
      displacement:200,
      horsepower:85,
      weight_in_lbs:2587,
      acceleration:16,
      year:"1970",
      oldprice:"133,000 $",
    newprice:"132,500 $",
      origin:"USA",
      
   },
  ];

  return (
    <Layout>
      <h1 className=' flex  justify-center mt-7  text-4xl font-semibold text-[#1f2937] font-serif'>New Deals </h1>
    <div className='container   mx-auto p-10 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-5 object-fill'>
      {Cars.map((user, index) => {
        return (
          <div className='border-solid border-2 border-slate-500' key={index}>
            <img className='mb-1 ' alt='' src={user.image}/>
            <h2 className='ml-2 font-semibold'> {user.name}</h2>
            <p className='ml-2 text-red-600'> <del>{user.oldprice}</del> </p>
            <p className='ml-2 font-bold'> {user.newprice}</p>
            <Link to='/NewDealsDetails' target={"blank"}  className='inline-block m-1 px-1.5 py-1.5 bg-sky-800 text-white font-medium text-[12px] leading-tight  rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out float-right'>More Details</Link>

            
          </div>
        );
      })}

      

      
    </div>
</Layout>
);
}