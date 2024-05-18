import { cryptos } from '@/common/constants/cryptos';
import { useMemo, useState } from 'react';

export const useCryptoModalList = () => {
  const [searchValue, setSearch] = useState('');

  const filteredCryptos = useMemo(
    () =>
      cryptos.filter(
        (crypto) =>
          crypto.description
            .toLocaleLowerCase()
            .indexOf(searchValue.toLocaleLowerCase()) > -1 ||
          crypto.value
            .toLocaleLowerCase()
            .indexOf(searchValue.toLocaleLowerCase()) > -1,
      ),
    [searchValue],
  );

  return {
    cryptos: filteredCryptos,
    searchValue,
    setSearch,
  };
};
