export interface CryptoCurrency {
  value: string;
  description: string;
  image: string;
}

export const cryptos: CryptoCurrency[] = [
  {
    value: "ETH",
    description: "Ethereum",
    image: "ethereum.png",
  },
  {
    value: "1INCH",
    description: "1INCH Token",
    image: "1inch.png",
  },
  {
    value: "ZRX",
    description: "0x Protocol Token",
    image: "0xProtocol.png",
  },
  {
    value: "APE",
    description: "ApeCoin",
    image: "ApeCoin.png",
  },
  {
    value: "ARB",
    description: "Abitram",
    image: "Abitram.png",
  },
  {
    value: "AAVE",
    description: "AAVE",
    image: "Aave.png",
  },
  {
    value: "USDT",
    description: "Tether USD",
    image: "TetherUSD.png",
  },
  {
    value: "AXL",
    description: "Axelar",
    image: "AXELAR.png",
  },
  {
    value: "BAL",
    description: "Balancer",
    image: "Balancer.png",
  },
  {
    value: "BICO",
    description: "Biconomy",
    image: "Biconomy.png",
  },
];

export const cryptosSelector = cryptos.map((crypto) => ({
  ...crypto,
  label: crypto.value,
  children: crypto.description,
}));
