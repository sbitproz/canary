import { CryptoSelector } from "../CryptoSelector/CryptoSelector";
import { cryptos } from "@/common/constants/cryptos";
import { SwapFormContainer } from "./CryptoSwapForm.styles";
import { SwapStage } from "../../useSwap";
import { cryptoFormButton, cryptoFormButtonProgress } from "./CryptoSwapForm.constants";
import { useCallback } from "react";
import { LargeButton } from "@/common/components/Button/Button.styles";

const selectedCurrency = cryptos[0];

interface CryptoSwapFormProps {
   swapStage: SwapStage;
   onSwapStage: (swapStage: SwapStage) => void;
}

export const CryptoSwapForm = ({swapStage,onSwapStage}: CryptoSwapFormProps) => {

  const onProgress = useCallback(() => {
    console.log('cryptoFormButtonProgress[swapStage]', swapStage, cryptoFormButtonProgress[swapStage])
    onSwapStage(cryptoFormButtonProgress[swapStage])
  }, [swapStage])

  return (
    <SwapFormContainer>
      <CryptoSelector
        label="You pay"
        selectedCurrency={selectedCurrency}
        onSelectedCurrency={() => {}}
      />
      <CryptoSelector
        label="You receive"
        selectedCurrency={selectedCurrency}
        onSelectedCurrency={() => {}}
      />
      <LargeButton type="primary" onClick={onProgress}>{cryptoFormButton[swapStage]}</LargeButton>
    </SwapFormContainer>
  )  
};
