import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = ( { searchTerm, addToCart  } ) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const SHEET_ID = import.meta.env.VITE_SHEET_ID || ''; // Use .env file, e.g., VITE_SHEET_ID=your_sheet_id
  const API_KEY = import.meta.env.VITE_API_KEY || '';   // Use .env file, e.g., VITE_API_KEY=your_api_key
  const RANGE = 'Sheet1!A2:E'; // Adjust range based on your sheet

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        const rows = response.data.values || [];
        const productData = rows.map(row => ({
          category: row[0] || 'Uncategorized',     // Column A
          name: row[1] || 'Unnamed Product',       // Column B
          description: row[2] || 'No description', // Column C
          imageUrl: row[3] || 'https://via.placeholder.com/150', // Column D, fallback image
          price: row[4] || 'N/A',                  // Column E
        }));
        setProducts(productData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Empty deps since SHEET_ID, API_KEY, RANGE are static

  // Define main categories and their sub-categories
  const categoryMapping = {
    Mains: ['КИМПАБ / 김밥 🍣', 'ГОРЯЧИЕ БЛЮДА 🍽️', '', 'ФРАЙ ЧИККИН / 치킨 🍗', 'ЧИККИНКАС, БИФКАС / 치킨까스, 비프까스 🍗', 'Хотдог / 핫도그', 'СЭНДВИЧИ / 샌드위치 🥪', 'ГАМБУРГЕРЫ / 햄버거'],
    Soups: ['РАМЁН 라면 🍜', 'ВОК и ПАСТЫ 🍙🍣🍱🥢', 'КУКСУ / 국수 🍜', 'Корейские супы 🍲'],
    Drinks: ['ЧАЙ 차 (티포트 1L) 🍵', 'КОФЕ / 커피 ☕', 'НАПИТКИ в СТАКАНЕ 0,5л. / 음료 🍹', 'НАПИТКИ БУТИЛИРОВАННЫЕ / 음료수 🥤'],
    Sauces: ['СОУСЫ 🌶️'],
  };

  // Group products by main category and sub-category
  const groupedByMainCategory = filteredProducts.reduce((acc, product) => {
    const mainCategory = Object.keys(categoryMapping).find(main =>
      categoryMapping[main].includes(product.category)
    ) || 'Other'; // Fallback for unmapped categories
    if (!acc[mainCategory]) {
      acc[mainCategory] = {};
    }
    if (!acc[mainCategory][product.category]) {
      acc[mainCategory][product.category] = [];
    }
    acc[mainCategory][product.category].push(product);
    return acc;
  }, {});

  // Loading state UI
  if (loading) {
    return (
      <div className="text-center p-4">
        <span className="loading loading-spinner loading-lg"></span>
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {Object.keys(groupedByMainCategory).map((mainCategory, index) => (
        <details key={index} className="w-full mb-4">
          <summary className="card-title p-4 cursor-pointer text-center bg-base-200 text-xl font-bold">
            {mainCategory === 'Mains' ? '🍔' : mainCategory === 'Soups' ? '🍜' : mainCategory === 'Drinks' ? '🥤' : '🫙'} {mainCategory}
          </summary>
          <div className="p-4 bg-base-200">
            {Object.keys(groupedByMainCategory[mainCategory]).map((subCategory, subIndex) => (
              <details key={subIndex} className="w-full mb-2">
                <summary className="card-title p-3 cursor-pointer text-center bg-base-300">
                  {subCategory === 'Sneakers' ? '🔴' : '🟢'} {subCategory}
                </summary>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-base-300">
                  {groupedByMainCategory[mainCategory][subCategory].map((product, idx) => (
                    <div key={idx} className="card bg-base-300 w-full shadow-sm">
                      <figure>
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="h-48 w-full object-cover"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{product.name}</h2>
                        <p>{product.description}</p>
                        <p className="text-lg font-semibold text-primary">{product.price}</p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary"
                          onClick={() => addToCart(product)}
                          >Buy Now</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
};

export default Cards;