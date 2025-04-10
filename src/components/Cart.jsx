import React from 'react'

const Cart = ({ cartItems }) => {
  if (!cartItems || !cartItems.length) {
    return <p>Your cart is empty.</p>;
  }
  

  const totalSum = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^\d.-]/g, '')) || 0; // Remove non-numeric characters (like currency symbols)
    return sum + price;
  }, 0);

  return (
    <div className="p-4 text-white">
    <h2 className="text-3xl mb-4">Shopping Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      cartItems.map((item, idx) => (
        <div key={idx} className="bg-base-200 p-4 my-2 rounded-lg shadow">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="h-48 w-full object-cover"
          />
          <h3 className="text-xl font-bold">{item.name}</h3>
          <p className="text-primary font-semibold">{item.price}</p>
        </div>
      ))
    )}
    {/* Display the total sum */}
    {cartItems.length > 0 && (
        <div className="mt-4 text-xl font-semibold text-center">
          <p className='text-green-500 text-4xl font-bold'>Total: {totalSum.toFixed(2)} sum</p> {/* Display total with two decimal places */}
        </div>
      )}

     {/* QR Code Section for Payment */}
     {cartItems.length > 0 && (
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Pay with QR Code</h3>
          <div className="w-full max-w-xs mx-auto">
            {/* Placeholder for QR Code */}
            <img
              src="https://i.postimg.cc/q7NYDcLG/mon.jpg"
              alt="QR Code"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className="text-white mt-4">Scan the QR code to complete your payment.</p>
        </div>
      )}
  </div>
  );
};

export default Cart;