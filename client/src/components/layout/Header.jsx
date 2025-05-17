import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { theme, toggleTheme } = useTheme();

  // Calculate total quantity of items in cart
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <header
      className={`${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white shadow-sm"
      } py-4 px-6 sticky top-0 z-50`}
    >
      <div className="flex justify-between items-center">
        {" "}
        {/* Logo */}
        <Link
          to="/"
          className={`${
            theme === "dark" ? "text-orange-400" : "text-orange-500"
          } font-bold text-xl hover:text-orange-600 transition-colors`}
        >
          FoodXpress
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {" "}
          <Link
            to="/"
            className={`${
              theme === "dark"
                ? "text-gray-200 hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400"
                : "text-gray-800 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500"
            } pb-1 transition-colors`}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={`${
              theme === "dark"
                ? "text-gray-200 hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400"
                : "text-gray-800 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500"
            } pb-1 transition-colors`}
          >
            Menu
          </Link>
          {/* Cart Icon */}{" "}
          <Link
            to="/cart"
            className="relative hover:opacity-80 transition-opacity"
            aria-label={`View Cart (${cartItemCount} items)`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${
                theme === "dark"
                  ? "text-gray-200 hover:text-orange-400"
                  : "text-gray-800 hover:text-orange-500"
              } transition-colors`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartItemCount > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                aria-hidden="true"
              >
                {cartItemCount}
              </span>
            )}
          </Link>{" "}
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`${
              theme === "dark"
                ? "text-gray-200 hover:text-yellow-300"
                : "text-gray-800 hover:text-amber-500"
            } transition-colors p-1`}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              // Sun icon for dark mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              // Moon icon for light mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </nav>
        {/* Mobile Menu Button */}{" "}
        <div className="flex items-center md:hidden">
          {/* Theme Toggle Button (Mobile) */}
          <button
            onClick={toggleTheme}
            className={`${
              theme === "dark"
                ? "text-gray-200 hover:text-yellow-300"
                : "text-gray-800 hover:text-amber-500"
            } transition-colors p-1 mr-2`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              // Sun icon for dark mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              // Moon icon for light mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
          {/* Menu Toggle Button */}
          <button
            className={`${
              theme === "dark"
                ? "text-gray-200 hover:text-orange-400 active:bg-gray-700"
                : "text-gray-800 hover:text-orange-500 active:bg-gray-100"
            } p-1 rounded-md transition-colors`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          className={`mt-4 py-2 md:hidden flex flex-col space-y-2 ${
            theme === "dark" ? "bg-gray-800" : ""
          }`}
        >
          <Link
            to="/"
            className={`${
              theme === "dark"
                ? "text-gray-200 hover:text-orange-400 hover:bg-gray-700"
                : "text-gray-800 hover:text-orange-500 hover:bg-gray-100"
            } py-2 px-3 rounded-md transition-colors`}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={`${
              theme === "dark"
                ? "text-gray-200 hover:text-orange-400 hover:bg-gray-700"
                : "text-gray-800 hover:text-orange-500 hover:bg-gray-100"
            } py-2 px-3 rounded-md transition-colors`}
          >
            Menu
          </Link>
          <Link
            to="/cart"
            className={`${
              theme === "dark"
                ? "text-gray-200 hover:text-orange-400 hover:bg-gray-700"
                : "text-gray-800 hover:text-orange-500 hover:bg-gray-100"
            } py-2 px-3 rounded-md transition-colors`}
          >
            Cart ({cartItemCount})
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
