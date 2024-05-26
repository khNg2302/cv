import { FC, ReactNode } from "react";
import { FlexLayout, FlexLayoutI } from "../FlexLayout";

interface FixedCompI extends FlexLayoutI {}

export const FixedComp: FC<FixedCompI> = ({ children, styleClassNames }) => {
  return (
    <FlexLayout
      styleClassNames={`fixed max-w-[1240px] px-[10px] left-[50%] translate-x-[-50%] ${styleClassNames} `}
    >
      {children}
    </FlexLayout>
  );
};
