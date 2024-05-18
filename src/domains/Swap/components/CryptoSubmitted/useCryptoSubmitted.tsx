import { useAppSelector } from '@/store/hooks';
import { useSwapStore } from '@/store/hooks/useSwapStore';
import { selectSwapCryptoSelector } from '@/store/selectors/swap.selectors';
import { useCallback, useMemo } from 'react';
import { Image } from 'antd';
import { CryptoTitle } from './CryptoSubmitted.styles';
import { FieldTimeOutlined, SwapOutlined } from '@ant-design/icons';
import { formatDate } from 'date-fns/format';

export const useCryptoSubmitted = () => {
  const { setSwapStage, resetCrypto } = useSwapStore();
  const { cryptoFrom, cryptoFromValue, cryptoTo, cryptoToValue } =
    useAppSelector(selectSwapCryptoSelector);

  const onMakeAnotherSwap = useCallback(() => {
    resetCrypto();
    setSwapStage(0);
  }, [resetCrypto, setSwapStage]);

  const transationData = useMemo(() => {
    return [
      {
        avatar: (
          <Image
            src={cryptoFrom.image}
            preview={false}
            width={30}
            style={{ borderRadius: 50 }}
          />
        ),
        title: (
          <CryptoTitle>
            From: {cryptoFromValue} {cryptoFrom.value} ({cryptoFrom.description}
            )
          </CryptoTitle>
        ),
      },
      {
        avatar: (
          <Image
            src={cryptoTo?.image}
            preview={false}
            width={30}
            style={{ borderRadius: 50 }}
          />
        ),
        title: (
          <CryptoTitle>
            To: {cryptoToValue} {cryptoTo?.value} ({cryptoTo?.description})
          </CryptoTitle>
        ),
      },
      {
        avatar: <SwapOutlined style={{ marginLeft: 8 }} />,
        title: (
          <>
            <b>TX ID:</b> 0x1234abcd5678efgh9101ijklmnop1234
          </>
        ),
      },
      {
        avatar: <FieldTimeOutlined style={{ marginLeft: 8 }} />,
        title: (
          <>
            <b>Timestamp:</b> {formatDate(new Date(), 'dd MMM yyyy hh:mm:ss')}
          </>
        ),
      },
    ];
  }, [
    cryptoFrom.description,
    cryptoFrom.image,
    cryptoFrom.value,
    cryptoFromValue,
    cryptoTo?.description,
    cryptoTo?.image,
    cryptoTo?.value,
    cryptoToValue,
  ]);

  return {
    onMakeAnotherSwap,
    cryptoFrom,
    cryptoFromValue,
    cryptoTo,
    cryptoToValue,
    transationData,
  };
};
