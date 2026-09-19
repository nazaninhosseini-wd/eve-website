import React, { useState } from 'react';
import Img1 from "../../assets/img/eve-01.jpg";
import Img2 from "../../assets/img/eve-02.jpg";
import Img3 from "../../assets/img/eve-03.jpg";
import "../../index.css";
import { Link } from 'react-router-dom';

const ImageList=[
    {
        id: 1,
        img:Img1,
    },
    {
        id: 2,
        img:Img2,
    },
    {
        id: 3,
        img:Img3,
    },
]

const Hero = () => {

    const [imgID , setImgId]=useState(Img1)

    return (
        <div className='bgImage min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center duration-200'>
            <div className=' container mx-auto px-4 sm:px-12 pb-8 sm:pb-0'>
              <div className=' grid grid-cols-1 sm:grid-cols-2'>
                 {/* text section*/}
                 <div className=' flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center'>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold '>
                        به ایو 
                        <span className='text-yellow-500'> خوش آمدید </span> 
                    </h1>
                    <p  dir="rtl" className='text-sm'>
                 به استودیوی طراحی ایو  خوش آمدید.
                  طراحی خاص و منحصر بفرد و مطابق با اصول طراحی مد دنیا را از ما بخواهید.
                    </p>

                    
                    <Link className='bg-linear-to-r from-yellow-500 to-yellow-600 text-white py-2 px-4 rounded-full self-center w-fit  hover:shadow-lg hover:bg-linear-to-l cursor-pointer duration-200  hover:scale-105'  to="/portfolio"> 
                        نمونه کارها
                    </Link>
                 </div>
                 {/* Image Section */}
                 <div className="min-h-[450px] sm:min-h-[500px] flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6 order-1 sm:order-2">

    {/* عکس اصلی */}
    <div className="w-full flex-1 min-w-0 flex justify-center items-center mt-4 sm:mt-0 ">
    <div className="w-[300px] h-[350px] sm:w-[400px] sm:h-[450px] lg:w-[450px] lg:h-[500px] flex justify-center items-center">
        <img
            src={imgID}
            className="w-full h-full object-contain"
        />
    </div>
</div>

    {/* Thumbnail ها */}
    <div className="
        flex flex-row lg:flex-col
        gap-3
        p-2
        justify-center items-center
        bg-white/35
        rounded-full
        shrink-0
    ">
        {ImageList.map((item) => (
            <img
                className="
                    w-[65px] h-[65px]
                    sm:w-[75px] sm:h-[75px]
                    lg:w-[80px] lg:h-[80px]
                    object-contain
                    hover:scale-105
                    cursor-pointer
                    duration-200
                "
                key={item.id}
                src={item.img}
                onClick={() => {
                    setImgId(
                        item.id === 1
                            ? Img1
                            : item.id === 2
                            ? Img2
                            : Img3
                    );
                }}
            />
        ))}
    </div>

</div>
              </div>
            </div>
        </div>
    );
}

export default Hero;
