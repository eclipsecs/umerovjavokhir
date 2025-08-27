"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };

  if (!mounted) {
    return (
      <button className="px-3 py-2 rounded-md border bg-gray-200 dark:bg-gray-800 dark:text-white">
        Loading...
      </button>
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="px-3 py-2 rounded-md border bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}