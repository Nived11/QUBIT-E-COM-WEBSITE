import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";
import { products } from "../datas/DummyProducts";

const ProductList = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="container mx-auto py-6 px-2 sm:px-4">
      {/* Header with Filter Button */}
      <div className="flex justify-between items-center mb-8 px-2 sm:px-0">
        <h1 className="text-lg sm:text-2xl font-bold text-blue-800">Latest Products</h1>
        
        <button 
          className="flex items-center gap-1 sm:gap-2 bg-white border border-blue-700 text-blue-600 px-2 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-blue-50 transition cursor-pointer shadow-md text-xs sm:text-base"
          onClick={() => setShowFilter(!showFilter)}>
          <FiFilter className="text-sm sm:text-lg text-blue-600" />
          <span className="hidden sm:inline">Filter</span>
          <span className="sm:hidden">Filter</span>
        </button>
      </div>

      {/* Product Grid - Responsive with smaller mobile cards */}
      <div className="h-auto w-full py-4">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-3">
          {products.map((product) => (
            <div
              key={product.id} 
              className="product-card bg-white rounded-md sm:rounded-lg shadow-md sm:shadow-lg cursor-pointer hover:shadow-xl transition-shadow flex flex-col">
              {/* Fixed height image container - responsive and compact on mobile */}
              <div className="h-24 sm:h-40 md:h-48 overflow-hidden flex items-center justify-center py-1 sm:py-4 bg-white rounded-t-md sm:rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-contain h-full w-full transform transition-transform duration-300 ease-in-out hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/200x200?text=No+Image';
                  }}
                />
              </div>
              <div className="p-1.5 sm:p-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-0.5 sm:mb-1">
                  <h3 className="text-[10px] sm:text-sm font-semibold text-gray-800 line-clamp-1 mb-0.5 sm:mb-0">{product.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-[8px] sm:text-xs font-medium px-1 sm:px-1.5 py-0.5 rounded whitespace-nowrap self-start">
                    {product.category}
                  </span>
                </div>
                <div className="mb-0.5 sm:mb-1 flex items-center">
                  <span className="text-[8px] sm:text-xs text-gray-600">{product.brand}</span>
                </div>
                <div className="price-display flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-0.5 sm:gap-1">
                  <span className="text-[10px] sm:text-sm font-bold text-gray-900">₹{product.price}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[8px] sm:text-xs original-price text-gray-500 line-through">₹{product.originalPrice}</span>
                    <span className="text-[8px] sm:text-xs discount-badge text-green-600">{product.discount}% OFF</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* See More Container with Animated Arrow and Glossy Effect */}
      <div className="flex justify-end mt-5 bg-gradient-to-r from-[#140b5b] to-[#102362] rounded-bl-full rounded-br-full relative overflow-hidden mx-2 sm:mx-0">
        {/* Glossy overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer"></div>
        
        <Link
          to="/products"
          className="pr-3 sm:pr-5 py-1 text-white font-semibold transition cursor-pointer flex items-center gap-1 sm:gap-2 relative z-10 group text-xs sm:text-base"
        >
          <span>See More</span>
          <span className="inline-flex gap-0.5 animate-arrowSlide">
            <span className="inline-block transform transition-transform group-hover:translate-x-1">&gt;</span>
            <span className="inline-block transform transition-transform group-hover:translate-x-1 animation-delay-75">&gt;</span>
          </span>
        </Link>
      </div>

     
    </div>
  );
};

export default ProductList;