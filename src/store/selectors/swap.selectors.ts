import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectSwap = (state: RootState) => state.swap;

export const selectCrypto = createSelector(selectSwap, (swap) => ({
  cryptoFrom: swap.cryptoFrom,
  cryptoTo: swap.cryptoTo,
}));

export const selectTheme = createSelector(selectSwap, (swap) => swap.theme);

export const selectSwapStage = createSelector(
  selectSwap,
  (swap) => swap.swapStage,
);
