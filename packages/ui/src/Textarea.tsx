import clsx from "clsx";

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  variant?: "primary" | "secondary" | "tertiary";
}
export function Textarea({ label, error, variant = "primary", className, ...props }: InputProps) {
    return (
      <div className="flex flex-col w-full gap-1">
        {label && <label className="text-sm font-medium">{label}</label>}
        <textarea
          className={clsx(
            "py-1 px-2 rounded-md border-2 text-sm transition-all duration-200 ",
            variant === "primary" && " border-gray-500 focus:outline-1 border border-1 focus:outline-gray-300 focus:ring-offset-0",
            variant === "secondary" && "border-gray-500 focus:outline-0 border border-1 focus:ring-offset-0",
            variant === "tertiary" && "resize-none border-0 bg-transparent focus:outline-none focus:ring-offset-0 h-auto",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="text-red-500 text-xs">{error}</p>}
      </div>
    );
  }
  