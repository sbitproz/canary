import { CryptoCurrency } from "@/common/constants/cryptos";
import {
  ConversionLabel,
  CryptoSelectorContainer,
  InputLabel,
  InputNumber,
} from "./CryptoSelector.styles";
import { CryptoButton } from "../CyptoButton/CryptoButton";

interface CryptoSelectorProps {
  label: string;
  selectedCurrency: CryptoCurrency;
  onSelectedCurrency: () => void;
}

export const CryptoSelector = ({
  selectedCurrency,
  onSelectedCurrency,
  label,
}: CryptoSelectorProps) => {
  return (
    <CryptoSelectorContainer>
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
          onSelectedCurrency={onSelectedCurrency}
        />
      </div>
      <ConversionLabel>1.11</ConversionLabel>
    </CryptoSelectorContainer>
  );
};
