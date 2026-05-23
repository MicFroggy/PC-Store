import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../utils/data'

export const fetchProductsThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductsStart())
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      dispatch(fetchProductsSuccess(products))
      
    } catch (error) {
      dispatch(fetchProductsFailure(error.message))
    }
  }
}

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true
      state.error = null
      console.log('Reducer: Загрузка началась')
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false
      state.items = action.payload
      console.log('Reducer: Товары сохранены в store')
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
      console.log('Reducer: Ошибка сохранена')
    }
  }
})

export const { 
  fetchProductsStart, 
  fetchProductsSuccess, 
  fetchProductsFailure 
} = productsSlice.actions

export default productsSlice.reducer