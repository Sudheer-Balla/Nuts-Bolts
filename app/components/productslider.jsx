"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Main functional component for displaying a product slider
export default function ProductSlider() {
  // Sample product data with random auto parts images
  const products = [
    {
      id: 1,
      name: "Engine Oil",
      description: "Premium quality engine oil for better performance.",
      imageUrl:
        "https://images.unsplash.com/photo-1643700973089-baa86a1ab9ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Brake Pads",
      description: "High-performance brake pads for enhanced safety.",
      imageUrl:
        "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Air Filter",
      description: "Efficient air filters to improve engine life.",
      imageUrl:
        "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Spark Plugs",
      description: "Reliable spark plugs for better ignition.",
      imageUrl:
        "https://images.unsplash.com/photo-1527383418406-f85a3b146499?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Settings for the react-slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="w-full mt-4 mb-4 relative rounded-lg">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="relative rounded-lg">
            <div
              className="flex w-full h-[300px] bg-gray-600  overflow-hidden   rounded-lg shadow-lg "
              style={{
                backgroundImage: `url(${product.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full md:w-1/2 p-4 flex flex-col justify-between bg-black bg-opacity-20 backdrop-blur-md  rounded-lg">
                <div>
                  <span className="bg-gray-600 text-white font-bold text-xs p-1 rounded-md absolute top-2 left-2">
                    🔧 Recommended
                  </span>
                  <h1 className="text-white text-2xl font-bold mt-6">
                    {product.name}
                  </h1>
                  <div className="text-gray-300 mt-2 max-h-[200px] overflow-y-auto custom-scrollbar rounded-lg">
                    {product.description}
                  </div>
                </div>
                <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4 self-start hover:bg-red-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
