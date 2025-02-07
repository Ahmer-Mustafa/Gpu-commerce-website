import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
