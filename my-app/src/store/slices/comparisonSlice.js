import { createSlice } from '@reduxjs/toolkit'

const comparisonSlice = createSlice({
  name: 'comparison',
  initialState: {
    comparedProducts: [],
    maxComparisonItems: 4
  },
  reducers: {
    addToComparison: (state, action) => {
      if (state.comparedProducts.length < state.maxComparisonItems) {
        if (!state.comparedProducts.find(product => product.id === action.payload.id)) {
          state.comparedProducts.push(action.payload)
        }
      }
    },
    removeFromComparison: (state, action) => {
      state.comparedProducts = state.comparedProducts.filter(product => product.id !== action.payload)
    },
    clearComparison: (state) => {
      state.comparedProducts = []
    }
  },
})

export const { addToComparison, removeFromComparison, clearComparison } = comparisonSlice.actions
export default comparisonSlice.reducer