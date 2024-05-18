import { SwapStage } from '@/store/reducers/swapReducer';

export const cryptoFormButton: Record<string, string> = {
  [SwapStage.WALLET_UNCONECTED]: 'Connect Wallet',
  [SwapStage.WALLET_CONNECT]: 'Confirm Swap',
  [SwapStage.CONFIRM_SWAP]: 'Confirm Swap',
};

export const cryptoFormButtonProgress: Record<string, SwapStage> = {
  [SwapStage.WALLET_UNCONECTED]: SwapStage.WALLET_CONNECT,
  [SwapStage.CONFIRM_SWAP]: SwapStage.SIGN_SWAP,
};
