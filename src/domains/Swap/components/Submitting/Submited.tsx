import { Typography } from "antd";
import { SignSwapActions, TopSub } from "./Submited.styles";
import { LargeButton } from "@/common/components/Button/Button.styles";
import { Panel } from "@/common/components/Panel/Panel";

interface SubmitProps {
  onClickProgress: () => void;
}

export const Submit = ({ onClickProgress }: SubmitProps) => {
  return (
    <Panel
      topSection={<TopSub>Swap Complete</TopSub>}
      bottomSection={
        <>
          <div style={{ marginBottom: 50 }}>
            <Typography.Title level={3}>Order Submitted</Typography.Title>
            <Typography.Title level={4}>
              View on Explorer [some icon]
            </Typography.Title>
          </div>
          <SignSwapActions>
            <LargeButton type="primary" onClick={onClickProgress}>
              Make another Swap
            </LargeButton>
          </SignSwapActions>
        </>
      }
    />
  );
};
