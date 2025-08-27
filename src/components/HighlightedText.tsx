import { ReactNode } from "react";

interface HighlightedTextProps {
  children: ReactNode;
  type?: "box" | "underline";
  color?: "blue" | "green" | "red" | "yellow";
}

export default function HighlightedText({ 
  children, 
  type = "box",
  color = "blue"
}: HighlightedTextProps) {
  
  const typeClasses = {
    box: "bg-yellow-200 dark:bg-yellow-600 px-1",
    underline: "underline"
  };

  const colorClasses = {
    blue: "text-blue-600 dark:text-blue-400",
    green: "text-green-600 dark:text-green-400", 
    red: "text-red-600 dark:text-red-400",
    yellow: "text-yellow-600 dark:text-yellow-400"
  };

  return (
    <span className={`font-bold ${typeClasses[type]} ${colorClasses[color]}`}>
      {children}
    </span>
  );
}