import { useSwapStore } from "@/store/hooks/useSwapStore";
import { SwapStage } from "@/store/reducers/swapReducer";
import { useCallback, useEffect, useState } from "react";

export const useSwap = () => {
  const { swapStage, setSwapStage } = useSwapStore();

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
