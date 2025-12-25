import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white";
  const variantStyles =
    variant === "primary"
      ? "bg-pink-500 text-white shadow-lg shadow-pink-500/20 hover:bg-pink-400"
      : "bg-white/60 text-zinc-700 hover:text-zinc-900";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    />
  );
}
