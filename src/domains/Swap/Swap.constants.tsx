import { SwapStage } from "./useSwap";

export const metaMaskProps: Record<string, any> = {
  [SwapStage.WALLET_CONNECT]: {
    okLabel: "Connect",
  },
  [SwapStage.SIGNING_SWAP]: {
    okLabel: "Sign",
  },
};
