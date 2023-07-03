import { useStore } from '@nanostores/react'
import type React from 'react'
import { $productVariant, $selectSelectedProductVariant } from './productStore'

interface IVaraint {
  id: string
  color: string
  name: string
}

interface Props {
  variants: IVaraint[]
}

const ProductVariantSelector: React.FC<Props> = ({ variants }) => {
  const $selectedVariant = useStore($productVariant)

  if (variants.length === 0) {
    return null
  }
  return (
    <div className="flex gap-x-2">
      {variants.map((variant, index) => (
        <span
          key={index}
          className={[
            `w-6 h-6 rounded cursor-pointer transition duration-300 hover:scale-110`,
            $selectedVariant === variant.id && 'scale-110',
          ]
            .filter(Boolean)
            .join(' ')}
          style={{
            background: variant.color,
          }}
          onClick={() => {
            $selectSelectedProductVariant(variant.id)
          }}
          title={variant.name}
        />
      ))}
    </div>
  )
}

export default ProductVariantSelector
