import { createAction } from "@reduxjs/toolkit";
import { SwapStage, SwapState } from "../reducers/swapReducer";
import { ThemeOptions } from "@/theme/theme.constants";

export const setFromCryptoAction = createAction<SwapState["cryptoFrom"]>(
  "crpyot/set from crypto"
);

export const setToCryptoAction = createAction<SwapState["cryptoTo"]>(
  "crpyot/set to crypto"
);

export const setSwapThemeAction = createAction<ThemeOptions>("swap/set theme");

export const setSwapStageAction = createAction<SwapStage>("swap/set stage");

export const resetCryptoAction = createAction("crpyot/reset crypto");
