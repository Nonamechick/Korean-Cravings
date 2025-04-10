import React from 'react'

const Hero = () => {
  return (
<div
  className="relative h-[75vh] flex items-end"
  style={{
    backgroundImage:
      "url(https://i.postimg.cc/CKSCsnpL/pexels-philippedonn-1169754.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
  <div className="relative z-10 p-8 lg:p-16 text-white max-w-lg">
    <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold tracking-wide uppercase">
    Korean Cravings
    </h1>
    <p className="mb-6 text-sm lg:text-lg tracking-wide font-light">
    Welcome to Cafe , where the vibrant flavors of Korea come alive! Savor authentic dishes like spicy kimchi jjigae, sizzling bibimbap, and crispy Korean fried chicken, all crafted with fresh ingredients and a passion for tradition. 
    </p>
    <div className="flex gap-4">
      <button className="px-6 py-3 text-sm lg:text-base font-medium uppercase bg-white text-black rounded-full hover:bg-gray-300 transition">
        Dry Dishes  →
      </button>
      <button className="px-6 py-3 text-sm lg:text-base font-medium uppercase bg-white text-black rounded-full hover:bg-gray-300 transition">
        Soups →
      </button>
      <button className="px-6 py-3 text-sm lg:text-base font-medium uppercase bg-white text-black rounded-full hover:bg-gray-300 transition">
        Drinks →
      </button>
    </div>
  </div>
</div>


  )
}

export default Hero