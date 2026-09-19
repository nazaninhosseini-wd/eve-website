import React from 'react';
import { AiFillPhone } from "react-icons/ai";
import logo from "../../assets/img/eve-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='shadow-md bg-white duration-200'>
            <div className=' container mx-auto px-4 py-3 sm:py-0 sm:px-12'>
                <div className='flex justify-between items-center'>

                    <div className='flex justify-between items-center gap-3'>
                        <Link className='bg-linear-to-r from-yellow-400 to-yellow-500 text-white py-1 px-4 rounded-full flex items-center gap-3 transition hover:shadow-lg hover:bg-linear-to-l cursor-pointer' to="/contact">
                            تماس با ما
                            <AiFillPhone />
                        </Link>
                        <ul className=' hidden sm:flex items-center gap-4'>
                            <li>
                               <Link className=' hover:text-yellow-500 inline-block py-4 px-5' to="/portfolio">
                                   نمونه کارها
                               </Link> 
                            </li>
                            <li>
                                <Link className=' hover:text-yellow-500 inline-block py-4 px-5' to="/blog">
                                    وبلاگ
                                </Link>
                                </li>
                        </ul>
                    </div>

                    <div>
                        <Link className='font-bold text-2xl sm:text-3xl flex gap-2' to="/">
                            EVE STUDIO
                            <img src={logo} className='w-10' />
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Navbar;
