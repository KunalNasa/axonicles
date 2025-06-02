"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import clsx from "clsx"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={clsx(
        "bg-red-50 relative h-[4px] w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-rose-500 h-full transition-all"
        style={{ width: `${value || 0}%` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
