import { FC, ReactNode } from "react";

export interface FlexLayoutI {
  children: ReactNode;
  styleClassNames?: string;
}

export const FlexLayout: FC<FlexLayoutI> = ({ children, styleClassNames }) => {
  return (
    <div className={`${styleClassNames ? styleClassNames : ""} flex w-full`}>
      {children}
    </div>
  );
};
