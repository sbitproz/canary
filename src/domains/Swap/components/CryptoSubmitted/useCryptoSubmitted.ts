import { useSwapStore } from "@/store/hooks/useSwapStore";
import { useCallback } from "react";

export const useCryptoSubmitted = () => {
  const { setSwapStage, resetCrypto } = useSwapStore();

  const onMakeAnotherSwap = useCallback(() => {
    resetCrypto();
    setSwapStage(0);
  }, [resetCrypto, setSwapStage]);

  return {
    onMakeAnotherSwap
  }
};
