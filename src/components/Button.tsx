import { colors } from "@/consts/colors";
import { FC, ReactNode } from "react";

interface ButtonI {
  children: ReactNode;
  styleClassNames?: string;
  variant?: string;
  color?: string;
  onClick?: () => void;
}

export const Button: FC<ButtonI> = ({
  children,
  variant,
  color,
  styleClassNames,
  onClick,
}) => {
  const variantStyles = () => {
    switch (variant) {
      case "":
        break;
      default:
        return "text-[white] font-medium";
    }
  };

  return (
    <button
      className={`uppercase ${styleClassNames} bg-[${
        !color ? colors.primary : colors[color]
      }] ${variantStyles()} flex items-center justify-center px-[10px] py-[5px] rounded-[5px] h-full`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
