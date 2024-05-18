import { CryptoCurrency } from '@/common/constants/cryptos';
import { colors } from '@/styles/colors';
import { Input, Modal } from 'antd';
import { CryptoElement } from './CryptoElement';
import { useCryptoModalList } from './useCryptoModalList';

const modalTitle = 'Select a token';

const { Search } = Input;

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
  const { cryptos, searchValue, setSearch } = useCryptoModalList();

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
        value={searchValue}
        onChange={(e) => setSearch(e.target.value)}
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
