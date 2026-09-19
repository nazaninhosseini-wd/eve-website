import React from 'react';
import Image1 from "../../assets/img/eve-05.jpg";
import Image2 from "../../assets/img/eve-06.jpg";
import Image3 from "../../assets/img/eve-07.jpg";
import StarRating from "../StarRating";

const servicesData = [
    {
        id: 1,
        img:Image1 ,
        name: "طرح های ایو" ,
        desc: "طراحی خاص و منحصر بفرد و مطابق با اصول طراحی مد دنیا را از ما بخواهید.",
    },
    {
        id: 2,
        img:Image2,
        name: "طراحی اختصاصی" ,
        desc: "طراحی خاص و منحصر بفرد و مطابق با اصول طراحی مد دنیا را از ما بخواهید.",
    },
    {
        id: 3,
        img:Image3 ,
        name: "مشاوره استایل" ,
        desc: "طراحی خاص و منحصر بفرد و مطابق با اصول طراحی مد دنیا را از ما بخواهید.",
    },
]

const Services = () => {

    return (
        <div className='py-10'>
           <div className=' container mx-auto'>
            <div className=' text-center mb-20 max-w-[400px] mx-auto '>
                <h1  className=' text-3xl font-bold '>خدمات ما</h1>
            </div>

            <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className=' grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center '>
                {
                    servicesData.map((service)=>(
                        <div 
                        key={service.id}
                        className=' rounded-2xl my-14  bg-gray-800 hover:bg-yellow-500 hover:text-white relative shadow-xl duration-high group max-w-[300px] cursor-pointer '>

                            <div className=' h-[120px]'>
                                <img src={service.img}
                                className='max-w-[200px] w-40 h-40 rounded-full block mx-auto  transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 ' />
                            </div>
                            <div className='p-4 text-center'>
                                <div className='w-full'>
                                   <StarRating initialRating={4} />
                                </div>
                                <h1 className='text-white text-xl font-bold'>{service.name}</h1>
                                <p className='text-white text-sm line-clamp-2'>{service.desc}</p>
                            </div>

                        </div>
                    ))
                }
            </div>

            </div> 
        </div>
    );
}

export default Services;
