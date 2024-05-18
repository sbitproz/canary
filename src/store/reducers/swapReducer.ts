import { createReducer } from '@reduxjs/toolkit';
import { ThemeOptions } from '@/theme/theme.constants';
import { CryptoCurrency, ethereumCrypto } from '@/common/constants/cryptos';
import {
  resetCryptoAction,
  setFromCryptoAction,
  setFromValueAction,
  setSwapStageAction,
  setSwapThemeAction,
  setToCryptoAction,
  setToValueAction,
} from '../actions/swapActions';

export interface SwapState {
  cryptoFrom: CryptoCurrency;
  cryptoFromValue?: number;
  cryptoTo?: CryptoCurrency;
  cryptoToValue?: number;
  theme: ThemeOptions;
  swapStage: SwapStage;
}

export enum SwapStage {
  WALLET_UNCONECTED,
  WALLET_CONNECT,
  CONFIRM_SWAP,
  SIGN_SWAP,
  SIGNING_SWAP,
  SUBMITTING_SWAP,
  COMPLETE_SWAP,
}

export const initialState = {
  cryptoFrom: ethereumCrypto,
  cryptoTo: undefined,
  theme: ThemeOptions.SIMPLE,
  swapStage: SwapStage.WALLET_UNCONECTED,
} as SwapState;

const swapReducer = createReducer(initialState, (builder) => {
  builder.addCase(setFromCryptoAction, (state: SwapState, action) => {
    state.cryptoFrom = action.payload;
  });
  builder.addCase(setFromValueAction, (state: SwapState, action) => {
    state.cryptoFromValue = action.payload;
  });
  builder.addCase(setToValueAction, (state: SwapState, action) => {
    state.cryptoToValue = action.payload;
  });
  builder.addCase(setToCryptoAction, (state: SwapState, action) => {
    state.cryptoTo = action.payload;
  });
  builder.addCase(setSwapThemeAction, (state: SwapState, action) => {
    state.theme = action.payload;
  });
  builder.addCase(setSwapStageAction, (state: SwapState, action) => {
    state.swapStage = action.payload;
  });
  builder.addCase(resetCryptoAction, (state: SwapState) => {
    state.cryptoFrom = ethereumCrypto;
    state.cryptoTo = undefined;
    state.cryptoFromValue = undefined;
    state.cryptoToValue = undefined;
  });
});

export default swapReducer;
