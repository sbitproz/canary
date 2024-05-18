import { CryptoSelector } from '../CryptoSelector/CryptoSelector';
import { SwapFormContainer, SwapUSDConversion } from './CryptoSwapForm.styles';
import {
  cryptoFormButton,
  cryptoFormButtonProgress,
} from './CryptoSwapForm.constants';
import { useCallback } from 'react';
import { LargeButton } from '@/common/components/Button/Button.styles';
import { useSwapStore } from '@/store/hooks/useSwapStore';
import { useCryptoSwapForm } from './useCryptoSwapForm';

const fromLabel = 'You pay';
const toLabel = 'You receive';

export const CryptoSwapForm = () => {
  const {
    setSwapStage,
    setCryptoFromValue,
    setFromCryptoCurrency,
    setCryptoToValue,
    setToCryptoCurrency,
  } = useSwapStore();

  const { cryptoFrom, cryptoFromValue, cryptoTo, cryptoToValue, swapStage } =
    useCryptoSwapForm();

  const onProgress = useCallback(() => {
    setSwapStage(cryptoFormButtonProgress[swapStage]);
  }, [setSwapStage, swapStage]);

  return (
    <SwapFormContainer>
      <CryptoSelector
        onSetValue={setCryptoFromValue}
        value={cryptoFromValue}
        label={fromLabel}
        selectedCurrency={cryptoFrom}
        onSelectedCurrency={setFromCryptoCurrency}
      />
      <CryptoSelector
        onSetValue={setCryptoToValue}
        value={cryptoToValue}
        label={toLabel}
        selectedCurrency={cryptoTo}
        onSelectedCurrency={setToCryptoCurrency}
      />
      <LargeButton type="primary" onClick={onProgress}>
        {cryptoFormButton[swapStage]}
      </LargeButton>
      <SwapUSDConversion>
        1 USDC = {cryptoFrom?.conversionRate} ${cryptoFrom?.value} ($1.00)
      </SwapUSDConversion>
    </SwapFormContainer>
  );
};
