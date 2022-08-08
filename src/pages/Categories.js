import React from 'react';
import Layout from '../layouts/MainLayout';
export  function Categories() {
  
  return ;
}
/*
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
*/
const callouts = [
  {
    type: 'Motorcycle',
    imageSrc: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    href: '/Motorcycle',
  },
  {
    type: 'Sports',
    imageSrc: 'https://images.unsplash.com/photo-1573661687979-b1fe429b9da3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    href: '/Sports',
  },
  {
    type: 'PrivateCar',
    imageSrc: 'https://images.unsplash.com/photo-1604054094723-3a949e4a8993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    href: '/PrivateCar',
  }, {
    type: 'Taxis',
    imageSrc: 'https://img.freepik.com/free-photo/closeup-shot-taxi-sign-placed_181624-13961.jpg?w=740&t=st=1659429192~exp=1659429792~hmac=1a00d6ffd0eaba13b8b2a2dd17015d60f47082d3c46b8b2cdf6ad0c95afeebfc',
    href: '/Taxis',
  }, {
    type: 'Buses',
    imageSrc: 'https://visor.ph/wp-content/uploads/2018/10/toyota-hiace-commuter-main1.jpg',
    href: '/Buses',
  }, {
    type: 'classic',
    imageSrc: 'https://www.focus2move.com/wp-content/uploads/2020/08/Morgan-Plus_Four-2021-1024-01.jpg',
    href: '/classic',
  },
]

export default function Example() {
  return (
    <Layout>
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl mb-6  font-extrabold text-gray-900">Categories</h2>

          <div className="mt-1   space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.type} className="group  relative ">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0 " />
                    {callout.type}
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}
