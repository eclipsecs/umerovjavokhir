import React from "react";
import { RoughNotation } from "react-rough-notation";

interface HighlightedTextProps {
  children: React.ReactNode;
  type: "underline" | "box" | "highlight" | "circle" | "strike-through";
  color?: string;
}

export default function HighlightedText({
  children,
  type,
  color = "#0b26f5ff",
}: HighlightedTextProps) {
  return (
    <RoughNotation type={type} color={color} show>
      {children}
    </RoughNotation>
  );
}