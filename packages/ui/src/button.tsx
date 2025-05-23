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
      ? "w-fit rounded-md py-1 px-4 hover:cursor-pointer text-gray-300 border border-gray-400"
      : "relative py-1 px-4 hover:cursor-pointer text-sm rounded-md border border-black transition duration-200 w-fit",
      variant === "primary" && "bg-white border border-gray-400 shadow-inner shadow-gray-300 hover:bg-gray-950 hover:border-gray-700 hover:shadow-gray-700 hover:text-gray-300 text-gray-800",
      variant === "secondary" && "px-1 py-1 bg-white text-black hover:shadow-none hover:bg-gray-300 ",
    )}
    >
      {children}
    </button>
  );
};
