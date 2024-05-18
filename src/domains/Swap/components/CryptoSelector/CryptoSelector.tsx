import { CryptoCurrency } from "@/common/constants/cryptos";
import {
  ConversionLabel,
  CryptoSelectorContainer,
  InputLabel,
  InputNumber,
} from "./CryptoSelector.styles";
import { CryptoButton } from "../CyptoButton/CryptoButton";
import { CryptoModalList } from "../CryptoModalList/CryptoModalList";
import { useCallback, useState } from "react";

interface CryptoSelectorProps {
  label: string;
  selectedCurrency?: CryptoCurrency;
  onSelectedCurrency: (crypt: CryptoCurrency) => void;
}

export const CryptoSelector = ({
  label,
  onSelectedCurrency,
  selectedCurrency,
}: CryptoSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSelectCryptoCurrency = useCallback((crypto: CryptoCurrency) => {
    onSelectedCurrency(crypto);
    setIsOpen(false);
  }, []);

  return (
    <CryptoSelectorContainer>
      <CryptoModalList
        isCryptoModalOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelectCrypto={onSelectCryptoCurrency}
      />
      <InputLabel>{label}</InputLabel>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <InputNumber placeholder="0" controls={false} />{" "}
        <CryptoButton
          selectedCurrency={selectedCurrency}
          onSelectedCurrency={() => setIsOpen(true)}
        />
      </div>
      <ConversionLabel>1.11</ConversionLabel>
    </CryptoSelectorContainer>
  );
};
