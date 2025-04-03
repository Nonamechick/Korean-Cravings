import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Cards = () => {
  const [products, setProducts] = useState([]);
  const SHEET_ID = '18xcXDm0hLSW6_h4Ksa4DbYxdVtF47IrF_gsOBSj3ngc'; // e.g., from URL: https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit https://docs.google.com/spreadsheets/d/18xcXDm0hLSW6_h4Ksa4DbYxdVtF47IrF_gsOBSj3ngc/edit?usp=sharing
  const API_KEY = 'AIzaSyC9VZIZ2hpS13gNOaIZTvhcgP5CQSGn4NY';
  const RANGE = 'Sheet1!A2:E'; // Adjust range based on your sheet


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        const rows = response.data.values;
        if (!rows || rows.length === 0) {
          setProducts([]);
          return;
        }
        const productData = rows.map(row => ({
          category: row[0],    // Column A
          name: row[1],        // Column B
          description: row[2], // Column C
          imageUrl: row[3],    // Column D
          price: row[4],       // Column E
        }));
        setProducts(productData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Define main categories and their sub-categories
  const categoryMapping = {
    Dry_Dishes: ['КИМПАБ / 김밥 🍣', 'ГОРЯЧИЕ БЛЮДА 🍽️', '', 'ФРАЙ ЧИККИН / 치킨 🍗', 'ЧИККИНКАС, БИФКАС / 치킨까스, 비프까스 🍗', 'Хотдог / 핫도그', 'СЭНДВИЧИ / 샌드위치 🥪', 'ГАМБУРГЕРЫ / 햄버거'],
    Soups: ['РАМЁН 라면 🍜', 'ВОК и ПАСТЫ 🍙🍣🍱🥢', 'КУКСУ / 국수 🍜', 'Корейские супы 🍲'],
    Drinks: ['ЧАЙ 차 (티포트 1L) 🍵', 'КОФЕ / 커피 ☕', 'НАПИТКИ в СТАКАНЕ 0,5л. / 음료 🍹', 'НАПИТКИ БУТИЛИРОВАННЫЕ / 음료수 🥤'],
    Sauces: ['СОУСЫ 🌶️'],
  };

  // Group products by main category and sub-category
  const groupedByMainCategory = products.reduce((acc, product) => {
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

  return (
    <div>
      {Object.keys(groupedByMainCategory).map((mainCategory, index) => (
        <details key={index} className="w-full mb-4">
          <summary className="card-title p-4 cursor-pointer text-center bg-base-200 text-xl font-bold">
            {mainCategory === 'Dry_Dishes' ? '🍔' : mainCategory === 'Soups' ? '🍜' : mainCategory === 'Drinks' ? '🥤' : '🫙'} {mainCategory}
          </summary>
          <div className="p-4 bg-base-200">
            {Object.keys(groupedByMainCategory[mainCategory]).map((subCategory, subIndex) => (
              <details key={subIndex} className="w-full mb-2">
                <summary className="card-title p-3 cursor-pointer text-center bg-base-300">
                  {subCategory === 'Sneakers' ? '🔴' : '🟢'} Show {subCategory}
                </summary>
                <div className="flex flex-wrap gap-6 justify-center p-4 bg-base-300">
                  {groupedByMainCategory[mainCategory][subCategory].map((product, idx) => (
                    <div key={idx} className="card bg-base-300 w-96 shadow-sm">
                      <figure>
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{product.name}</h2>
                        <p>{product.description}</p>
                        <p className="text-lg font-semibold text-primary">{product.price}</p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary">Buy Now</button>
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
  )
}

export default Cards