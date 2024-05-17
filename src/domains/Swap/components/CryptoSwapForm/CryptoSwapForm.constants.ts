import { SwapStage } from "../../useSwap";

export const cryptoFormButton: Record<string, string> = {
  [SwapStage.WALLET_UNCONECTED]: "Connect Wallet",
  [SwapStage.WALLET_CONNECT]: "Confirm Swap",
};

export const cryptoFormButtonProgress: Record<string, SwapStage> = {
  [SwapStage.WALLET_UNCONECTED]: SwapStage.WALLET_CONNECT,
  [SwapStage.WALLET_CONNECT]: SwapStage.CONFIRM_SWAP,
};
