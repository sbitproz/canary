export interface CryptoCurrency {
  value: string;
  description: string;
  image: string;
}

export const cryptos: CryptoCurrency[] = [
  {
    value: "ETH",
    description: "Ethereum",
    image: "ethereum.png", // Replace with the actual image URL
  },
  {
    value: "1INCH",
    description: "1INCH Token",
    image: "1inch.png", // Replace with the actual image URL
  },
  {
    value: "ZRX",
    description: "0x Protocol Token",
    image: "0xProtocol.png", // Replace with the actual image URL
  },
];

export const cryptosSelector = cryptos.map((crypto) => ({...crypto, label: crypto.value, children: crypto.description}));