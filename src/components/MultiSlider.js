import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
export default function MultiSlider() {
    
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
            },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  return (
    <div>

        
    <h2 className='flex justify-center align-center mb-4 text-2xl font-bold'>New Deals <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 mt-2 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg> </h2>

<Carousel className='container mx-auto object-fill flex w-screen '  responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2500} ssr={true}   >

  <div><Link to="/NewDeals">
        <img className=' w-auto h-[275px] mx-2  ' alt='item' src="https://th.bing.com/th/id/R.f16e9720a426e3e84cb2dc36a9b89239?rik=yvF%2b0T89baiLtQ&pid=ImgRaw&r=0" />
   <h2 className='text-center'>Range Rover Evoque  <del className='ml-2 mr-2 text-red-800'> 42,650$</del> <b>41,999$</b>  </h2>
   </Link>
    </div>
    <div><Link to="/NewDeals">
        <img className='w-auto h-[275px] mx-2 ' alt='item' src="https://performancedrive.com.au/wp-content/uploads/2021/06/2022-BMW-X4-M-Competition-1280x835.jpeg" />
   <h2 className='text-center'> BMW X3 M, X4 M 2022  <del className='ml-2 mr-2 text-red-800'>  $70,895</del> <b>69,999$ </b>  </h2>
   </Link>
    </div>
    <div>
    <Link to="/NewDeals">
        <img className='w-auto h-[275px] mx-2 ' alt='item' src="https://th.bing.com/th/id/R.715d5e15c42f3058cc5dd2a1cde35184?rik=SO6RbK0psHYzxQ&riu=http%3a%2f%2fwww.marinoperformancemotors.com%2fimagetag%2f13254%2f10%2fl%2fUsed-2019-Dodge-Challenger-SRT-Hellcat-Redeye-Widebody.jpg&ehk=Anke49z0yTy3sv9pcTH2pfA45CyPTnZ6xQ2pfmUHr5s%3d&risl=&pid=ImgRaw&r=0" />
   <h2 className='text-center'>Dodge Challenger 2019  <del className='ml-2 mr-2 text-red-800'> 77,900$</del> <b>77,000$ </b>  </h2>
   </Link>
    </div>
     <div>
     <Link to="/NewDeals">
    
        <img className='w-auto h-[275px] mx-2 ' alt='item' src="https://th.bing.com/th/id/R.28e3ea430bade7e5bc97eedb9a5cb39e?rik=yxO%2bmphdaDCnsQ&pid=ImgRaw&r=0" />
   <h2 className='text-center'>Jeep Wranger Rubicon  <del className='ml-2 mr-2 text-red-800'> 42,650$</del> <b>41,999$ </b>  </h2>
   </Link>
    </div>
    <div>
     <Link to="/NewDeals">

        <img className='w-auto h-[275px] mx-2 text-red-800' alt='item' src="https://media.ed.edmunds-media.com/toyota/tacoma/2018/oem/2018_toyota_tacoma_crew-cab-pickup_limited_fq_oem_1_1600.jpg" />
   <h2 className='text-center'>Toyota pickup 2018  <del className='ml-2 mr-2 text-red-800'> 45,590$</del> <b>44,750$ </b>  </h2>
        </Link>
    </div>
</Carousel>;
    </div>
  )
}
