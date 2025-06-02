// components/ui/separator.tsx
import React from "react";
import clsx from "clsx"

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

export function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={clsx(
        "shrink-0 bg-gray-500",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  );
}
