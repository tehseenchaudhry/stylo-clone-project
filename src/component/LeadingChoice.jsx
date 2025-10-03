import React, { useRef } from 'react'
import Slider from "react-slick";


const LeadingChoiceCards = [
  {
    id: 1,
    img: {
      first: '/maroon shoes leading choice.jpg',
      second: '/maroon1 shoes leading choice.jpg'
    },
    title: 'MAROON  SNEAKER AT7332',
    oldprice: 3500,
    newprice: 2415,
    save: '31%'
  },
  {
    id: 2,
    img: {
      first: '/golden shoes leading choice.jpg',
      second: '/golden1 shoes leading choice.jpg'
    },
    title: 'Golden Casual Sneaker AT7246',
    oldprice: 6500,
    newprice: 4000,
    save: '38%'
  },
  {
    id: 3,
     img: {
      first: '/seagreen shoes leading choice.jpg',
      second: '/seagreen1 shoes leading choice.jpg'
    },
    title: 'Seagreen  Sneaker AT7344',
    oldprice: 8000,
    newprice: 3920,
    save: '51%'
  },
  {
    id: 4,
     img: {
      first: 'women pink shoes leading choice.jpg',
      second: 'women1 pink shoes leading choice.jpg'
    },
    title: 'Women Pink  Sneaker AT7328',
    oldprice: 1900,
    newprice: 4000,
    save: '51%'
  },
  {
    id: 5,
     img: {
      first: '/green shoes leading choice.jpg',
      second: '/green1 shoes leading choice.jpg'
    },
    title: 'Green Casual Sneaker AT7351',
    oldprice: 8000,
    newprice: 3900,
    save: '51%'
  },
  {
    id: 6,
     img: {
      first: '/women green shoes leading choice.jpg',
      second: '/women1 green shoes leading choice.jpg'
    },
    title: 'Green  Sneaker Ladies AT7309',
    oldprice: 3800,
    newprice: 1800,
    save: '53%'
  },
  {
    id: 7,
     img: {
      first: '/women mustard shoes leading choice.jpg',
      second: '/women1 mustard shoes leading choice.jpg'
    },
    title: 'Mustard Casual Sneaker AT7369',
    oldprice: 4500,
    newprice: 2200,
    save: '51%'
  },
  {
    id: 8,
     img: {
      first: '/pink shoes leading choice.jpg',
      second: '/pink1 shoes leading choice.jpg'
    },
    title: 'Pink Casual Sneaker AT7332',
    oldprice: 3500,
    newprice: 2415,
    save: '51%'
  },
  {
    id: 9,
     img: {
      first: '/mustard shoes leading choice.jpg',
      second: '/mustard1 shoes leading choice.jpg'
    },
    title: 'Mustard Casual Sneaker AT7359',
    oldprice: 3800,
    newprice: 1800,
    save: '51'
  },
  {
    id: 10,
     img: {
      first: '/women gray shoes leading choice.jpg',
      second: '/women1 gray shoes leading choice.jpg'
    },
    title: 'Grey Casual Sneaker AT7336',
    oldprice: 4000,
    newprice: 1900,
    save: '51%'
  },
  {
    id: 11,
     img: {
      first: '/women pink1 shoes leading choice.jpg',
      second: '/women1 pink1 shoes leading choice.jpg'
    },
    title: 'Pink Casual Sneaker AT7389',
    oldprice: 4300,
    newprice: 2000,
    save: '38%'
  },
  {
    id: 12,
     img: {
      first: '/Blue Athleisure shoes leading choice.jpg',
      second: '/Blue1 Athleisure shoes leading choice.jpg'
    },
    title: 'Blue Athleisure Sneaker AT7353',
    oldprice: 8000,
    newprice: 3920,
    save: '51%'
  }

]

const LeadingChoice = () => {

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,


  responsive: [
    {
      breakpoint: 1024, // below 1024px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768, // below 768px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576, // below 576px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]



  };

    function changeImage(e) {
    const productId = Number(e.currentTarget.id) - 1;
    const imgElement = e.currentTarget.querySelector('img');
    imgElement.src = LeadingChoiceCards[productId].img.second;
  }

  function changeImageBack(e) {
    const productId = Number(e.currentTarget.id) - 1;
    const imgElement = e.currentTarget.querySelector('img');
    imgElement.src = LeadingChoiceCards[productId].img.first;
  }


  return (
    <>
      <div className="border-2  border-green-500 mt-20 text-center">
        <div className='border-2  w-100 mx-auto '>
          <h2 className=' text-[40px] font-sans '>Leading Choices</h2>
           <button className='border-2 border-grey hover:border-2 hover:border-black cursor-pointer text-gray-500 tracking-widest font-medium px-4 py-2 my-4'>VIEW ALL</button>
        </div>
        <div className='border-2 border-cyan-600 overflow-hidden mb-5'>
          <Slider {...settings}>
            {
              LeadingChoiceCards.map((obj) => {
                return <div id={obj.id} className="card-content  transition-all duration-300 ease-in-out" key={obj.id} onMouseEnter={changeImage} onMouseLeave={changeImageBack}>

                  {/* <div  className='background ' style={{ backgroundImage: `url(${obj.img.first})` }}></div> */}
                  <img  className="h-[250px] w-[271px] sm:w-[300px] md:w-[340px] object-cover mx-auto"  src={obj.img.first} alt="" height={250} width={280} />
                   <div className="quick-view-btn">Quick View </div>
                  <h3 className='tracking-widest font-medium mt-2'>{obj.title}</h3>
                  <div className="flex items-center gap-2 mt-2 pl-10  ">
                    <span className="line-through text-gray-500 text-sm">Rs {obj.oldprice}</span>
                    <span className="text-gray-600 font-bold">Rs {obj.newprice}</span>
                    <span className="text-red-600 text-sm font-medium">Save {obj.save}</span>
                  </div>
                </div>

              })
            }
          </Slider>

        </div>
      </div>
    </>
  )
}

export default LeadingChoice