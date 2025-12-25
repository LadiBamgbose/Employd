import * as React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-200 ${className}`}
      {...props}
    />
  );
}
