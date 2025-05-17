import React from "react";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const year = new Date().getFullYear();
  const { theme } = useTheme();
  return (
    <footer
      className={`${
        theme === "dark"
          ? "bg-gray-800 text-gray-300"
          : "bg-gray-100 text-gray-500"
      } py-4 px-4 sm:px-6`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center text-sm max-w-6xl mx-auto">
        <div>© {year} FoodXpress. All rights reserved.</div>
        <div className="mt-2 md:mt-0">
          <a
            href="/about"
            className={`${
              theme === "dark"
                ? "hover:text-orange-400"
                : "hover:text-orange-500"
            } mr-4`}
          >
            About
          </a>
          <a
            href="/contact"
            className={`${
              theme === "dark"
                ? "hover:text-orange-400"
                : "hover:text-orange-500"
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
