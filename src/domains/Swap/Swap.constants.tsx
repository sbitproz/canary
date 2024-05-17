import { SwapStage } from "./useSwap";

export const metaMaskProps: Record<string, any> = {
  [SwapStage.WALLET_CONNECT]: {
    okLabel: "Connect",
  },
  [SwapStage.SIGN_SWAP]: {
    okLabel: "Sign",
  },
};
