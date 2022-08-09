import { Carousel } from 'react-responsive-carousel';
export default function ReactCarousel() {
  return (
    
    <Carousel infiniteLoop={true} autoPlay={true} interval={2500} showThumbs={false} showIndicators={false} showStatus={false}>
    <div className=''>
        <img className='rounded-xl ' alt='item' src="https://images.unsplash.com/photo-1534093607318-f025413f49cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
    </div>
    <div>
        <img className='rounded-xl' alt='item' src="https://images.unsplash.com/photo-1577473404054-cbdf6c62ebaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        
    </div>
    <div>
        <img className='rounded-xl' alt='item' src="https://images.unsplash.com/photo-1631001094341-4b3620054481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
    </div>
     <div>
        <img className='rounded-xl' alt='item' src="https://images.unsplash.com/photo-1508357941501-0924cf312bbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
       
    </div>
    <div>
        <img className='rounded-xl' alt='item' src="https://images.unsplash.com/photo-1628947733273-cdae71c9bfd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        
    </div>
    <div>
        <img className='rounded-xl' alt='item' src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Toyota-HiAce/4223/1558332212578/front-left-side-47.jpg" />
    </div>
</Carousel>
  )
}
