import { useState } from "react";

const images = [
  "https://i.pinimg.com/736x/a9/db/4a/a9db4a2588cb3b7a6776ab11a483a50a.jpg",
  "https://i.pinimg.com/736x/8a/13/43/8a1343f2a9a00798f48b7221db748634.jpg",
  "https://i.pinimg.com/736x/7b/fd/87/7bfd875e85fbbed980e9df59bcde8579.jpg",
  "https://i.pinimg.com/736x/3b/9c/3f/3b9c3f2d285ae3842bc52d2b0ba39a45.jpg",
  "https://i.pinimg.com/736x/fe/01/e7/fe01e72a932294541691af70a461906b.jpg",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-80">
      
      {/* Carousel Wrapper */}
      <div className="relative h-50 m-4 overflow-hidden rounded-lg md:mb-30">

        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="absolute block w-full h-full object-cover"
            />
          </div>
        ))}

      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
          ❮
        </span>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
          ❯
        </span>
      </button>
    </div>
  );
}