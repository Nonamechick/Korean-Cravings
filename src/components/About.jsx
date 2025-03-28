import React from 'react'

const About = () => {
  return (
    <div className="min-h-[70vh] bg-neutral text-gray-300 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-white mb-6">About <span className="text-primary">2x2 Store</span></h1>
        <p className="text-base mb-4">
          Welcome to <span className="text-primary font-semibold">2x2 Store</span>, your ultimate destination for 
          iconic sneakers and stylish footwear. We believe shoes are more than just accessories—they define your 
          personality, elevate your confidence, and complete your journey.
        </p>

        <div className="flex justify-center gap-8 mt-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-sm">
            <h2 className="text-lg font-semibold text-white mb-2">Premium Quality</h2>
            <p className="text-gray-400">
              We curate the finest sneakers, ensuring every pair meets top-tier comfort, durability, and style.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-sm">
            <h2 className="text-lg font-semibold text-white mb-2">Exclusive Collections</h2>
            <p className="text-gray-400">
              Explore our exclusive selections, featuring limited-edition releases and timeless classics.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <button className="btn btn-primary px-6">Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default About