import React from 'react'

const Service = () => {
  return (
    <div className="min-h-[70vh] bg-neutral text-gray-300 flex items-center justify-center px-6 py-16">
    <div className="max-w-4xl text-center">
      <h1 className="text-3xl font-bold text-white mb-6">Our <span className="text-primary">Services</span></h1>
      <p className="text-base mb-6">
        At <span className="text-primary font-semibold">Korean Cravings</span>, we provide top-notch services to make your 
         experience smooth and enjoyable.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Service 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-white mb-2">Fast Delivery</h2>
          <p className="text-gray-400 text-sm">
            Get your food delivered quickly and securely.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-white mb-2">Authentic Products</h2>
          <p className="text-gray-400 text-sm">
            We guarantee 100% original sneakers from top brands.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-white mb-2">24/7 Support</h2>
          <p className="text-gray-400 text-sm">
            Need help? Our team is always here to assist you.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <button className="btn btn-primary px-6">Explore More</button>
      </div>
    </div>
  </div>
  )
}

export default Service