"use client";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({ label, variant = "primary", className = "" }: ButtonProps) {
  const baseStyles =
    "px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200";
  const primaryStyles =
    "text-white bg-[#0a0a0a] shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#1a1a1a]";
  const secondaryStyles =
    "text-[#0a0a0a] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#fafafa] border-0";

  return (
    <button
      type="button"
      className={`${baseStyles} ${
        variant === "primary" ? primaryStyles : secondaryStyles
      } ${className}`}
    >
      {label}
    </button>
  );
}
