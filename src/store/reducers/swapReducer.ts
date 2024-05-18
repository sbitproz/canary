import { createReducer } from "@reduxjs/toolkit";
import { ThemeOptions } from "@/theme/theme.constants";
import { CryptoCurrency } from "@/common/constants/cryptos";
import {
  resetCryptoAction,
  setFromCryptoAction,
  setSwapStageAction,
  setSwapThemeAction,
  setToCryptoAction,
} from "../actions/swapActions";

export interface SwapState {
  cryptoFrom?: CryptoCurrency;
  cryptoTo?: CryptoCurrency;
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
  cryptoFrom: undefined,
  cryptoTo: undefined,
  theme: ThemeOptions.SIMPLE,
  swapStage: SwapStage.WALLET_UNCONECTED,
} as SwapState;

const swapReducer = createReducer(initialState, (builder) => {
  builder.addCase(setFromCryptoAction, (state: SwapState, action) => {
    state.cryptoFrom = action.payload;
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
    state.cryptoFrom = undefined;
    state.cryptoTo = undefined;
  });
});

export default swapReducer;
