import { createSelector } from '@reduxjs/toolkit'

export const selectCartItemsCount = createSelector(
  (state) => state.cart.items,
  (items) => items.reduce((count, item) => count + item.quantity, 0)
)

export const selectProductsByCategory = createSelector(
  (state, category) => state.products?.filter(product => product.category === category) || [],
  (products) => products
)

export const selectComparisonCount = createSelector(
  (state) => state.comparison.comparedProducts,
  (products) => products.length
)

export const selectConfiguratorTotal = createSelector(
  (state) => state.configurator.totalPrice,
  (total) => total
)