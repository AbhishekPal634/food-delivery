import React from 'react';

const Button = ({ children, onClick, variant = 'primary', type = 'button', 'aria-label': ariaLabel }) => {
  // Define styles based on variant
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors';
  
  const variantStyles = {
    primary: 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus:ring-2 focus:ring-orange-300 text-white',
    secondary: 'bg-teal-400 hover:bg-teal-500 active:bg-teal-600 focus:ring-2 focus:ring-teal-200 text-white',
  };

  return (
    <button
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variantStyles[variant]} cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
