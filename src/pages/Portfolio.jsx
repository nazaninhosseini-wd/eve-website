import { useEffect, useState } from "react";
import Img1 from "../assets/img/eve-01.jpg"
import Img2 from "../assets/img/eve-02.jpg"
import Img3 from "../assets/img/eve-03.jpg"
import Img4 from "../assets/img/eve-04.jpg"
import Img5 from "../assets/img/eve-05.jpg"
import Img6 from "../assets/img/eve-06.jpg"

const portfolioImages = [
  {
    id: 1,
    src: Img1,
    alt: "Eve Fashion - Portfolio 1",
  },
  {
    id: 2,
    src: Img2,
    alt: "Eve Fashion - Portfolio 2",
  },
  {
    id: 3,
    src: Img3,
    alt: "Eve Fashion - Portfolio 3",
  },
  {
    id: 4,
    src: Img4,
    alt: "Eve Fashion - Portfolio 4",
  },
  {
    id: 5,
    src: Img5,
    alt: "Eve Fashion - Portfolio 5",
  },
  {
    id: 6,
    src: Img6,
    alt: "Eve Fashion - Portfolio 6",
  },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main dir="rtl" className="bg-white">

      {/* Intro */}
      <section className="container mx-auto px-4 pb-16 pt-20 md:pt-28">
        <div
          data-aos="fade-up"
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            نمونه کارها
          </h1>

          <p className="text-base leading-9 text-gray-500 md:text-lg">
            برند ایو با چندین سال سابقه در زمینه طراحی لباس و استایلینگ،
            مسیر خود را با خلق ایده‌های تازه، طراحی‌های منحصربه‌فرد و
            توجه به جزئیات ادامه داده است.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-4 pb-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {portfolioImages.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-square overflow-hidden rounded-2xl focus:outline-none"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
            </button>
          ))}

        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 text-4xl leading-none text-white transition hover:opacity-60"
            aria-label="بستن"
          >
            ×
          </button>

          {/* Large image */}
          <div
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}

    </main>
  );
};

export default Portfolio;