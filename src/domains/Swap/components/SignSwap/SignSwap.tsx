import { Typography } from 'antd';
import { SignSwapActions, SignSwapSteps, TopSub } from './SignSwap.styles';
import { LargeButton } from '@/common/components/Button/Button.styles';
import { Panel } from '@/common/components/Panel/Panel';
import { useAppSelector } from '@/store/hooks';
import { selectSwapCryptoSelector } from '@/store/selectors/swap.selectors';

const items = [
  {
    title: 'Sign the order with your wallet',
    description: '(0x789C...61a5)',
  },
  {
    title: 'The order is submitted and ready to be settled',
  },
];

interface SignSwapProps {
  onClickSign: () => void;
}

export const SignSwap = ({ onClickSign }: SignSwapProps) => {
  const { cryptoFromValue, cryptoFrom, cryptoToValue, cryptoTo } =
    useAppSelector(selectSwapCryptoSelector);

  return (
    <Panel
      topSection={
        <TopSub>
          Swapping {cryptoFromValue} {cryptoFrom?.value} for {cryptoToValue}{' '}
          {cryptoTo?.value}
        </TopSub>
      }
      bottomSection={
        <>
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
        </>
      }
    />
  );
};
