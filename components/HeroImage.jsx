import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <div className="h-[700px] relative">
      <img
        src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=256&q=75"
        className="h-[750px] w-full object-cover"
      />

      <div className="absolute top-20 py-5 px-32 w-[50%]">
        <h1 className="text-[60px] font-bold mb-5">
          We are at the forefront of AI
        </h1>
        <p>
          From Conserving Wildlife to Automatically Generating Caricatures –{" "}
          <span className="font-bold">We Do It All</span>
        </p>
        <button className="bg-black text-white p-2 px-4 rounded-md mt-5 hover:bg-white hover:text-black hover:border-gray-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
