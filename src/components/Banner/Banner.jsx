import React from 'react';
import img from "../../assets/img/eve-10.jpg" ;
import banner from "../../assets/img/eve-09.jpg";
import { GiLargeDress } from "react-icons/gi";
import { GiSewingMachine } from "react-icons/gi";
import { GiSewingNeedle } from "react-icons/gi";



const Banner = () => {
    return (
        <div className='min-h-[550px]'>
            <div className='min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0'>
                <div className=' container'>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        <div>
                            <img 
                            src={img} 
                            className='max-w-[430px] p-5 w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)' 
                            />
                        </div>
                        <div className=' flex flex-col justify-center gap-6 sm:pt-0 p-4 '>
                            <h1 dir='rtl' className='text-4xl font-bold'  >  چرا استودیوی ایو </h1>
                            <p dir='rtl' className='text-justify'>
                                سالهاست مفتخریم پوشاک ایو را طراحی و در گالری های تهران بصورت حضوری برای فروش گذاشتیم.
                                امیدواریم با حمایت شما این مسیر ادامه دار باشد.
                                
                                سالهاست مفتخریم پوشاک ایو را طراحی و در گالری های تهران بصورت حضوری برای فروش گذاشتیم.
                                امیدواریم با حمایت شما این مسیر ادامه دار باشد.
                                
                                سالهاست مفتخریم پوشاک ایو را طراحی و در گالری های تهران بصورت حضوری برای فروش گذاشتیم.
                                امیدواریم با حمایت شما این مسیر ادامه دار باشد.
                                
                                سالهاست مفتخریم پوشاک ایو را طراحی و در گالری های تهران بصورت حضوری برای فروش گذاشتیم.
                                امیدواریم با حمایت شما این مسیر ادامه دار باشد.
                            </p>
                            <div className=' flex justify-center gap-6 '>
                                <div><GiSewingMachine className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-500' /></div>
                                <div><GiLargeDress className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-500 ' /></div>
                                <div><GiSewingNeedle className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-blue-500 ' /></div>
                            </div>

                            <div className=' flex justify-center '>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
