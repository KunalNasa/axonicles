import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./Tooltip"

interface tooltipInterface {
    content: string,
    children: React.ReactNode
}
export function AddTooltip({content, children} : tooltipInterface) {
  return (
    <TooltipProvider>
  <Tooltip>
    <TooltipTrigger>{children}</TooltipTrigger>
    <TooltipContent>
        {content}
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

  );
}
  