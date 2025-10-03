import React from 'react'
import MyCarousel from './MyCarousel'
import LeadingChoice from './LeadingChoice'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import StepWhereYouFeel from './StepWhereYouFeel';
import Shoes from './Shoes';


const Abc = () => {
  return (
   <>
      <MyCarousel></MyCarousel>
      <LeadingChoice></LeadingChoice>
      <StepWhereYouFeel></StepWhereYouFeel>
      <Shoes></Shoes>
   </>
  )
}

export default Abc