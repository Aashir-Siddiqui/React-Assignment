import React from 'react';

interface ButtonProps {
  colorName: string;
  colorValue: string;
  onClick: (color: string) => void;
}

const Button: React.FC<ButtonProps> = ({ colorName, colorValue, onClick }) => {
  return (
    <button
      className="bg-gray-400 text-black rounded-full px-5 py-2 hover:bg-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
      onClick={() => onClick(colorValue)}
      aria-label={`Change background to ${colorName}`}
      title={`Change background to ${colorName}`}
    >
      {colorName}
    </button>
  );
};

export default Button;