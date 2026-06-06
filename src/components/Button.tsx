import { buttonSizeMap } from "../constants/buttonSizeMap";

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "size"
> & {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  autoWidth?: boolean;
};

const Button = ({
  children,
  size = "medium",
  autoWidth = false,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={`bg-gray-neutral-300 hover:brightness-95 active:brightness-105 text-adaptive-white
        rounded cursor-pointer ${autoWidth ? "w-full" : "w-fit"} ${buttonSizeMap[size]}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
