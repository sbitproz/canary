import { Image } from "antd";
import {
  SignSwapContainer,
  SignSwapContent,
  SignSwapTop,
} from "./Panel.styles";
import { spacings } from "@/styles/spacings";
import { ReactNode } from "react";

interface PanelProps {
  topSection: ReactNode;
  bottomSection: ReactNode;
}

export const Panel = ({ topSection, bottomSection }: PanelProps) => {
  return (
    <SignSwapContainer data-testid="sign-swap">
      <SignSwapTop data-testid="sign-swap-top">
        <Image
          src="canary.svg"
          width={40}
          alt="canary-protocol"
          wrapperStyle={{ marginBottom: spacings.S7 }}
        />
        {topSection}
      </SignSwapTop>
      <SignSwapContent>{bottomSection}</SignSwapContent>
    </SignSwapContainer>
  );
};
