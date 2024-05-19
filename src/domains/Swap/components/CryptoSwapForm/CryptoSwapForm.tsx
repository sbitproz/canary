import { CryptoSelector } from '../CryptoSelector/CryptoSelector';
import {
  SwapFormContainer,
  SwapUSDConversion,
  SwitchButton,
} from './CryptoSwapForm.styles';
import {
  cryptoFormButton,
  cryptoFormButtonProgress,
} from './CryptoSwapForm.constants';
import { useCallback } from 'react';
import { LargeButton } from '@/common/components/Button/Button.styles';
import { useCryptoSwapForm } from './useCryptoSwapForm';
import { SwapOutlined } from '@ant-design/icons';

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
    showCryptoToCryptoConversion,
    cryptoToCryptoConversionRate,
    switchCrypto,
  } = useCryptoSwapForm();

  const onProgress = useCallback(() => {
    setSwapStage(cryptoFormButtonProgress[swapStage]);
  }, [setSwapStage, swapStage]);

  return (
    <SwapFormContainer>
      <SwitchButton type="primary" onClick={switchCrypto}>
        <SwapOutlined rotate={90} />
      </SwitchButton>
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
        {!showCryptoToCryptoConversion && (
          <>
            1 USDC = {cryptoFrom?.conversionRate} {cryptoFrom.value} ($1.00)
          </>
        )}
        {showCryptoToCryptoConversion && (
          <>
            1 {cryptoFrom.value} = {cryptoToCryptoConversionRate}{' '}
            {cryptoTo?.value}
          </>
        )}
      </SwapUSDConversion>
    </SwapFormContainer>
  );
};
