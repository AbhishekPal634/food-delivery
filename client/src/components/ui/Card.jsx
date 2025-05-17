import React from "react";
import Button from "./Button";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";

const Card = ({ item }) => {
  const { image, name, price, description } = item;
  const { addToCart } = useCart();
  const { theme } = useTheme();
  return (
    <div
      className={`rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all flex flex-col h-full ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <div className="relative h-40 mb-3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <h3
        className={`font-semibold text-lg ${
          theme === "dark" ? "text-gray-100" : "text-gray-800"
        }`}
      >
        {name}
      </h3>
      {description && (
        <p
          className={`text-sm mt-1 ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      )}
      <div className="flex justify-between items-center mt-auto pt-3">
        <p
          className={`font-bold ${
            theme === "dark" ? "text-orange-400" : "text-orange-500"
          }`}
        >
          ₹{price}
        </p>
        <Button variant="secondary" onClick={() => addToCart(item)}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default Card;
