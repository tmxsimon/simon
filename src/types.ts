import type icons from "./constants/icons";

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export type iconsType = keyof typeof icons;
