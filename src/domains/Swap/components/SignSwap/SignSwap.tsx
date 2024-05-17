import { Image, Typography } from "antd";
import {
  SignSwapActions,
  SignSwapContainer,
  SignSwapContent,
  SignSwapSteps,
  SignSwapTop,
  TopSub,
} from "./SignSwap.styles";
import { spacings } from "@/styles/spacings";
import { LargeButton } from "@/common/components/Button/Button.styles";

const items = [
  {
    title: "Sign the order with your wallet",
    description: "(0x789C...61a5)",
  },
  {
    title: "The order is submitted and ready to be settled",
  },
];

interface SignSwapProps {
  onClickSign: () => void;
}

export const SignSwap = ({ onClickSign }: SignSwapProps) => {
  return (
    <SignSwapContainer data-testid="sign-swap">
      <SignSwapTop data-testid="sign-swap-top">
        <Image
          src="canary.svg"
          width={40}
          alt="canary-protocol"
          wrapperStyle={{ marginBottom: spacings.S7 }}
        />
        <TopSub>Swapping 1 ETH for 8.612456 DAI</TopSub>
      </SignSwapTop>
      <SignSwapContent>
        <div style={{ marginBottom: 50 }}>
          <Typography.Title level={3}>Almost there!</Typography.Title>
          <Typography.Title level={4}>Follow these steps:</Typography.Title>
        </div>
        <SignSwapSteps current={1} labelPlacement="vertical" items={items} />
        <SignSwapActions>
          <LargeButton type="primary" onClick={onClickSign}>
            Sign Swap Order
          </LargeButton>
        </SignSwapActions>
      </SignSwapContent>
    </SignSwapContainer>
  );
};
