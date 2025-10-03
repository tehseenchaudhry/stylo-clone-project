import React from 'react'
import { Link } from 'react-router-dom'

const StepWhereYouFeel = () => {
    return (
        <>
            <div className="relative">
                <img
                    className="mt-[60px] w-full sm:h-[300px] md:h-[300px] lg:h-[400px] border sm:border-2 sm:border-green-700 md:border-blue-300 lg:border-pink-400"
                    src="/blue dress carousel.jpg" alt=""
                />
                <div className="absolute bottom-4 sm:bottom-1 md:bottom-2 lg:bottom-3 left-4 sm:left-8 md:left-12 lg:left-[350px] border-2 sm:border-2 md:border-4 p-2 sm:p-3 md:p-4 lg:p-5 ">


                    <div className="border-2 text-center text-white text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-semibold">Women Shoes '25</div>
                    <div className="flex  sm:flex-row justify-between gap-3 sm:gap-6 mt-4">
                        <Link className="border border-white font-semibold px-6 sm:px-8 md:px-10 py-2 md:py-3 text-white hover:bg-white/20 duration-150"> STEP WHERE YOU FEEL</Link>

                        <Link className="border border-white font-semibold px-6 sm:px-8 md:px-10 py-2 md:py-3 text-white hover:bg-white/20 duration-150">WOMEN SHOES</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepWhereYouFeel