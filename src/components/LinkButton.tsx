import { buttonSizeMap } from "../constants/buttonSizeMap";

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  autoWidth?: boolean;
};

const LinkButton = ({
  children,
  size = "medium",
  autoWidth = false,
  ...linkProps
}: LinkButtonProps) => {
  return (
    <a
      className={`bg-gray-neutral-300 hover:brightness-95 active:brightness-105 text-adaptive-white
        rounded cursor-pointer ${autoWidth ? "w-full" : "w-fit"} ${buttonSizeMap[size]}`}
      {...linkProps}
    >
      {children}
    </a>
  );
};

export default LinkButton;
