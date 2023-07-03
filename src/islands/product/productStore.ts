import { action, atom } from 'nanostores'

export const $productAmountCounter = atom<number>(1)
export const $incrementProductAmount = action(
  $productAmountCounter,
  'incrementProductAmount',
  (store, amount = 1) => {
    store.set(store.get() + amount)
    return store.get()
  }
)
export const $productVariant = atom<string | undefined>()
export const $selectSelectedProductVariant = action(
  $productVariant,
  'selectSelectedProductVariant',
  (store, id) => {
    store.set(id)
    return store.get()
  }
)

export const $decrementProductAmount = action(
  $productAmountCounter,
  'incrementProductAmount',
  (store, amount = 1) => {
    store.set(Math.max(1, store.get() - amount))
    return store.get()
  }
)
