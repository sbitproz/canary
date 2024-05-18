import { useAppSelector } from '@/store/hooks';
import {
  selectSwapCryptoSelector,
  selectSwapStage,
} from '@/store/selectors/swap.selectors';

export const useCryptoSwapForm = () => {
  const swapStage = useAppSelector(selectSwapStage);
  const { cryptoFromValue, cryptoFrom, cryptoTo, cryptoToValue } =
    useAppSelector(selectSwapCryptoSelector);

  return { swapStage, cryptoFromValue, cryptoFrom, cryptoTo, cryptoToValue };
};
