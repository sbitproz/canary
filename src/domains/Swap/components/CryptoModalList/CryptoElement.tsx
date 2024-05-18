import { CryptoCurrency } from '@/common/constants/cryptos';
import { colors } from '@/styles/colors';
import { spacings } from '@/styles/spacings';
import { Flex, Image } from 'antd';

interface CryptoElementProps {
  crypto: CryptoCurrency;
  onClick: () => void;
}

export const CryptoElement = ({ crypto, onClick }: CryptoElementProps) => {
  return (
    <Flex style={{ marginBottom: 10, cursor: 'pointer' }} onClick={onClick}>
      <Image
        src={crypto.image}
        width={35}
        wrapperStyle={{
          marginRight: spacings.S6,
          marginBottom: spacings.S6,
        }}
        style={{
          borderRadius: 50,
        }}
      />
      <div>
        <div style={{ fontWeight: 600, lineHeight: '15px' }}>
          {crypto.value}
        </div>
        <div
          style={{
            color: colors.grey150,
            textTransform: 'uppercase',
            fontSize: 12,
            marginTop: 2,
          }}
        >
          {crypto.description}
        </div>
      </div>
    </Flex>
  );
};
