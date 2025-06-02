"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
}

export const Button = ({ children, className, variant = "primary", ...props }: ButtonProps) => {
  const isTertiary = variant === "tertiary";

  return (
    <button
    {...props} // Spread all additional button attributes (onClick, type, etc.)
    className={clsx(
      className, // Ensures user-provided styles take the highest priority
      isTertiary
      ? "w-fit rounded-md hover:bg-black/20 p-2  hover:cursor-pointer text-gray-300"
      : "relative py-1 px-4 hover:cursor-pointer text-sm rounded-md border border-black transition duration-200 w-fit",
      variant === "primary" && "bg-white py-2 shadow-gray-300 hover:bg-gray-300 hover:border-gray-700  text-gray-800",
      variant === "secondary" && "px-1 py-1 bg-black border border-gray-700 text-gray-200 hover:border-gray-200",
    )}
    >
      {children}
    </button>
  );
};
