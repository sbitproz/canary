import { selectSwap } from '../selectors/swap.selectors';
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
} from '../actions/swapActions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { SwapStage } from '../reducers/swapReducer';

export const useSwapStore = () => {
  const swap = useAppSelector(selectSwap);
  const dispatch = useAppDispatch();

  const setTheme = useCallback(
    (option: ThemeOptions) => {
      dispatch(setSwapThemeAction(option));
    },
    [dispatch],
  );

  const setFromCrypto = useCallback(
    (crypto: CryptoCurrency) => {
      dispatch(setFromCryptoAction(crypto));
    },
    [dispatch],
  );

  const setToCrypto = useCallback(
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

  const progressSwapStage = useCallback(() => {
    dispatch(setSwapStageAction(swap.swapStage + 1));
  }, [dispatch, swap.swapStage]);

  const regressSwapStage = useCallback(() => {
    dispatch(setSwapStageAction(swap.swapStage - 1));
  }, [dispatch, swap.swapStage]);

  const resetCrypto = useCallback(() => {
    dispatch(resetCryptoAction());
  }, [dispatch]);

  const setCryptoTo = useCallback(
    (value: number | null) => {
      dispatch(setToValueAction(value ?? undefined));
    },
    [dispatch],
  );

  const setCryptoFrom = useCallback(
    (value: number | null) => {
      dispatch(setFromValueAction(value ?? undefined));
    },
    [dispatch],
  );

  return {
    ...swap,
    setCryptoTo,
    setCryptoFrom,
    setTheme,
    setToCrypto,
    setFromCrypto,
    setSwapStage,
    regressSwapStage,
    progressSwapStage,
    resetCrypto,
  };
};
