import { Image } from 'antd';
import { CryptoCurrency } from '@/common/constants/cryptos';
import {
  Button,
  CryptoButtonContainer,
  CryptoValue,
  DownArrowIcon,
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
      <Button
        onClick={onSelectedCurrency}
        type="primary"
        style={{
          borderRadius: 20,
          fontWeight: 500,
        }}
      >
        Select
      </Button>
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
