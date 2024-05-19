import { Image } from 'antd';
import { CryptoCurrency } from '@/common/constants/cryptos';
import {
  Button,
  CryptoButtonContainer,
  CryptoValue,
  DownArrowIcon,
  SelectButton,
} from './CryptoButton.styles';

interface CryptoButtonProps {
  selectedCurrency?: CryptoCurrency;
  onSelectedCurrency: () => void;
}

export const CryptoButton = ({
  onSelectedCurrency,
  selectedCurrency,
}: CryptoButtonProps) => {
  if (!selectedCurrency) {
    return (
      <SelectButton
        onClick={onSelectedCurrency}
        type="primary"
      >
        Select
      </SelectButton>
    );
  }

  return (
    <CryptoButtonContainer>
      <Button onClick={onSelectedCurrency}>
        <Image
          preview={false}
          src={selectedCurrency.image}
          wrapperStyle={{
            width: 32,
            position: 'absolute',
            left: 5,
            top: 3,
          }}
          style={{ borderRadius: 50 }}
          alt={selectedCurrency.description}
        />{' '}
        <CryptoValue>{selectedCurrency.value}</CryptoValue>
        <DownArrowIcon />
      </Button>
    </CryptoButtonContainer>
  );
};
