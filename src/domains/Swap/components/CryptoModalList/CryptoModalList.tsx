import { CryptoCurrency, cryptos } from '@/common/constants/cryptos';
import { colors } from '@/styles/colors';
import { spacings } from '@/styles/spacings';
import { Flex, Image, Input, Modal } from 'antd';

const modalTitle = 'Select a token';

const { Search } = Input;

interface CryptoElementProps {
  crypto: CryptoCurrency;
  onClick: () => void;
}

const CryptoElement = ({ crypto, onClick }: CryptoElementProps) => {
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

interface CryptoModalListProps {
  isCryptoModalOpen: boolean;
  onSelectCrypto: (crypto: CryptoCurrency) => void;
  onCancel: () => void;
}

export const CryptoModalList = ({
  isCryptoModalOpen,
  onSelectCrypto,
  onCancel,
}: CryptoModalListProps) => {
  return (
    <Modal
      footer={[]}
      title={modalTitle}
      width={400}
      open={isCryptoModalOpen}
      onCancel={onCancel}
    >
      <Search
        style={{
          marginTop: 15,
          paddingBottom: 25,
          marginBottom: 25,
          borderBottom: `1px solid  ${colors.grey187}`,
        }}
      />
      <div style={{ height: 500, overflowY: 'auto' }}>
        {cryptos.map((crypto) => (
          <CryptoElement
            key={crypto.value}
            onClick={() => onSelectCrypto(crypto)}
            crypto={crypto}
          />
        ))}
      </div>
    </Modal>
  );
};
