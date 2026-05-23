import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import ProductCard from './ProductCard'
import cartReducer from '../../store/slices/cartSlice'
import comparisonReducer from '../../store/slices/comparisonSlice'

// Тестовые данные
const mockProduct = {
  id: 1,
  name: 'Intel Core i7-13700K',
  category: 'cpu',
  price: 42000,
  brand: 'Intel',
  specs: {
    ядра: '16',
    частота: '3.4-5.4 GHz'
  },
  rating: 4.8
}

// Вспомогательная функция для рендеринга с Redux
const renderWithRedux = (component, initialState = {}) => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      comparison: comparisonReducer
    },
    preloadedState: initialState
  })
  
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  }
}

describe('ProductCard Component', () => {
  test('отображает информацию о товаре корректно', () => {
    renderWithRedux(<ProductCard product={mockProduct} />)
    
    // Проверяем основные данные
    expect(screen.getByText('Intel Core i7-13700K')).toBeInTheDocument()
    expect(screen.getByText('Intel')).toBeInTheDocument()
    expect(screen.getByText('₽42,000')).toBeInTheDocument()
    expect(screen.getByText('4.8')).toBeInTheDocument()
    
    // Проверяем характеристики
    expect(screen.getByText('ядра:')).toBeInTheDocument()
    expect(screen.getByText('16')).toBeInTheDocument()
    expect(screen.getByText('частота:')).toBeInTheDocument()
    expect(screen.getByText('3.4-5.4 GHz')).toBeInTheDocument()
  })

  test('имеет все необходимые кнопки действий', () => {
    renderWithRedux(<ProductCard product={mockProduct} />)
    
    expect(screen.getByText('В корзину')).toBeInTheDocument()
    expect(screen.getByText('Сравнить')).toBeInTheDocument()
  })

  test('кнопка "В конфигуратор" отображается только когда передан onAddToConfigurator', () => {
    // Без пропса
    const { rerender } = renderWithRedux(<ProductCard product={mockProduct} />)
    expect(screen.queryByText('В конфигуратор')).not.toBeInTheDocument()
    
    // С пропсом
    const mockHandler = jest.fn()
    rerender(
      <Provider store={configureStore({ reducer: { cart: cartReducer, comparison: comparisonReducer } })}>
        <ProductCard product={mockProduct} onAddToConfigurator={mockHandler} />
      </Provider>
    )
    expect(screen.getByText('В конфигуратор')).toBeInTheDocument()
  })

  test('вызывает onAddToConfigurator при нажатии кнопки "В конфигуратор"', () => {
    const mockHandler = jest.fn()
    renderWithRedux(
      <ProductCard product={mockProduct} onAddToConfigurator={mockHandler} />
    )
    
    fireEvent.click(screen.getByText('В конфигуратор'))
    expect(mockHandler).toHaveBeenCalledTimes(1)
    expect(mockHandler).toHaveBeenCalledWith('cpu', mockProduct)
  })
})