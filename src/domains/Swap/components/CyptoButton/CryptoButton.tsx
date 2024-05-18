import { Image } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CryptoCurrency } from "@/common/constants/cryptos";
import { Button } from "./CryptoButton.styles";

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
    <Button
      onClick={onSelectedCurrency}
      style={{
        borderRadius: 20,
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        preview={false}
        src={selectedCurrency.image}
        wrapperStyle={{
          width: 23,
          position: "absolute",
          left: 5,
          top: 3,
        }}
        style={{ borderRadius: 50 }}
        alt={selectedCurrency.description}
      />{" "}
      <div style={{ marginLeft: 23, marginRight: 13 }}>
        {selectedCurrency.value}
      </div>
      <DownOutlined style={{ position: "absolute", right: 8, top: 8 }} />
    </Button>
  );
};
