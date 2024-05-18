import { useCallback, useEffect, useState } from "react";

export enum SwapStage {
  WALLET_UNCONECTED,
  WALLET_CONNECT,
  CONFIRM_SWAP,
  SIGN_SWAP,
  SIGNING_SWAP,
  SUBMITTING_SWAP,
  COMPLETE_SWAP,
}

export const useSwap = () => {
  const [swapStage, setSwapStage] = useState<SwapStage>(
    SwapStage.WALLET_UNCONECTED
  );

  const [isMetaMaskVisible, setIsMetaMaskVisible] = useState<boolean>(false);

  const onMetaMaskProgress = useCallback(() => {
    onProgress();
    setIsMetaMaskVisible(false);
  }, [swapStage]);

  const onProgress = useCallback(() => {
    if (swapStage < SwapStage.COMPLETE_SWAP) {
      setSwapStage(swapStage + 1);
    }
  }, [swapStage]);

  const onCloseMetaMask = useCallback(() => {
    if (swapStage > 0) {
      setSwapStage(swapStage - 1);
    }
    setIsMetaMaskVisible(false);
  }, [swapStage]);

  useEffect(() => {
    if (swapStage === SwapStage.WALLET_CONNECT) {
      setIsMetaMaskVisible(true);
    }

    if (swapStage === SwapStage.SIGNING_SWAP) {
      setIsMetaMaskVisible(true);
    }

    console.log("🚀 ~ useEffect ~ swapStage:", swapStage);
  }, [swapStage]);

  return {
    onCloseMetaMask,
    swapStage,
    setSwapStage,
    isMetaMaskVisible,
    onMetaMaskProgress,
    onProgress,
  };
};
