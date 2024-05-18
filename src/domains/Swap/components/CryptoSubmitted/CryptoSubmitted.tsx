import { Typography } from 'antd';
import { SignSwapActions, TopSub } from './CryptoSubmitted.styles';
import { LargeButton } from '@/common/components/Button/Button.styles';
import { Panel } from '@/common/components/Panel/Panel';
import { useCryptoSubmitted } from './useCryptoSubmitted';

export const CryptoSubmitted = () => {
  const { onMakeAnotherSwap } = useCryptoSubmitted();

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
            <LargeButton type="primary" onClick={onMakeAnotherSwap}>
              Make another Swap
            </LargeButton>
          </SignSwapActions>
        </>
      }
    />
  );
};
