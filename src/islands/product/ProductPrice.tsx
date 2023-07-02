import { useStore } from '@nanostores/react'
import type React from 'react'
import { $productAmountCounter } from './productStore'

interface Props {
  price: number
}

const priceFormatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'NGN',
  currencyDisplay: 'narrowSymbol',
  trailingZeroDisplay: 'stripIfInteger',
} as Intl.NumberFormatOptions)

const ProductPrice: React.FC<Props> = ({ price }) => {
  const $counter = useStore($productAmountCounter)

  return (
    <strong className="font-ibm-plex-sans font-bold text-black text-2xl">
      {priceFormatter.format($counter * price)}
    </strong>
  )
}

export default ProductPrice
