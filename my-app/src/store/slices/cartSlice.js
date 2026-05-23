import { createSlice } from '@reduxjs/toolkit'
import { List } from 'immutable'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
      state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.items.find(item => item.id === id)
      if (item && quantity > 0) {
        item.quantity = quantity
      }
      state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    
    clearCart: (state) => {
      state.items = []
      state.total = 0
    },
    
    // НОВЫЙ РЕДЮСЕP - Сортировка товаров в корзине по цене с использованием Immutable.js
    sortCartByPrice: (state, action) => {
      const { order = 'asc' } = action.payload
      
      // Используем Immutable.js List 
      const immutableList = List(state.items)
      
      // Сортируем с помощью Immutable.js методов
      const sortedList = order === 'asc' 
        ? immutableList.sortBy(item => item.price)
        : immutableList.sortBy(item => -item.price)
      
      // Преобразуем обратно в обычный массив
      state.items = sortedList.toJS()
      
      console.log(`Корзина отсортирована по цене (${order === 'asc' ? 'по возрастанию' : 'по убыванию'})`)
      console.log('Использован Immutable.js List для сортировки')
    }
  },
})

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart,
  sortCartByPrice // Экспортируем новый экшен
} = cartSlice.actions

export default cartSlice.reducer