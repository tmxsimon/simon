import { useEffect, useState } from "react";
import { useTheme } from "../contexts/themeProvider";
import i18n from "../lib/i18n";
import { switchLanguage } from "../utils/switchLanguage";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";

const Navbar = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [lng, setLng] = useState(i18n.language);

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const switchMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  useEffect(() => {
    const rootElements = [document.body, document.documentElement];

    if (isMenuOpened) {
      rootElements.forEach((element) =>
        element.classList.add("overflow-y-hidden"),
      );
    } else {
      rootElements.forEach((element) =>
        element.classList.remove("overflow-y-hidden"),
      );
    }

    return () => {
      rootElements.forEach((element) =>
        element.classList.remove("overflow-y-hidden"),
      );
    };
  }, [isMenuOpened]);

  const links = [
    { name: t("navbar.aboutMe"), link: "#about-me" },
    { name: t("navbar.skills"), link: "#skills" },
    { name: t("navbar.projects"), link: "#recent-projects" },
    { name: t("navbar.experience"), link: "#experience" },
    { name: t("navbar.contact"), link: "#contact" },
  ];

  return (
    <nav className="h-navbar h-22 backdrop-blur-xs w-full flex items-center justify-center z-100">
      <div className="flex h-full items-center justify-between max-w-screen-width w-full px-base text-lg">
        <button
          onClick={switchMenu}
          className="md:hidden z-100 hover:cursor-pointer"
        >
          <Icon name={isMenuOpened ? "x" : "menu"} className="size-5" />
        </button>
        {/* desktop menu */}
        <div className="hidden md:flex flex-col md:flex-row items-center gap-base-lg">
          {links.map((link, index) => (
            <a key={index} href={link.link} className="hover:underline">
              {link.name}
            </a>
          ))}
        </div>
        {/* mobile menu */}
        {isMenuOpened && (
          <div className="md:hidden bg-black flex flex-col justify-center items-center backdrop-blur-base absolute inset-0 w-screen h-screen space-y-base">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                onClick={switchMenu}
                className="text-2xl"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
        <div className="flex items-center gap-base-lg ">
          <button
            onClick={() => switchLanguage(setLng)}
            className="hover:underline cursor-pointer"
          >
            {lng}
          </button>
          <button
            onClick={toggleTheme}
            className="hover:underline cursor-pointer"
          >
            <Icon name={theme === "dark" ? "moon" : "sun"} className="size-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
