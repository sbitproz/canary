import { Image } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CryptoCurrency } from '@/common/constants/cryptos';
import { Button, CryptoValue } from './CryptoButton.styles';

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
        }}
      >
        Select
      </Button>
    );
  }

  return (
    <Button onClick={onSelectedCurrency}>
      <Image
        preview={false}
        src={selectedCurrency.image}
        wrapperStyle={{
          width: 23,
          position: 'absolute',
          left: 5,
          top: 3,
        }}
        style={{ borderRadius: 50 }}
        alt={selectedCurrency.description}
      />{' '}
      <CryptoValue>{selectedCurrency.value}</CryptoValue>
      <DownOutlined style={{ position: 'absolute', right: 8, top: 8 }} />
    </Button>
  );
};
