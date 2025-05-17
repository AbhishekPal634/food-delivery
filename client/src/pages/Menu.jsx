import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Card from "../components/ui/Card";
import foodItems from "../data/foodItems";
import categories from "../data/categories";
import { useTheme } from "../context/ThemeContext";

const Menu = () => {
  const location = useLocation();
  const { theme } = useTheme();

  // Set page title
  useEffect(() => {
    document.title = "Menu | FoodDelivery";
  }, []);

  // Available categories with 'all' option at the beginning
  const categoryOptions = [
    "all",
    ...categories.map((category) => category.name.toLowerCase()),
  ];

  // Check if a category was passed in location state
  const categoryFromNav = location.state?.category || "all";

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState(categoryFromNav);

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === "all"
      ? foodItems
      : foodItems.filter((item) => item.category === selectedCategory);
  return (
    <Layout>
      <div className="mb-8">
        <h1
          className={`text-3xl font-bold mb-2 ${
            theme === "dark" ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Our Menu
        </h1>
        <p
          className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
        >
          Explore our delicious options made with fresh ingredients, ready to be
          delivered to your door.
        </p>
      </div>{" "}
      {/* Category Filters */}{" "}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categoryOptions.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              aria-label={`Filter by ${category} category`}
              className={`px-4 py-2 rounded-md capitalize transition-colors ${
                selectedCategory === category
                  ? "bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700"
                  : theme === "dark"
                  ? "bg-gray-700 text-gray-200 hover:bg-gray-600 active:bg-gray-500"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 active:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>{" "}
      {/* Food Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      {/* Show message if no items in category */}
      {filteredItems.length === 0 && (
        <div
          className={`text-center py-8 px-4 rounded-lg ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <p
            className={`mb-2 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            No items found in this category.
          </p>
          <p
            className={`${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Please try selecting a different category.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default Menu;
