import React from 'react';

const Input = ({ label, type = 'text', value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-800 mb-1 font-medium">
        {label}
      </label>      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 bg-white border rounded-md transition-colors
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
          ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'}`}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;
