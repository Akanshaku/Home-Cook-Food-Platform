import React from "react";

const Menu = () => {
  const dishes = [
    { name: "Paneer Butter Masala", price: "₹220", image: "/images/paneer.jpg" },
    { name: "Veg Biryani", price: "₹180", image: "/images/biryani.jpg" },
    { name: "Pasta ", price: "₹200", image: "/images/pasta.jpg" },
    { id: 3, name: "Dal Tadka", price: "180", image: "/images/dal.jpg" },
    { id: 4, name: "Noodles",  price: "300", image: "/images/noodles.jpg" },
    { id: 5, name: "Masala Dosa", price: "120", image: "/images/dosa.jpg" },
    { id: 6, name: "Chole Bhature", image: "/images/chole.jpg", price: 150 },
    { id: 7, name: "Rajma Chawal", image: "/images/rajma.jpg", price: 160 },
    { id: 10, name: "Veg Manchurian", image: "/images/manchurian.jpg", price: 160 },
    { id: 12, name: "Pav Bhaji", image: "/images/pavbhaji.jpg", price: 140 },
  ];

  return (
    <div className="bg-orange-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">
        🍽️ Our Menu
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 hover:text-orange-500">
                {dish.name}
              </h3>
              <p className="text-gray-600 mt-2">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
