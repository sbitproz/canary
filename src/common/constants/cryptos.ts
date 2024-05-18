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
    conversionRate: 1.5123456,
  },
  {
    value: '1INCH',
    description: '1INCH Token',
    image: '1inch.png',
    conversionRate: 1.5123456,
  },
  {
    value: 'ZRX',
    description: '0x Protocol Token',
    image: '0xProtocol.png',
    conversionRate: 1.5123456,
  },
  {
    value: 'APE',
    description: 'ApeCoin',
    image: 'ApeCoin.png',
    conversionRate: 1.5123456,
  },
  {
    value: 'ARB',
    description: 'Abitram',
    image: 'Abitram.png',
    conversionRate: 1.5123456,
  },
  {
    value: 'AAVE',
    description: 'AAVE',
    image: 'Aave.png',
    conversionRate: 1.5123456,
  },
  {
    value: 'USDT',
    description: 'Tether USD',
    image: 'TetherUSD.png',
    conversionRate: 1.5123456,
  },
  {
    value: 'AXL',
    description: 'Axelar',
    image: 'AXELAR.png',
    conversionRate: 1.5123456,
  },
  {
    value: 'BAL',
    description: 'Balancer',
    image: 'Balancer.png',
    conversionRate: 1.5123456,
  },
  {
    value: 'BICO',
    description: 'Biconomy',
    image: 'Biconomy.png',
    conversionRate: 1.5123456,
  },
];

export const cryptosSelector = cryptos.map((crypto) => ({
  ...crypto,
  label: crypto.value,
  children: crypto.description,
}));
