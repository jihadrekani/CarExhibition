import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';
export default function About() {
  return (
    <div className='mt-5'>

      <Link to='/' className='bg-green-700 hover:bg-green-600  rounded-xl p-1 ml-3 text-white w-[100px] flex ' href='/' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 ml-1 w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
      </svg>
        Home</Link>
      <section class="relative pt-32 pb-28 bg-green-700 overflow-hidden mt-6">
        <img class="absolute top-0 left-0" src="gradia-assets/elements/contact/radial3.svg" alt="" />
        <div class="relative z-10 container mx-auto px-4">
          <div class="flex flex-wrap -m-6">
            <div class="w-full md:w-1/2 p-6">
              <div class="md:max-w-lg">
                <h2 class="mb-7 font-heading font-semibold text-6xl sm:text-7xl md:text-7xl xl:text-10xl text-white">Want to get in touch with us?</h2>
              </div>
            </div>
            <div class="w-full md:w-1/2 p-6">
              <div class="md:max-w-md ml-auto">
                <p class="mb-4 max-w-max text-gray-800 bg-clip-text bg-gradient-cyan2 font-heading text-lg font-semibold">Send us a mail</p>
                <p class="mb-16 text-white text-2xl">jihadfed95@gmail.com</p>
                <p class="mb-4 max-w-max text-gray-800 bg-clip-text bg-gradient-cyan2 font-heading text-lg font-semibold">Follow us</p>
                <ul>
                  <li class="mb-6 text-white hover:text-gray-300 text-2xl"><a href="https://www.facebook.com/jihad.rekani.33">Facebook</a></li>
                  <li class="mb-6 text-white hover:text-gray-300 text-2xl"><a href="https://twitter.com/JiHadJR10?t=_Xx3ig57mn2rivB_uTYn1A&s=09">Twitter</a></li>
                  <li class="mb-6 text-white hover:text-gray-300 text-2xl"><a href="https://www.linkedin.com/in/jihad-issa-618265197">Linkedin</a></li>
                  <li class="mb-6 text-white hover:text-gray-300 text-2xl"><a href="https://instagram.com/jihadissaa?igshid=YmMyMTA2M2Y=">Instagram</a></li>
                  <li class="text-white hover:text-gray-300 text-2xl"><a href="https://www.snapchat.com/add/jr_rekani?share_id=Sfj2M0jEv-Y&locale=en-IQ">Snapchat</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* adress */}


      <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8 mb-[100px]">

        <div class="rounded border-gray-300 dark:border-gray-700  h-24">

          <h2 className='text-center font-bold text-2xl mb-2 text-green-900'> Adress 1</h2>
          <h2 className='text-center font-semibold'> Duhok   </h2>
          <h2 className='text-center font-semibold  text-sm'>Domis next to Sultan sweets</h2>
          <div className='w-[200px] h-[200px] bg-green-700 mx-auto mt-2 text-center flex justify-center items-center text-2xl font-semibold'>  map here</div>

        </div>   <div class="rounded border-gray-300 dark:border-gray-700  h-24">

          <h2 className='text-center font-bold text-2xl mb-2 text-green-900'> Adress 2</h2>
          <h2 className='text-center font-semibold'> Hawler   </h2>
          <h2 className='text-center font-semibold text-sm '>next to hawler citadel </h2>
          <div className='w-[200px] h-[200px] bg-green-700 mx-auto mt-2 text-center flex justify-center items-center text-2xl font-semibold'> map here</div>

        </div>
        <div class="rounded border-gray-300 dark:border-gray-700  h-24">

          <h2 className='text-center font-bold text-2xl mb-2 text-green-900'> Adress 3</h2>
          <h2 className='text-center font-semibold'> Zakho   </h2>
          <h2 className='text-center font-semibold text-sm'>infront of pira delal</h2>
          <div className='w-[200px] h-[200px] bg-green-700 mx-auto mt-2 text-center flex justify-center items-center text-2xl font-semibold mb-8'> map here</div>

        </div>




      </div>


    </div>

  );
}