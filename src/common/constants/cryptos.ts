export interface CryptoCurrency {
  value: string;
  description: string;
  image: string;
  conversionRate: number;
}

export const cryptos: CryptoCurrency[] = [
  {
    value: 'ETH',
    description: 'Ethereum',
    image: 'ethereum.png',
    conversionRate: 0.00032,
  },
  {
    value: '1INCH',
    description: '1INCH Token',
    image: '1inch.png',
    conversionRate: 0.3781,
  },
  {
    value: 'ZRX',
    description: '0x Protocol Token',
    image: '0xProtocol.png',
    conversionRate: 1.97,
  },
  {
    value: 'APE',
    description: 'ApeCoin',
    image: 'ApeCoin.png',
    conversionRate: 0.87,
  },
  {
    value: 'ARB',
    description: 'Abitram',
    image: 'Abitram.png',
    conversionRate: 1.04,
  },
  {
    value: 'AAVE',
    description: 'AAVE',
    image: 'Aave.png',
    conversionRate: 0.0119,
  },
  {
    value: 'USDT',
    description: 'Tether USD',
    image: 'TetherUSD.png',
    conversionRate: 1,
  },
  {
    value: 'AXL',
    description: 'Axelar',
    image: 'AXELAR.png',
    conversionRate: 0.9,
  },
  {
    value: 'BAL',
    description: 'Balancer',
    image: 'Balancer.png',
    conversionRate: 0.28,
  },
  {
    value: 'BICO',
    description: 'Biconomy',
    image: 'Biconomy.png',
    conversionRate: 2.3,
  },
];

export const cryptosSelector = cryptos.map((crypto) => ({
  ...crypto,
  label: crypto.value,
  children: crypto.description,
}));

export const [ethereumCrypto] = cryptos;
