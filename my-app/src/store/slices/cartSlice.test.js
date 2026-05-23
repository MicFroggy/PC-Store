import cartReducer, { addToCart, removeFromCart, clearCart } from './cartSlice'

describe('cartSlice', () => {
  const initialState = {
    items: [],
    total: 0
  }

  const sampleProduct = {
    id: 1,
    name: 'Test Product',
    price: 1000
  }

  test('должен возвращать начальное состояние', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  test('должен добавлять товар в корзину', () => {
    const newState = cartReducer(initialState, addToCart(sampleProduct))
    
    expect(newState.items).toHaveLength(1)
    expect(newState.items[0]).toEqual({
      ...sampleProduct,
      quantity: 1
    })
    expect(newState.total).toBe(1000)
  })

  test('должен увеличивать количество при добавлении существующего товара', () => {
    const stateWithItem = {
      items: [{ ...sampleProduct, quantity: 1 }],
      total: 1000
    }
    
    const newState = cartReducer(stateWithItem, addToCart(sampleProduct))
    
    expect(newState.items[0].quantity).toBe(2)
    expect(newState.total).toBe(2000)
  })

  test('должен удалять товар из корзины', () => {
    const stateWithItems = {
      items: [
        { ...sampleProduct, quantity: 2 },
        { id: 2, name: 'Product 2', price: 2000, quantity: 1 }
      ],
      total: 4000
    }
    
    const newState = cartReducer(stateWithItems, removeFromCart(1))
    
    expect(newState.items).toHaveLength(1)
    expect(newState.items[0].id).toBe(2)
    expect(newState.total).toBe(2000)
  })

  test('должен очищать корзину', () => {
    const stateWithItems = {
      items: [
        { ...sampleProduct, quantity: 2 },
        { id: 2, name: 'Product 2', price: 2000, quantity: 1 }
      ],
      total: 4000
    }
    
    const newState = cartReducer(stateWithItems, clearCart())
    
    expect(newState.items).toHaveLength(0)
    expect(newState.total).toBe(0)
  })
})