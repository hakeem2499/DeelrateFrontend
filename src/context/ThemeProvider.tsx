"use client";
import { createContext, useContext, useState, useEffect, useMemo, ReactNode } from "react";

const validThemes = ["light", "dark"] as const;
type Theme = typeof validThemes[number];

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

interface Props {
  children: ReactNode;
  defaultTheme?: Theme;
}

const isValidTheme = (value: string | null): value is Theme =>
  value !== null && validThemes.includes(value as Theme);

export const ThemeProvider: React.FC<Props> = ({ children, defaultTheme = "dark" }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const savedTheme = localStorage.getItem("theme");

    const handleChange = () => {
      const systemPrefersDark = mediaQuery.matches;
      const initialTheme = isValidTheme(savedTheme)
        ? savedTheme
        : systemPrefersDark
        ? "dark"
        : "light";

      setTheme(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
    };

    handleChange();
    setMounted(true);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

export { ThemeContext }; // For testing purposes