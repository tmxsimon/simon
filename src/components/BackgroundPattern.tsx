import { useTheme } from "../contexts/themeProvider";

const BackgroundPattern = () => {
  const { theme } = useTheme();

  return (
    <div
      className={
        theme === "dark"
          ? "pointer-events-none absolute inset-0 bg-[url('/simon/bg/bg-dark.svg')] opacity-3"
          : "pointer-events-none absolute inset-0 bg-[url('/simon/bg/bg-light.svg')] opacity-6"
      }
    />
  );
};

export default BackgroundPattern;
