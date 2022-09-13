import React from 'react'
import { Link } from 'react-router-dom'
export default function NewArrivals() {
  return (
    <div className="  rounded">
        <div className=" max-w-2xl  mt-[65px] mb-[45px] mx-auto py-16 bg-grey hover:bg-gray-300 rounded border px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className='mb-5 font-bold text-center text-2xl '>New arrivals</h2>
          <h2 className="sr-only">Products</h2>

          <div className=" grid  grid-cols-2 gap-y-10 sm:grid-cols-4  gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-4 xl:gap-x-8">
            <Link to="/mustang2023" className="group">
              <div className="border-solid border-2 border-black  w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img  className="w-full h-full object-center object-cover group-hover:opacity-75" src="https://4.bp.blogspot.com/-9YAwaU1zdt0/Uq_AhyNljwI/AAAAAAAAFYY/osCZRa2SqgE/s640/cars+2014+4.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."  />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">mustang 2023</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$48500</p>
            </Link>

            <Link to="Audi2023" className="group">
              <div className=" border-solid border-2 border-black w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src="https://th.bing.com/th/id/R.5708d4bdd4a24a05718a3f0b4ad1af3a?rik=6YXBkLyqDZkOcQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-6SSW1A2oz_I%2fUtK0uCasu7I%2fAAAAAAAAGGg%2f-Da5apg8THA%2fs1600%2flatest%2bcars%2bin%2b2014%2b12.jpg&ehk=dp4NLxQPtgXAbtns3%2boHpTRXeHjxs7IlmBM4PO%2bqw7E%3d&risl=&pid=ImgRaw&r=0" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-full object-center object-cover group-hover:opacity-75" />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Audi 2023</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$35800</p>
            </Link>

            <Link to="Audi2023" className="group">
               <div className=" border-solid border-2 border-black w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src="https://th.bing.com/th/id/R.5708d4bdd4a24a05718a3f0b4ad1af3a?rik=6YXBkLyqDZkOcQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-6SSW1A2oz_I%2fUtK0uCasu7I%2fAAAAAAAAGGg%2f-Da5apg8THA%2fs1600%2flatest%2bcars%2bin%2b2014%2b12.jpg&ehk=dp4NLxQPtgXAbtns3%2boHpTRXeHjxs7IlmBM4PO%2bqw7E%3d&risl=&pid=ImgRaw&r=0" alt="Person using a pen to cross a task off a productivity paper card." className="w-full h-full object-center object-cover group-hover:opacity-75" />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Audi 2023</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$35800</p>
            </Link>

            <Link to="mustang2023" className="group">
              <div className=" border-solid border-2 border-black w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src="https://4.bp.blogspot.com/-9YAwaU1zdt0/Uq_AhyNljwI/AAAAAAAAFYY/osCZRa2SqgE/s640/cars+2014+4.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-full h-full object-center object-cover group-hover:opacity-75" />
              </div>
              <h3 className="mt-4 text-sm text-gray-700"> mustang 2023</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$48500</p>
            </Link>

            <Link to='AllArrivals' className='bg-sky-800 text-center text-white hover:bg-sky-600 lg:h-6 md:ml-auto  lg:my-auto sm:h-6 sm:w-[80px] sm:mx-auto sm:my-auto  rounded-full  ' >see all</Link>

          </div>
        </div>
      </div>)}

  

