import { SwapStage } from '@/store/reducers/swapReducer';

export const metaMaskProps: Record<string, { title: string; okLabel: string }> =
  {
    [SwapStage.WALLET_CONNECT]: {
      title: 'Connect Wallet',
      okLabel: 'Connect',
    },
    [SwapStage.SIGNING_SWAP]: {
      title: 'Sign Swap',
      okLabel: 'Sign',
    },
  };
