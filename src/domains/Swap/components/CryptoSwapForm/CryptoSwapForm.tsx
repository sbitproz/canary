import { CryptoSelector } from '../CryptoSelector/CryptoSelector';
import { SwapFormContainer } from './CryptoSwapForm.styles';
import {
  cryptoFormButton,
  cryptoFormButtonProgress,
} from './CryptoSwapForm.constants';
import { useCallback } from 'react';
import { LargeButton } from '@/common/components/Button/Button.styles';
import { useSwapStore } from '@/store/hooks/useSwapStore';

const fromLabel = 'You pay';
const toLabel = 'You receive';

export const CryptoSwapForm = () => {
  const {
    swapStage,
    setSwapStage,
    setFromCrypto,
    setToCrypto,
    cryptoFrom,
    cryptoTo,
    cryptoFromValue,
    cryptoToValue,
    setCryptoFrom,
    setCryptoTo,
  } = useSwapStore();

  const onProgress = useCallback(() => {
    setSwapStage(cryptoFormButtonProgress[swapStage]);
  }, [setSwapStage, swapStage]);

  return (
    <SwapFormContainer>
      <CryptoSelector
        onSetValue={setCryptoFrom}
        // value={cryptoFromValue}
        label={fromLabel}
        selectedCurrency={cryptoFrom}
        onSelectedCurrency={setFromCrypto}
      />
      <CryptoSelector
        onSetValue={setCryptoTo}
        // value={cryptoToValue}
        label={toLabel}
        selectedCurrency={cryptoTo}
        onSelectedCurrency={setToCrypto}
      />
      <LargeButton type="primary" onClick={onProgress}>
        {cryptoFormButton[swapStage]}
      </LargeButton>
    </SwapFormContainer>
  );
};
