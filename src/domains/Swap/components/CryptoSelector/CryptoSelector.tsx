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
import { numberFormatter } from '@/common/utils/numberFormater';

interface CryptoSelectorProps {
  label: string;
  selectedCurrency?: CryptoCurrency;
  onSelectedCurrency: (crypt: CryptoCurrency) => void;
  onSetValue: (value: number | null) => void;
  value?: number;
}

export const CryptoSelector = ({
  label,
  onSelectedCurrency,
  selectedCurrency,
  onSetValue,
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
          placeholder="0"
          controls={false}
          value={value}
          onChange={(value) =>
            onSetValue(typeof value === 'string' ? +value : value)
          }
        />{' '}
        <CryptoButton
          selectedCurrency={selectedCurrency}
          onSelectedCurrency={() => setIsOpen(true)}
        />
      </InputButtonContainer>
      <ConversionLabel>
        {numberFormatter(
          (value ?? 0) * (selectedCurrency?.conversionRate ?? 0),
          5,
        ) ?? ''}
      </ConversionLabel>
    </CryptoSelectorContainer>
  );
};
