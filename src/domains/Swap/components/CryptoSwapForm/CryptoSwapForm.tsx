import { CryptoSelector } from "../CryptoSelector/CryptoSelector";
import { SwapFormContainer } from "./CryptoSwapForm.styles";
import {
  cryptoFormButton,
  cryptoFormButtonProgress,
} from "./CryptoSwapForm.constants";
import { useCallback } from "react";
import { LargeButton } from "@/common/components/Button/Button.styles";
import { useSwapStore } from "@/store/hooks/useSwapStore";

export const CryptoSwapForm = () => {
  const {
    swapStage,
    setSwapStage,
    setFromCrypto,
    setToCrypto,
    cryptoFrom,
    cryptoTo,
  } = useSwapStore();

  const onProgress = useCallback(() => {
    setSwapStage(cryptoFormButtonProgress[swapStage]);
  }, [swapStage]);

  return (
    <SwapFormContainer>
      <CryptoSelector
        label="You pay"
        selectedCurrency={cryptoFrom}
        onSelectedCurrency={setFromCrypto}
      />
      <CryptoSelector
        label="You receive"
        selectedCurrency={cryptoTo}
        onSelectedCurrency={setToCrypto}
      />
      <LargeButton type="primary" onClick={onProgress}>
        {cryptoFormButton[swapStage]}
      </LargeButton>
    </SwapFormContainer>
  );
};
