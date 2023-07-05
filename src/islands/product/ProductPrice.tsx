import { useStore } from '@nanostores/react'
import type React from 'react'
import { $productAmountCounter } from './productStore'
import { formatPrice } from '@/utils'

interface Props {
  price: number
}

const ProductPrice: React.FC<Props> = ({ price }) => {
  const $counter = useStore($productAmountCounter)

  return (
    <strong className="font-ibm-plex-sans font-bold text-black text-2xl">
      {formatPrice($counter * price)}
    </strong>
  )
}

export default ProductPrice
