import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";
import { useCart } from "../context/CartContext";

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setCartItems } = useCart();

  // Set page title
  useEffect(() => {
    document.title = "Order Successful | FoodDelivery";
  }, []);

  // Generate a random 4-digit order number
  const orderNumber = Math.floor(1000 + Math.random() * 9000);

  // Get delivery address from location state or use a placeholder
  const deliveryAddress = location.state?.address || "123 Main St, Anytown";

  // Clear cart when returning to home
  const handleBackToHome = () => {
    setCartItems([]);
    navigate("/");
  };
  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
        <div className="text-center mb-6">
          <div className="text-green-500 text-6xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-500">Order #{orderNumber}</p>
        </div>

        <div className="border-t border-b border-gray-200 py-4 mb-6">
          <div className="mb-3">
            <p className="text-sm text-gray-500">Estimated Delivery Time</p>
            <p className="font-medium">30-45 minutes</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Delivery Address</p>
            <p className="font-medium">{deliveryAddress}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="secondary" onClick={handleBackToHome}>
            Back to Home
          </Button>
          <Button onClick={() => console.log("Track order clicked")}>
            Track Order
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
