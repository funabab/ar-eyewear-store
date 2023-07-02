import { useStore } from '@nanostores/react'
import {
  $decrementProductAmount,
  $incrementProductAmount,
  $productAmountCounter,
} from './productStore'

const ProductCounter = () => {
  const $counter = useStore($productAmountCounter)

  return (
    <div className="inline-flex font-roboto items-center text-lg border text-black border-neutral-300 rounded-md">
      <button
        className="px-3 py-1 disabled:text-neutral-400"
        onClick={() => $decrementProductAmount()}
      >
        -
      </button>
      <span className="px-2 text-center min-w-[3em]">{$counter}</span>
      <button
        className="px-3 py-1 disabled:text-neutral-400"
        onClick={() => $incrementProductAmount()}
      >
        +
      </button>
    </div>
  )
}

export default ProductCounter
