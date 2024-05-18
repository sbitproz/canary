import { useAppSelector } from '@/store/hooks';
import { useSwapStore } from '@/store/hooks/useSwapStore';
import { selectSwapCryptoSelector } from '@/store/selectors/swap.selectors';
import { useCallback } from 'react';

export const useCryptoSubmitted = () => {
  const { setSwapStage, resetCrypto } = useSwapStore();
  const { cryptoFrom, cryptoFromValue, cryptoTo, cryptoToValue } =
    useAppSelector(selectSwapCryptoSelector);

  const onMakeAnotherSwap = useCallback(() => {
    resetCrypto();
    setSwapStage(0);
  }, [resetCrypto, setSwapStage]);

  return {
    onMakeAnotherSwap,
    cryptoFrom,
    cryptoFromValue,
    cryptoTo,
    cryptoToValue,
  };
};
