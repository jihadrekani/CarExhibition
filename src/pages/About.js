import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';
export default function About() {
  return (
    <div className='mt-5'>
      
        <a className='bg-sky-700 rounded-xl p-1 ml-3 text-white w-[100px] flex ' href='/' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 ml-1 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
          Home</a>
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
    </div>

  );
}