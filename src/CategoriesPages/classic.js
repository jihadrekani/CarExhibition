import Layout from '../layouts/MainLayout';
import { UsersIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
export default function Sports() {
  const Cars = [
    {id: 1,
    name:"chevrolet chevelle malibu",
    image:" https://cdn.dealeraccelerate.com/cam/34/2211/102571/1920x1440/1972-chevrolet-chevelle-malibu",
    miles_per_Gallon:18,
    cylinders:8,
    displacement:307,
    horsepower:130,
    weight_in_lbs:3504,
    acceleration:12,
    year:"1970-01-01",
    origin:"USA"},

    {id: 2,
      name:"buick skylark 320",
      image:" https://cdn.dealeraccelerate.com/cam/34/2211/102571/1920x1440/1972-chevrolet-chevelle-malibu",
      miles_per_Gallon:15,
      cylinders:8,
      displacement:350,
      horsepower:165,
      weight_in_lbs:3693,
      acceleration:11.5,
      year:"1970-01-01",
      origin:"USA"},
    {id: 3,
      name:"plymouth satellite",
      image:" https://cdn.dealeraccelerate.com/cam/34/2211/102571/1920x1440/1972-chevrolet-chevelle-malibu",
      miles_per_Gallon:18,
      cylinders:8,
      displacement:318,
      horsepower:150,
      weight_in_lbs:3436,
      acceleration:11,
      year:"1970-01-01",
      origin:"USA"},
      { id: 4,
        name:"amc rebel sst",
        image:" https://cdn.dealeraccelerate.com/cam/34/2211/102571/1920x1440/1972-chevrolet-chevelle-malibu",
        miles_per_Gallon:16,
        cylinders:8,
        displacement:304,
        horsepower:150,
        weight_in_lbs:3433,
        acceleration:12,
        year:"1970-01-01",
        origin:"USA"
     },
     {  id: 5,
        name:"ford torino",
        image:" https://cdn.dealeraccelerate.com/cam/34/2211/102571/1920x1440/1972-chevrolet-chevelle-malibu",
        miles_per_Gallon:17,
        cylinders:8,
        displacement:302,
        horsepower:140,
        weight_in_lbs:3449,
        acceleration:10.5,
        year:"1970-01-01",
        origin:"USA"
     },
     {  id: 6,
        name:"ford galaxie 500",
        image:" https://cdn.dealeraccelerate.com/cam/34/2211/102571/1920x1440/1972-chevrolet-chevelle-malibu",
        miles_per_Gallon:15,
        cylinders:8,
        displacement:429,
        horsepower:198,
        weight_in_lbs:4341,
        acceleration:10,
        year:"1970-01-01",
        origin:"USA"
     },
     {  id: 7,
        name:"chevrolet impala",
        image:" https://cdn.dealeraccelerate.com/cam/34/2211/102571/1920x1440/1972-chevrolet-chevelle-malibu",
        miles_per_Gallon:14,
        cylinders:8,
        displacement:454,
        horsepower:220,
        weight_in_lbs:4354,
        acceleration:9,
        year:"1970-01-01",
        origin:"USA"
     },
     {id: 8,
      name:"ford maverick",
      image:" https://cdn.dealeraccelerate.com/cam/34/2211/102571/1920x1440/1972-chevrolet-chevelle-malibu",
      miles_per_Gallon:21,
      cylinders:6,
      displacement:200,
      horsepower:85,
      weight_in_lbs:2587,
      acceleration:16,
      year:"1970-01-01",
      origin:"USA"
   },
   {id:9,
    name:"datsun pl510",
    image:" https://cdn.dealeraccelerate.com/cam/34/2211/102571/1920x1440/1972-chevrolet-chevelle-malibu",
    miles_per_Gallon:27,
    cylinders:4,
    displacement:97,
    horsepower:88,
    weight_in_lbs:2130,
    acceleration:14.5,
    year:"1970-01-01",
    origin:"Japan"
 },
 {id:10,
  name:"volkswagen 1131 deluxe sedan",
  image:" https://cdn.dealeraccelerate.com/cam/34/2211/102571/1920x1440/1972-chevrolet-chevelle-malibu",
  miles_per_Gallon:26,
  cylinders:4,
  displacement:97,
  horsepower:46,
  weight_in_lbs:1835,
  acceleration:20.5,
  year:"1970-01-01",
  origin:"Europe"
},
{ id:11,
  name:"peugeot 504",
  image:" https://cdn.dealeraccelerate.com/cam/34/2211/102571/1920x1440/1972-chevrolet-chevelle-malibu",
  miles_per_Gallon:25,
  cylinders:4,
  displacement:110,
  horsepower:87,
  weight_in_lbs:2672,
  acceleration:17.5,
  year:"1970-01-01",
  origin:"Europe"
},
 {id: 12,
  name:"plymouth fury iii",
  image:" https://cdn.dealeraccelerate.com/cam/34/2211/102571/1920x1440/1972-chevrolet-chevelle-malibu",
  miles_per_Gallon:14,
  cylinders:8,
  displacement:440,
  horsepower:215,
  weight_in_lbs:4312,
  acceleration:8.5,
  year:"1970-01-01",
  origin:"USA"
     },    
  ];

  return (
    <Layout>
      <h1 className=' container mt-5 text-center text-4xl font-semibold text-[#1f2937] '>classic Cars</h1>
    <div className='container  mx-auto p-10 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-10 object-fill'>
      {Cars.map((user, index) => {
        return (
          <div key={index}>
            <img src={user.image}/>
            <h2>name: {user.name}</h2>
            <p>country: {user.origin}</p>
            <p>year: {user.year}</p>
            <button className='inline-block px-2.5 py-2 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out float-right'>more details</button>

            <hr />
          </div>
        );
      })}

      <hr />
      <hr />
      <hr />

      
    </div>
</Layout>
);
}