import { useAppSelector } from '@/store/hooks';
import { useSwapStore } from '@/store/hooks/useSwapStore';
import { SwapStage } from '@/store/reducers/swapReducer';
import { selectSwapStage, selectTheme } from '@/store/selectors/swap.selectors';
import { useCallback, useEffect, useState } from 'react';

export const useSwap = () => {
  const { setSwapStage, setTheme } = useSwapStore();

  const swapStage = useAppSelector(selectSwapStage);
  const theme = useAppSelector(selectTheme);

  const [isMetaMaskVisible, setIsMetaMaskVisible] = useState<boolean>(false);

  const onProgress = useCallback(() => {
    if (swapStage < SwapStage.COMPLETE_SWAP) {
      setSwapStage(swapStage + 1);
    }
  }, [setSwapStage, swapStage]);

  const onMetaMaskProgress = useCallback(() => {
    onProgress();
    setIsMetaMaskVisible(false);
  }, [onProgress]);

  const onCloseMetaMask = useCallback(() => {
    if (swapStage > 0) {
      setSwapStage(swapStage - 1);
    }
    setIsMetaMaskVisible(false);
  }, [setSwapStage, swapStage]);

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
    setTheme,
    theme,
  };
};
