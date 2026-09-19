import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";
import FooterLogo from "../../assets/img/eve-logo.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-100'>
            <section className='max-w-[1200px] mx-auto'>
                <div className=' grid md:grid-cols-3 py-4 '>

                    <div className=' px-10 mx-auto items-center'>
                        <h1 className='sm:text-xl text-xl font-bold  text-justify mb-3'>
                            <img src={FooterLogo} alt='eve' className='max-w-[200px] mx-auto' />
                                   
                        </h1>
                        <p dir='rtl' className='text-right'>
                            طراحی خاص و منحصر بفرد و مطابق با اصول طراحی مد دنیا را از ما بخواهید.
                        </p>
                        <br/>
                        
                    </div>


                    <div className=' grid grid-cols-1 sm:grid-cols-2 col-span-2 '>
                        <div className=''>
                            <div className='py-8 px-10'>
                                <div dir='rtl' className='flex items-center gap-3'>
                            <FaLocationArrow  />
                            <p>ایران, تهران</p>
                        </div>
                        <div dir='rtl' className='flex items-center gap-3 mt-3'>
                            <FaMobileAlt  />
                            <p dir='ltr'>+98 9197695745</p>
                        </div>
                        {/* Social Handle */}
                        <div className='flex items-center gap-3 mt-6 float-right '>
                            <a href='#'>
                                <FaInstagram className='text-3xl' />
                            </a>
                            <a href='#'>
                                <FaFacebook className='text-3xl' />
                            </a>
                            <a href='#'>
                                <FaLinkedin className='text-3xl' />
                            </a>
                        </div>
                            </div>
                        </div>
                        <div className=''>
                            <div dir='rtl' className='py-8 px-10'>
                                <h1 className='sm:text-xl text-xl font-bold sm:text-right text-justify mb-3'>
                                    لینک های مفید
                                </h1>
                                <ul  className='flex flex-col gap-3'>
                                    <Link className='cursor-pointer' to="/" >خانه</Link>
                                    <Link className='cursor-pointer' to="/portfolio"> نمونه کارها </Link>
                                    <Link className='cursor-pointer' to="/blog">  وبلاگ </Link>
                                    <Link className='cursor-pointer'to="/contact">   تماس با ما </Link>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div dir='rtl' className=' text-center py-10 border-t-2 border-gray-300/50'>
                ساخته شده توسط Fashion Therapy
                </div>
            </section>
            
        </div>
    );
}

export default Footer;
