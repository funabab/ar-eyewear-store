const priceFormatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'NGN',
  currencyDisplay: 'narrowSymbol',
})

export const formatPrice = (price: number) => priceFormatter.format(price)
