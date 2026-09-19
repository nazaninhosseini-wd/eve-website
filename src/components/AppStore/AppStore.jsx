import React from 'react';
import AppStoreImg from '../../assets/img/appstore.png';
import GooglePlayImg from '../../assets/img/googleplay.png';
import GifImg from '../../assets/img/Customer service chat.gif';

const AppStore = () => {
    return (
        <div className=' bg-gray-100 py-14'>
            <div className=' container mx-auto px-4 sm:px-12'>
                <div className=' grid sm:grid-cols-2 grid-cols-1 items-center gap-4'>
                    <div className=' space-y-6 max-w-xl mx-auto'>
                        <h1 dir='rtl' className='text-2xl text-center sm:text-4xl  text-gray-500'>
                            اپلیکیشن ایو برای Android , IOS
                        </h1>
                        <div className='flex flex-wrap justify-center items-center gap-4'>
                            <img
                            data-aos="zoom-in-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
                            src={AppStoreImg}
                            className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
                            <img
                            data-aos="zoom-in-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
                            src={GooglePlayImg}
                            className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img
             src={GifImg} className='w-full sm:max-w-[60%] rounded-md mix-blend-multiply' />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default AppStore;
