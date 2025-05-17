import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal } = useCart();
  const { theme } = useTheme();

  // Set page title
  useEffect(() => {
    document.title = "Checkout | FoodDelivery";
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real app, you would submit the order to a backend here
      navigate("/success", { state: { address: formData.address } });
    }
  };
  return (
    <Layout>
      <div className="mb-6">
        <h1
          className={`text-3xl font-bold mb-2 ${
            theme === "dark" ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Checkout
        </h1>
        <Link
          to="/cart"
          className={`hover:underline transition-colors ${
            theme === "dark"
              ? "text-teal-500 hover:text-teal-400"
              : "text-teal-600 hover:text-teal-500"
          }`}
        >
          ← Back to Cart
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Delivery Form */}
        <div>
          <h2
            className={`text-xl font-semibold mb-4 ${
              theme === "dark" ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Delivery Information
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className={`block mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Name *
              </label>{" "}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md transition-colors
                  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
                  ${
                    theme === "dark"
                      ? "bg-gray-700 text-gray-200 border-gray-600 hover:border-gray-500"
                      : "border-gray-300 hover:border-gray-400"
                  }
                  ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : ""
                  }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className={`block mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Phone *
              </label>{" "}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md transition-colors
                  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
                  ${
                    theme === "dark"
                      ? "bg-gray-700 text-gray-200 border-gray-600 hover:border-gray-500"
                      : "border-gray-300 hover:border-gray-400"
                  }
                  ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : ""
                  }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className={`block mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Address *
              </label>{" "}
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md transition-colors
                  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
                  ${
                    theme === "dark"
                      ? "bg-gray-700 text-gray-200 border-gray-600 hover:border-gray-500"
                      : "border-gray-300 hover:border-gray-400"
                  }
                  ${
                    errors.address
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : ""
                  }`}
                rows="3"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>

            <div className="mb-6">
              <label
                className={`block mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Notes
              </label>{" "}
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md transition-colors
                  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
                  ${
                    theme === "dark"
                      ? "bg-gray-700 text-gray-200 border-gray-600 hover:border-gray-500"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                rows="2"
                placeholder="Special instructions, delivery notes, etc."
              />
            </div>

            <Button type="submit">Place Order</Button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2
            className={`text-xl font-semibold mb-4 ${
              theme === "dark" ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Order Summary
          </h2>
          <div
            className={`p-4 rounded-lg ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            {" "}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className={`flex justify-between py-2 border-b last:border-0 ${
                  theme === "dark" ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <div>
                  <span
                    className={`font-medium ${
                      theme === "dark" ? "text-gray-200" : ""
                    }`}
                  >
                    {item.name}
                  </span>
                  <span
                    className={`ml-2 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    x{item.quantity}
                  </span>{" "}
                </div>
                <span className={theme === "dark" ? "text-gray-200" : ""}>
                  ₹{(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <div
              className={`flex justify-between mt-4 pt-4 font-bold ${
                theme === "dark"
                  ? "border-t border-gray-700"
                  : "border-t border-gray-300"
              }`}
            >
              <span className={theme === "dark" ? "text-gray-200" : ""}>
                Total
              </span>
              <span className="text-orange-500">
                ₹{getCartTotal().toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
