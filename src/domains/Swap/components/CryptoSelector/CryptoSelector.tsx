import { CryptoCurrency } from '@/common/constants/cryptos';
import {
  ConversionLabel,
  CryptoSelectorContainer,
  InputButtonContainer,
  InputLabel,
  InputNumber,
} from './CryptoSelector.styles';
import { CryptoButton } from '../CyptoButton/CryptoButton';
import { CryptoModalList } from '../CryptoModalList/CryptoModalList';
import { useCallback, useState } from 'react';
import {
  inputNumberFormatter,
  numberFormatter,
  numberParser,
} from '@/common/utils/numberFormater';

interface CryptoSelectorProps {
  label: string;
  selectedCurrency?: CryptoCurrency;
  onSelectedCurrency: (crypt: CryptoCurrency) => void;
  onSetValue: (value: number | null) => void;
  value?: number;
  readonly?: boolean;
}

export const CryptoSelector = ({
  label,
  onSelectedCurrency,
  selectedCurrency,
  onSetValue,
  readonly,
  value,
}: CryptoSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSelectCryptoCurrency = useCallback(
    (crypto: CryptoCurrency) => {
      onSelectedCurrency(crypto);
      setIsOpen(false);
    },
    [onSelectedCurrency],
  );

  return (
    <CryptoSelectorContainer>
      <CryptoModalList
        isCryptoModalOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelectCrypto={onSelectCryptoCurrency}
      />
      <InputLabel>{label}</InputLabel>
      <InputButtonContainer>
        <InputNumber
          readOnly={readonly}
          key={label}
          placeholder="0"
          formatter={inputNumberFormatter}
          parser={numberParser}
          controls={false}
          value={value}
          onChange={(value) => {
            onSetValue(value as number);
          }}
        />{' '}
        <CryptoButton
          selectedCurrency={selectedCurrency}
          onSelectedCurrency={() => setIsOpen(true)}
        />
      </InputButtonContainer>
      <ConversionLabel>
        {!!selectedCurrency && !!value && (
          <>
            &#36;
            {numberFormatter((value ?? 0) / selectedCurrency.conversionRate, 5)}
          </>
        )}
      </ConversionLabel>
    </CryptoSelectorContainer>
  );
};
