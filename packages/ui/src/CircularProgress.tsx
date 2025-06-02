
import React from "react";

interface CircularProgressProps {
  size?: number; // diameter in pixels
  strokeWidth?: number;
  percentage: number; // 0 to 100
  color?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 30,
  strokeWidth = 3,
  percentage,
  color = "#fa3a5a", // Tailwind's blue-500
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          stroke="#e5e7eb" // Tailwind gray-200
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          
        />
      </svg>
      <span className="absolute text-xs">
        {percentage}
      </span>
    </div>
  );
};
