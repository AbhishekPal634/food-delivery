import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useTheme } from "../context/ThemeContext";
import categories from "../data/categories";
import foodItems from "../data/foodItems";

const Home = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  // Filter featured items from foodItems data
  const featuredItems = foodItems.filter((item) => item.featured);

  return (
    <Layout>      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          {/* Overlay gradient for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
          
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=500&q=80"
            alt="Delicious Food"
            className="w-full h-[450px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
          />
          
          <div className="absolute inset-0 flex items-center z-20">
            <div className="max-w-md ml-8 md:ml-16 p-6 md:p-8">
              <h1
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${
                  theme === "dark" ? "text-white" : "text-white"
                } drop-shadow-md`}
              >
                Delicious Food Delivered to Your Door
              </h1>
              <p className="text-gray-100 mb-6 text-lg md:text-xl max-w-sm drop-shadow-md">
                Fresh ingredients, authentic flavors, delivered right to your doorstep.
              </p>
              <div className="flex space-x-4">
                <Button 
                  onClick={() => navigate("/menu")}
                  className="px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                >
                  Order Now
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => navigate("/menu")}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 px-6 py-3 text-lg text-white shadow-lg"
                >
                  View Menu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="mb-12">
        <h2
          className={`text-2xl font-semibold mb-4 ${
            theme === "dark" ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Categories
        </h2>
        <div className="flex overflow-x-auto pb-2 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`flex flex-col items-center justify-center p-4 rounded-lg min-w-[100px] ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() =>
                navigate("/menu", {
                  state: { category: category.name.toLowerCase() },
                })
              }
              aria-label={`Browse ${category.name} category`}
            >
              <span className="text-2xl mb-2">{category.emoji}</span>
              <span
                className={theme === "dark" ? "text-gray-200" : "text-gray-800"}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </section>
      {/* Featured Items Section */}
      <section className="mb-12">
        <h2
          className={`text-2xl font-semibold mb-4 ${
            theme === "dark" ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Featured Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="secondary" onClick={() => navigate("/menu")}>
            View Full Menu
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
