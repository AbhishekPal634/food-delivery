import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const { theme } = useTheme();

  // Set page title
  useEffect(() => {
    document.title = "Your Cart | FoodDelivery";
  }, []);

  return (
    <Layout>
      <div className="mb-8">
        <h1
          className={`text-3xl font-bold mb-2 ${
            theme === "dark" ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Your Cart
        </h1>
        <p
          className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
        >
          Review your items and proceed to checkout
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div
          className={`text-center py-12 px-4 rounded-lg my-8 ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-50"
          }`}
        >
          <p
            className={`text-lg mb-4 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Your cart is empty
          </p>
          <p
            className={`mb-6 ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Add items from our menu to get started with your order.
          </p>
          <Link to="/menu">
            <Button>Browse Menu</Button>
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Items List */}
          <div className="space-y-4 mb-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className={`flex justify-between items-center p-4 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3
                      className={`font-medium ${
                        theme === "dark" ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      {item.name}
                    </h3>
                    <p className="text-orange-500 font-bold">₹{item.price}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  {/* Quantity Controls */}
                  <div className="flex items-center mr-4">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className={`px-3 py-1 rounded-l-md hover:bg-gray-300 active:bg-gray-400 transition-colors ${
                        theme === "dark"
                          ? "bg-gray-700 hover:bg-gray-600"
                          : "bg-gray-200"
                      }`}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      -
                    </button>
                    <span
                      className={`px-3 py-1 ${
                        theme === "dark"
                          ? "bg-gray-600 text-gray-200"
                          : "bg-white text-gray-800"
                      }`}
                      aria-label={`Quantity: ${item.quantity}`}
                    >
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className={`px-3 py-1 rounded-r-md hover:bg-gray-300 active:bg-gray-400 transition-colors ${
                        theme === "dark"
                          ? "bg-gray-700 hover:bg-gray-600"
                          : "bg-gray-200"
                      }`}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className={`hover:underline active:text-red-600 transition-colors ${
                      theme === "dark"
                        ? "text-gray-400 hover:text-red-400"
                        : "text-gray-500 hover:text-red-500"
                    }`}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div
            className={`p-4 rounded-lg mb-6 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h2
              className={`text-xl font-semibold mb-4 ${
                theme === "dark" ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Order Summary
            </h2>
            <div className="flex justify-between py-2">
              <span
                className={theme === "dark" ? "text-gray-300" : "text-gray-600"}
              >
                Subtotal
              </span>
              <span
                className={`font-semibold ${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              >
                ₹{getCartTotal()}
              </span>
            </div>
            <div
              className={`flex justify-between py-2 mt-2 pt-2 ${
                theme === "dark"
                  ? "border-t border-gray-700"
                  : "border-t border-gray-200"
              }`}
            >
              <span
                className={`font-semibold ${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Total
              </span>
              <span className="font-bold text-orange-500">
                ₹{getCartTotal()}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center">
            <Link
              to="/menu"
              className={`hover:underline transition-colors ${
                theme === "dark"
                  ? "text-teal-500 hover:text-teal-400"
                  : "text-teal-600 hover:text-teal-500"
              }`}
            >
              ← Back to Menu
            </Link>
            <Link to="/checkout">
              <Button>Checkout</Button>
            </Link>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Cart;
