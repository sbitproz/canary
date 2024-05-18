import { useAppSelector } from '@/store/hooks';
import { useSwapStore } from '@/store/hooks/useSwapStore';
import { SwapStage } from '@/store/reducers/swapReducer';
import {
  selectSwapCryptoSelector,
  selectSwapStage,
} from '@/store/selectors/swap.selectors';
import { useCallback, useEffect, useMemo } from 'react';

export const useCryptoSwapForm = () => {
  const swapStage = useAppSelector(selectSwapStage);
  const { cryptoFromValue, cryptoFrom, cryptoTo, cryptoToValue } =
    useAppSelector(selectSwapCryptoSelector);

  const {
    setSwapStage,
    setCryptoFromValue,
    setFromCryptoCurrency,
    setCryptoToValue,
    setToCryptoCurrency,
  } = useSwapStore();

  const conversionFromRate = useMemo(() => {
    const usd = (cryptoFromValue ?? 0) / cryptoFrom.conversionRate;

    if (cryptoTo) {
      return Math.round(usd * cryptoTo.conversionRate);
    }

    return undefined;
  }, [cryptoFrom.conversionRate, cryptoFromValue, cryptoTo]);

  const onChangeFromValue = useCallback(
    (value: number | null) => {
      setCryptoFromValue(value);
    },
    [setCryptoFromValue],
  );

  useEffect(() => {
    if (conversionFromRate) {
      setCryptoToValue(conversionFromRate);
    }
  }, [conversionFromRate, setCryptoToValue]);

  const disableButton = useMemo(() => {
    if (swapStage === SwapStage.WALLET_UNCONECTED) {
      return false;
    }

    if (
      [SwapStage.WALLET_CONNECT, SwapStage.CONFIRM_SWAP].includes(swapStage) &&
      cryptoFrom &&
      cryptoTo &&
      cryptoFromValue &&
      cryptoToValue
    ) {
      return false;
    }

    return true;
  }, [cryptoFrom, cryptoFromValue, cryptoTo, cryptoToValue, swapStage]);

  return {
    swapStage,
    cryptoFromValue,
    cryptoFrom,
    cryptoTo,
    cryptoToValue,
    disableButton,
    setSwapStage,
    onChangeFromValue,
    setFromCryptoCurrency,
    setCryptoToValue,
    setToCryptoCurrency,
  };
};
