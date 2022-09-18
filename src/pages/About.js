import React from 'react';
import { Link } from 'react-router-dom';
import LeafletMap from '../components/LeafletMap';
import Layout from '../layouts/MainLayout';

// import LeafletMap from '../components/LeafletMap';

export default function About() {
  
  return (
    <Layout>
      {/* <Link to='/' className='bg-green-700 hover:bg-green-600  rounded-xl p-1 ml-3 text-white w-[100px] flex ' href='/' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 ml-1 w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
      </svg>
        Home</Link> */}
      <section className="relative pt-32 pb-28 bg-sky-800 overflow-hidden  ">
        <img className="absolute top-0 left-0" src="gradia-assets/elements/contact/radial3.svg" alt="" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-wrap -m-6">
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-lg">
                <h2 className="mb-7 font-heading font-semibold text-6xl sm:text-7xl md:text-7xl xl:text-10xl text-white">Want to get in touch with us?</h2>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-md ml-auto">
                <p className="mb-4 max-w-max text-gray-800 bg-clip-text bg-gradient-cyan2 font-heading text-lg font-semibold">Send us a mail</p>
                <p className="mb-16 text-white text-2xl">jihadfed95@gmail.com</p>
                <p className="mb-4 max-w-max text-gray-800 bg-clip-text bg-gradient-cyan2 font-heading text-lg font-semibold">Follow us</p>
                <ul>
                  <li className="mb-6 text-white hover:text-gray-300 text-2xl "><a className='flex  items-center' href="https://www.facebook.com/jihad.rekani.33"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-5 h-5 mr-1"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg> Facebook</a></li>
                  <li className="mb-6 text-white hover:text-gray-300 text-2xl"><a className='flex  items-center'  href="https://twitter.com/JiHadJR10?t=_Xx3ig57mn2rivB_uTYn1A&s=09"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 mr-1"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg> Twitter</a></li>
                  <li className="mb-6 text-white hover:text-gray-300 text-2xl"><a className='flex  items-center'  href="https://www.linkedin.com/in/jihad-issa-618265197"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 mr-1"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
 Linkedin</a></li>
                  <li className="mb-6 text-white hover:text-gray-300 text-2xl"><a className='flex  items-center'  href="https://instagram.com/jihadissaa?igshid=YmMyMTA2M2Y="><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 mr-1"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg> Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* adress */}

      <div className="container  mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8 mb-[300px]">

        <div className="rounded border-gray-300 dark:border-gray-700  h-24">

          <h2 className='text-center font-bold text-2xl mb-2 text-sky-800'> Adress 1</h2>
          <h2 className='text-center font-semibold'> Duhok   </h2>
          <h2 className='text-center font-semibold  text-sm'>Domis next to Sultan sweets</h2>
          <div  className=' w-[200px] h-[200px] bg-sky-800 mx-auto mt-2 text-center flex justify-center items-center text-2xl font-semibold'>  map here</div>
        </div>   <div className="rounded border-gray-300 dark:border-gray-700  h-24">
          <h2 className='text-center font-bold text-2xl mb-2 text-sky-800'> Adress 2</h2>
          <h2 className='text-center font-semibold'> Hawler   </h2>
          <h2 className='text-center font-semibold text-sm '>next to hawler citadel </h2>
          <div className='w-[200px] h-[200px] bg-sky-800 mx-auto mt-2 text-center flex justify-center items-center text-2xl font-semibold'> map here</div>
        </div>
        <div className="rounded border-gray-300 dark:border-gray-700  h-24">
          <h2 className='text-center font-bold text-2xl mb-2 text-sky-800'> Adress 3</h2>
          <h2 className='text-center font-semibold'> Zakho   </h2>
          <h2 className='text-center font-semibold text-sm'>infront of pira delal</h2>
          <div className='w-[200px] h-[200px] bg-sky-800 mx-auto mt-2 text-center flex justify-center items-center text-2xl font-semibold '>   map here</div>

        </div>
      </div>
{/* <LeafletMap /> */}

    
    </Layout>
  );
} 
