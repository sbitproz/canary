import { useCallback } from 'react';
import { ThemeOptions } from '@/theme/theme.constants';
import { CryptoCurrency } from '@/common/constants/cryptos';
import {
  resetCryptoAction,
  setFromCryptoAction,
  setSwapStageAction,
  setSwapThemeAction,
  setToCryptoAction,
  setToValueAction,
  setFromValueAction,
  switchCryptoAction,
} from '../actions/swapActions';
import { useAppDispatch } from '../hooks';
import { SwapStage } from '../reducers/swapReducer';

export const useSwapStore = () => {
  const dispatch = useAppDispatch();

  const switchCryptoFromAndTo = useCallback(() => {
    dispatch(switchCryptoAction());
  }, [dispatch]);

  const setTheme = useCallback(
    (option: ThemeOptions) => {
      dispatch(setSwapThemeAction(option));
    },
    [dispatch],
  );

  const setFromCryptoCurrency = useCallback(
    (crypto: CryptoCurrency) => {
      dispatch(setFromCryptoAction(crypto));
    },
    [dispatch],
  );

  const setToCryptoCurrency = useCallback(
    (crypto: CryptoCurrency) => {
      dispatch(setToCryptoAction(crypto));
    },
    [dispatch],
  );

  const setSwapStage = useCallback(
    (swapStage: SwapStage) => {
      dispatch(setSwapStageAction(swapStage));
    },
    [dispatch],
  );

  const resetCrypto = useCallback(() => {
    dispatch(resetCryptoAction());
  }, [dispatch]);

  const setCryptoToValue = useCallback(
    (value: number | null) => {
      dispatch(setToValueAction(value ?? undefined));
    },
    [dispatch],
  );

  const setCryptoFromValue = useCallback(
    (value: number | null) => {
      dispatch(setFromValueAction(value ?? undefined));
    },
    [dispatch],
  );

  return {
    setCryptoToValue,
    setCryptoFromValue,
    setTheme,
    setToCryptoCurrency,
    setFromCryptoCurrency,
    setSwapStage,
    resetCrypto,
    switchCryptoFromAndTo,
  };
};
