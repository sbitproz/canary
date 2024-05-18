import { Typography } from 'antd';
import { SignSwapActions, SignSwapSteps } from './SignSwap.styles';
import { LargeButton } from '@/common/components/Button/Button.styles';
import { Panel } from '@/common/components/Panel/Panel';
import { useAppSelector } from '@/store/hooks';
import { selectSwapCryptoSelector } from '@/store/selectors/swap.selectors';
import { inputNumberFormatter } from '@/common/utils/numberFormater';

const items = [
  {
    title: 'Sign the order with your wallet',
    description: '(0x789C...61a5)',
  },
  {
    title: 'The order is submitted and ready to be settled',
  },
];

const signSwapButtonLabel = 'Sign swap order';

interface SignSwapProps {
  onClickSign: () => void;
}

export const SignSwap = ({ onClickSign }: SignSwapProps) => {
  const { cryptoFromValue, cryptoFrom, cryptoToValue, cryptoTo } =
    useAppSelector(selectSwapCryptoSelector);

  return (
    <Panel
      topSection={
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Sign Swap
        </Typography.Title>
      }
      bottomSection={
        <>
          <div style={{ textAlign: 'center' }}>
            <Typography.Title level={3} style={{ marginBottom: 30 }}>
              Almost there!
            </Typography.Title>
            <Typography.Title level={4} style={{ marginBottom: 10 }}>
              Swapping {inputNumberFormatter(cryptoFromValue)}{' '}
              {cryptoFrom?.value} for {inputNumberFormatter(cryptoToValue)}{' '}
              {cryptoTo?.value}
            </Typography.Title>
            <Typography.Title level={4} style={{ marginBottom: 30 }}>
              Follow these steps:
            </Typography.Title>
          </div>
          <SignSwapSteps current={1} labelPlacement="vertical" items={items} />
          <SignSwapActions>
            <LargeButton type="primary" onClick={onClickSign}>
              {signSwapButtonLabel}
            </LargeButton>
          </SignSwapActions>
        </>
      }
    />
  );
};
