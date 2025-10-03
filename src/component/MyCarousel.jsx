import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const MyCarousel = () => {
  return (
    <>
      <div className='use-code border-2 border-amber-400 bg-black text-white mt-5 py-2 text-center font-sans '>Free Delivery on All Orders Till 31st July Only</div>
      <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} interval={3000}>
        <div>
          <img className="h-[90%] object-cover" src="/school shoes carousel.jpg" alt="Image 1" />
        </div>
        <div>
          <img className="h-[90%] object-cover" src="/blue dress carousel.jpg" alt="Image 2" />
        </div>
        <div>
          <video className="h-[90%] object-cover" autoPlay muted loop playsInline width="100%" height="90%">
            <source
              src="/video1.mp4" type="video/mp4"
            />
          </video>


        </div>
        <div>
          <img className="h-[90%] object-cover" src="/carousel watch.jpg" alt="Image 3" />
        </div>
      </Carousel>
      <h1 className='name'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name1'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name2'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name3'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name4'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name5'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name6'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name7'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name8'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name9'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name10'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name11'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name12'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name13'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name14'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name15'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name16'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name17'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name18'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name19'>Mr Shahzad Nazar Khan</h1>
      {/* <h1 className='name20'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name21'>Mr Shahzad Nazar Khan</h1>
      <h1 className='name22'>Mr Shahzad Nazar Khan</h1> */}
    </>
  )
}

export default MyCarousel