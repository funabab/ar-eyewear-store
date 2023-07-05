const priceFormatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'NGN',
  currencyDisplay: 'narrowSymbol',
  trailingZeroDisplay: 'stripIfInteger',
} as Intl.NumberFormatOptions)

export const formatPrice = (price: number) => priceFormatter.format(price)
