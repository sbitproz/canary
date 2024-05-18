export function numberFormatter(num: number, digits: number) {
  if (num < 1000) {
    return num;
  }

  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
  const item = lookup.reverse().find((item) => num >= item.value);
  return item
    ? (num / item.value).toFixed(digits).replace(regexp, '').concat(item.symbol)
    : '0';
}

export const inputNumberFormatter = (value: unknown) =>
  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const numberParser = (value: string | undefined): number =>
  Number(value!.replace(/\$\s?|(,*)/g, ''));
