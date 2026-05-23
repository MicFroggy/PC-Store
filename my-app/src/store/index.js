import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import configuratorReducer from './slices/configuratorSlice'
import comparisonReducer from './slices/comparisonSlice'
import simpleLogger from './middlewares/simpleLogger'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    configurator: configuratorReducer,
    comparison: comparisonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(simpleLogger),
  devTools: import.meta.env.MODE !== 'production',
})

export default store