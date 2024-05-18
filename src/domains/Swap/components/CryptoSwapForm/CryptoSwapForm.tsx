import { CryptoSelector } from '../CryptoSelector/CryptoSelector';
import { SwapFormContainer, SwapUSDConversion } from './CryptoSwapForm.styles';
import {
  cryptoFormButton,
  cryptoFormButtonProgress,
} from './CryptoSwapForm.constants';
import { useCallback } from 'react';
import { LargeButton } from '@/common/components/Button/Button.styles';
import { useCryptoSwapForm } from './useCryptoSwapForm';

const fromLabel = 'You pay';
const toLabel = 'You receive';

export const CryptoSwapForm = () => {
  const {
    disableButton,
    cryptoFrom,
    cryptoFromValue,
    cryptoTo,
    cryptoToValue,
    swapStage,
    setSwapStage,
    onChangeFromValue,
    setFromCryptoCurrency,
    setCryptoToValue,
    setToCryptoCurrency,
  } = useCryptoSwapForm();

  const onProgress = useCallback(() => {
    setSwapStage(cryptoFormButtonProgress[swapStage]);
  }, [setSwapStage, swapStage]);

  return (
    <SwapFormContainer>
      <CryptoSelector
        onSetValue={onChangeFromValue}
        value={cryptoFromValue}
        label={fromLabel}
        selectedCurrency={cryptoFrom}
        onSelectedCurrency={setFromCryptoCurrency}
      />
      <CryptoSelector
        onSetValue={setCryptoToValue}
        value={cryptoToValue}
        label={toLabel}
        readonly
        selectedCurrency={cryptoTo}
        onSelectedCurrency={setToCryptoCurrency}
      />
      <LargeButton disabled={disableButton} type="primary" onClick={onProgress}>
        {cryptoFormButton[swapStage]}
      </LargeButton>
      <SwapUSDConversion>
        1 USDC = {cryptoFrom?.conversionRate} ${cryptoFrom?.value} ($1.00)
      </SwapUSDConversion>
    </SwapFormContainer>
  );
};
