import { Button } from "@/components/Button";
import { FlexLayout } from "@/components/FlexLayout";
import { FixedComp } from "@/components/commons/FixedComp";
import Image from "next/image";

export const HomeHeader = () => {
  return (
    <FixedComp styleClassNames="justify-between py-1 top-0 lg:px-0">
      <Image src="/logo.png" alt="logo" width={30} height={30} />
      <Button>Hire me</Button>
    </FixedComp>
  );
};
