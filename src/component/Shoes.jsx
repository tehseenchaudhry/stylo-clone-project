import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";



const shoesData = [
  { name: "PUMPS", img: "/Pumps shoes.jpg" },
  { name: "MOCCASIN", img: "/Moccasin shoes.jpg" },
  { name: "COURT SHOES", img: "/court shoes.jpg" },
  { name: "HEELS", img: "/heel shoes.jpg" },
  { name: "SNEAKERS", img: "/Sneakers shoes.jpg" },
  { name: "BACK OPEN", img: "/Back-open shoes.jpg" },
];

function Shoes() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024, // lg screen se choti
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // md screen se choti
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // smallest screen
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="border-2 border-red-500 my-[50px] overflow-hidden">

        {
          shoesData.map((shoes, index) => (
            <div key={index}>
              <Link to={`/shoes-category/${shoes.name.toLowerCase()}`}>
                <div className="border-2 h-[200px] w-[200px] rounded-[100px] p-1 mx-auto mt-[5px]   transition-transform duration-300 hover:scale-102">
                  <img src={shoes.img} alt={shoes.name} height={195} width={195} className="rounded-[97px]" />
                </div>
                <div className="tracking-widest border-2 border-amber-300 text-center w-[150px] mt-3 mx-auto">
                  {shoes.name}
                </div>
              </Link>
            </div>
          ))
        }

      </Slider>
    </div>
  );
}

export default Shoes;
