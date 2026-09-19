import React from 'react';
import { useEffect, useState } from "react";

import Image1 from "../../assets/img/eve-05.jpg";
import Image2 from "../../assets/img/eve-06.jpg";
import Image3 from "../../assets/img/eve-07.jpg";

const testimonialItems = [
  {
    id: 1,
    name: "نازنین",
    Text: "من از مشتری های قدیم ایو هستم و همیشه پیگیر کارهای جدیدم و بنظر من هر کسی باید توی کمد لباسش برند ایو دیده بشه تا مشخص شه استایلش براش مهمه",
    img: Image1,
  },
  {
    id: 2,
    name: "سیما",
    Text: "یکی از با کیفیت ترین برندهای ایرانی که دیدم و امیدوارم توی این اوضاع حمایت شه و برندتون فعال بمونه , همیشه موفق باشین و متشکرم",
    img: Image2,
  },
  {
    id: 3,
    name: "عسل",
    Text: "من واقعا سالهاست مشتریتون هستم و کیفیت کارهاتون فوق العاده س و من شانس اینو داشتم که موقع خرید بهم مشاوره استایل هم دادین. امیدوارم همیشه موقع خرید ببینمتون",
    img: Image3,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialItems.length - 1
          ? 0
          : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const currentItem = testimonialItems[currentIndex];

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <h1 className="text-3xl font-bold">
            نظرات شما
          </h1>
        </div>

        {/* Testimonial */}
        <div 
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="max-w-[600px] mx-auto text-center bg-yellow-500 rounded-3xl p-6">

          <div
             className="flex flex-col justify-center items-center gap-4">

            <img
              className="w-[100px] h-[100px] rounded-full object-cover"
              src={currentItem.img}
              alt={currentItem.name}
            />

            <p className="text-white text-sm leading-7">
              {currentItem.Text}
            </p>

            <h2 className="text-white text-xl font-bold">
              {currentItem.name}
            </h2>

          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonialItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  currentIndex === index
                    ? "bg-gray-600"
                    : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonial;