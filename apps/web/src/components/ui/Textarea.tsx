import * as React from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`w-full resize-none rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-200 ${className}`}
      {...props}
    />
  );
}
